/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import tester from '../../../../../../testers/presentationFormatTester';

tester(2);
tester({ element: 'body', prefix: 'full ' }, 1);
