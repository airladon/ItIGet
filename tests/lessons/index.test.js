/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import getLessonIndex from '../../src/Lessons/LessonsCommon/lessonindex';

const fs = require('fs');
const fetch = require('node-fetch');

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    return { status: 'fetch error' };
  }
};

function getAddress() {
  const content = fs.readFileSync('/opt/app/tests/lessons/tig_address', 'utf8');
  return content.slice(0, -1);      // remove the carrige return
}

const sitePath = getAddress();

const allTests = [];
const index = getLessonIndex();
Object.keys(index).forEach((lessonName) => {
  const lesson = index[lessonName];
  const { uid } = lesson;
  Object.keys(lesson.versions).forEach((version) => {
    const { topics } = lesson.versions[version];
    topics.forEach((topic) => {
      if (topic !== 'dev') {
        allTests.push([uid, topic, version]);
      }
    });
  });
});

describe('Lesson ratings', () => {
  test.each(allTests)(
    '%s/%s/%s', async (uid, topic, version) => {
      jest.setTimeout(60000);
      const result = await getData(`${sitePath}/rating/${uid}/${topic}/${version}`);
      expect(result.status).toBe('ok');
    },
  );
});
