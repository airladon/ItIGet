// @flow
import Fig from 'figureone';
import baseLayout from '../../../../../LessonsCommon/layout';

const {
  Point, Rect,
  // Transform,
  // Line,
} = Fig.tools.g2;

const { joinObjects } = Fig.tools.misc;

const cssColorNames = [
  'lines',
  'notParallel',
];

/* eslint-disable key-spacing, comma-spacing, no-multi-spaces, space-in-parens */
export default function lessonLayout() {
  const layout: Object = baseLayout();
  layout.colors = Fig.tools.color.getCSSColors(cssColorNames);
  const { colors } = layout;

  layout.length = 1.5;
  layout.width = 0.03;
  layout.scale = {
    long: 2.7,
    short: 0.5,
  };
  const line = {
    method: 'line',
    options: {
      length: layout.length,
      width: layout.width,
      color: colors.lines,
      vertexSpaceStart: 'center',
      move: {
        type: 'centerTranslateEndRotation',
      },
    },
    mods: {
      interactiveLocation: new Point(layout.length / 2 * 0.8, 0),
      scenarios: {
        center: { position: new Point(0, 0.4), rotation: 0, scale: 1 },
      },
    },
  };
  const line1 = joinObjects({}, line, {
    name: 'line1',
  });
  const line2 = joinObjects({}, line, {
    name: 'line2',
    mods: {
      scenarios: {
        center: { position: new Point(0, -0.4) },
      },
    },
  });
  layout.addElements = [
    line1,
    line2,
  ];
  return layout;
}
