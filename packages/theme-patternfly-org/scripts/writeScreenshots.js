const path = require('path');
const os = require('os');
const fs = require('fs-extra');
const { Cluster } = require('puppeteer-cluster');
const sharp = require('sharp');
const { fullscreenRoutes } = require('../routes.js');

const screenshotBase = path.join(process.cwd(), 'src/generated');
sharp.cache(false);

async function writeScreenshot({ page, data: { url, urlPrefix } }) {
  // Default viewport is 800x600
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
  await page.goto(url);
  await page.waitForSelector('.pf-u-h-100');
  // Wait extra 300ms
  await new Promise(resolve => {
    setTimeout(resolve, 300);
  });
  const outfile = path.join(
    screenshotBase,
    url.replace(`${urlPrefix}/`, '') + '.png'
  );
  fs.ensureDirSync(path.dirname(outfile));
  await page.screenshot({ path: outfile });
  console.log(path.relative(process.cwd(), outfile));
  // Resize since max-width allowed for thumbnails in CSS is 800px
  let buffer = await sharp(outfile)
    .resize(800, 450)
    .toBuffer();
  // Overwrite old file
  await sharp(buffer).toFile(outfile);
}

async function writeScreenshots({ urlPrefix }) {
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: os.cpus().length,
    // puppeteerOptions: {
    //   headless: false, // just for testing...
    // }
  });

  // Define a task (in this case: screenshot of page)
  await cluster.task(writeScreenshot);

  // Add some pages to queue
  Object.entries(fullscreenRoutes)
    .filter(([, { isFullscreenOnly }]) => isFullscreenOnly)
    .forEach(([url,]) => cluster.queue({
      url: `${urlPrefix}${url}`,
      urlPrefix
    }));

  // Shutdown after everything is done
  await cluster.idle();
  await cluster.close();
}

module.exports = {
  writeScreenshots
}
