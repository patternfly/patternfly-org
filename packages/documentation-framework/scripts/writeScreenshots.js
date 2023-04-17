const path = require('path');
const os = require('os');
const fs = require('fs-extra');
const { Cluster } = require('puppeteer-cluster');
const sharp = require('sharp');
const { fullscreenRoutes } = require('../routes.js');

const screenshotBase = path.join(process.cwd(), 'patternfly-docs/generated');
sharp.cache(false);

async function writeScreenshot({ page, data: { url, urlPrefix } }) {
  await page.goto(url);
  await page.addStyleTag({content: '*,*::before,*::after{animation-delay:-1ms !important;animation-duration:1ms !important;animation-iteration-count:1 !important;transition-duration:0s !important;transition-delay:0s !important;}'}); // disable animations/transitions so they don't interfere with screenshot tool
  await page.waitForSelector('.pf-u-h-100');
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

async function writeScreenshots({ urlPrefix, allRoutes }) {
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: os.cpus().length,
    puppeteerOptions: {
      headless: true, // set to false for testing...
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      defaultViewport: {width: 1920, height: 1080}
    }
  });

  // Define a task (in this case: screenshot of page)
  await cluster.task(writeScreenshot);

  // Add some pages to queue
  Object.entries(fullscreenRoutes)
    .filter(([, { isFullscreenOnly }]) => allRoutes || isFullscreenOnly)
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
