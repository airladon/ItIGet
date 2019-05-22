/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import tester from '../../../../../../testers/presentationLessonTester';

tester(
  {
    pages: {
      1: { threshold: { next: 0.01, prev: 0.01 } },
    },
  },
  'goto',
  'nextPrev',
);