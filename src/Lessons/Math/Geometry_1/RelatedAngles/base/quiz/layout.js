// @flow
import Fig from 'figureone';
import commonLessonLayout from '../common/layout';

const { Point } = Fig.tools.g2;

// const cssColorNames = [
//   'latin',
//   'line',
// ];

/* eslint-disable key-spacing, comma-spacing, no-multi-spaces, space-in-parens */
export default function lessonLayout() {
  const layout: Object = commonLessonLayout();
  layout.minSeparation = 0.6;
  layout.maxSeparation = 1.5;

  layout.quiz = {
    check: new Point( 0.7, -1.7),
    input: new Point(0, -1.7),
    newProblem: new Point(0.852, -1.7),
  };
  // layout.check = new Point(1, -1.5);
  return layout;
}
