/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

const sitePath = process.env.TIG__ADDRESS || 'http://host.docker.internal:5003';
expect.extend({ toMatchImageSnapshot });

export default function tester(pathIn, topicNameIn, fromPageIn, toPagesIn) {
  describe('describing', () => {
    let path;
    let topicName;
    let fromPage;
    let toPages;
    beforeEach(() => {
      path = pathIn;
      topicName = topicNameIn;
      fromPage = fromPageIn;
      toPages = toPagesIn;
    });
    test(
      'hello',
      async () => {
        jest.setTimeout(120000);
        const fullpath =
          `${sitePath}/Lessons/Math/Geometry_1/${path}/${topicName}?page=${fromPage}`;
        await page.goto(fullpath);
        await page.setViewport({ width: 600, height: 400 });
        await page.evaluate(() => {
          window.scrollTo(0, 180);
        });

        let currentPage = fromPage;
        const next = 'lesson__button-next';
        const prev = 'lesson__button-previous';
        let navigation = next;
        for (let k = 0; k < toPages.length; k += 1) {
          const targetPage = toPages[k];
          if (targetPage > currentPage) {
            navigation = next;
          } else if (targetPage < currentPage) {
            navigation = prev;
          } else {
            navigation = null;
          }
          // Take screenshot
          // eslint-disable-next-line no-await-in-loop
          let image = await page.screenshot();
          expect(image).toMatchImageSnapshot({
            failureThreshold: '0.005',             // 480 pixels
            failureThresholdType: 'percent',
            customSnapshotIdentifier: `${path}/${topicName} page ${currentPage}`,
          });
          while (currentPage.toString() !== targetPage.toString()) {
            if (navigation != null) {
              const watchDog = page.waitForFunction(() => {
                if (window.frameCounter == null) {
                  window.frameCounter = 0;
                }
                window.frameCounter += 1;
                if (window.frameCounter === 30) {
                  window.frameCounter = 0;
                  return true;
                }
                return false;
              }, { polling: 'raf' });

              // eslint-disable-next-line no-await-in-loop
              const hrefElement = await page.$(`#${navigation}`);
              // eslint-disable-next-line no-await-in-loop
              await hrefElement.click();
              // eslint-disable-next-line no-await-in-loop
              await page.mouse.click(0, 0);
              // eslint-disable-next-line no-await-in-loop
              await watchDog;
            }

            // Wait for steady state
            const steadyWatch = page.waitForFunction('window.presentationLessonTransitionStatus === "steady"');
            // eslint-disable-next-line no-await-in-loop
            await steadyWatch;

            // Get current page
            // eslint-disable-next-line no-await-in-loop
            await page.cookies()
              .then(cookies => cookies.filter(c => c.name === 'page'))
              // eslint-disable-next-line no-loop-func
              .then((pageCookie) => { currentPage = pageCookie[0].value; });

            // Take screenshot
            // eslint-disable-next-line no-await-in-loop
            image = await page.screenshot();
            expect(image).toMatchImageSnapshot({
              failureThreshold: '0.005',             // 480 pixels
              failureThresholdType: 'percent',
              customSnapshotIdentifier: `${path}/${topicName} page ${currentPage}`,
            });
          }
        }
      },
    );
  });
}
