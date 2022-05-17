/**
 * Wait for a selector before running axe
 *
 * @param page page from puppeteer
 */
async function waitFor(page) {
  await page.waitForSelector('#root > *');
}

module.exports = {
  prefix: 'http://localhost:5000/v4',
  waitFor,
  crawl: true,
  urls: [
    {
      url: '/',
      crawl: false,
      label: 'home fullscreen nav expanded',
      viewportDimensions: {width: 1920, height: 1080},
      afterNav: async (page) => {
        await page.click("button#nav-toggle");
      }
    },
    {
      url: '/',
      crawl: false,
      label: 'home fullscreen nav collapsed',
      viewportDimensions: {width: 1920, height: 1080}
    },
    {
      url: '/',
      crawl: false,
      label: 'home mobile nav collapsed',
      viewportDimensions: {width: 400, height: 900}
    },
    {
      url: '/',
      crawl: false,
      label: 'home mobile nav expanded',
      viewportDimensions: {width: 400, height: 900},
      afterNav: async (page) => {
        await page.click("button#nav-toggle");
      }
    },
    {
      url: '/',
      label: 'page content',
      context: 'document.getElementById("ws-page-main")'
    },
    {
      url: '/components/table',
      crawl: false,
      label: 'composable table content on mobile screen',
      viewportDimensions: {width: 400, height: 900},
    },
    {
      url: '/components/table/react-legacy',
      crawl: false,
      label: 'legacy table content on mobile screen',
      viewportDimensions: {width: 400, height: 900},
    },
    {
      url: '/components/table/html',
      crawl: false,
      label: 'html table content on mobile screen',
      viewportDimensions: {width: 400, height: 900},
    }
  ],
  ignoreIncomplete: true,
  skip: '(mailto)|(/(react|react-demos|react-legacy|react-composable|html|html-demos)/.+)|(/react$)'
};
