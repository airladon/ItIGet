/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import tester from './parent.btest';

tester({
  path: 'areaTriangle/base',
  explanation: 6,
  summary: 1,
  extraTests: [
    ['explanation', 3, [1, 5]],
  ],
});
