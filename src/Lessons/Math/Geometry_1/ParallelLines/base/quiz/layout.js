// @flow
import Fig from 'figureone';
import commonLessonLayout from '../common/layout';

const { Rect } = Fig.tools.g2;

// const cssColorNames = [
//   'latin',
//   'line',
// ];

/* eslint-disable key-spacing, comma-spacing, no-multi-spaces, space-in-parens */
export default function lessonLayout() {
  const layout: Object = commonLessonLayout();
  layout.addElements[0].options.move.translationBounds = new Rect(
    -2.5, -1.5, 5, 3,
  );
  layout.addElements[1].options.move.translationBounds = new Rect(
    -2.5, -1.5, 5, 3,
  );
  return layout;
}
