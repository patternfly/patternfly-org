const path = require('path');
const os = require('os');
const fs = require('fs-extra');
const { Cluster } = require('puppeteer-cluster');
const sharp = require('sharp');
const { fullscreenRoutes } = require(path.join(process.cwd(), 'src/routes'));

const urlPrefix = "http://localhost:5000/v4";
const screenshotBase = path.join(process.cwd(), 'src/generated');
sharp.cache(false);

async function writeScreenshot({ page, data: { title, url } }) {
  if (url.includes('table/react-demos')) {
    debugger;
  }
  // Default viewport is 800x600
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
  await page.goto(url);
  const outfile = path.join(
    screenshotBase,
    url.replace(`${urlPrefix}/`, '') + '.jpg'
  );
  fs.ensureDirSync(path.dirname(outfile));
  await page.screenshot({ path: outfile });
  // Resize since max-width allowed for thumbnails in CSS is 800px
  let buffer = await sharp(outfile)
    .resize(800, 450, {
      fit: sharp.fit.inside,
      withoutEnlargement: true,
    })
    .toBuffer();
  // Overwrite old file
  await sharp(buffer).toFile(outfile);
}

async function writeScreenshots() {
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
    .forEach(([url, { title }]) => cluster.queue({
      url: `${urlPrefix}${url}`,
      title
    }));

  // Shutdown after everything is done
  await cluster.idle();
  await cluster.close();
}

writeScreenshots();
