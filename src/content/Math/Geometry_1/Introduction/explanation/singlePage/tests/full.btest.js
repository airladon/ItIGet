/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import tester from '../../../../../../testers/singlePageTester';

tester(
  { width: 300 },
  { width: 300, height: 450, includeQRs: true },
  { width: 700 },
  { width: 700, height: 450, includeQRs: true },
);