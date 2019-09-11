// @flow
// import Fig from 'figureone';
import baseLayout from '../../../../../common/layout';

// const {
//   Point,
//   // Rect,
//   // Transform,
//   // Line,
// } = Fig.tools.g2;

// const { joinObjects } = Fig.tools.misc;

const cssColorNames = [
  'lines',
  'angles',
  'pads',
];

/* eslint-disable key-spacing, comma-spacing, no-multi-spaces, space-in-parens */
export default function lessonLayout() {
  const layout: Object = baseLayout(cssColorNames);
  const { colors } = layout;
  layout.width = 0.03;

  layout.defaultTri = [
    [2, -1.1],
    [-2, -1.1],
    [-1, 0.7],
  ];
  layout.customTriangle = {
    name: 'triangle',
    method: 'polyLine',
    options: {
      points: layout.defaultTri,
      close: true,
      color: colors.lines,
      width: layout.width,
      makeValid: {
        shape: 'triangle',
        hide: {
          minAngle: 15 * Math.PI / 180,
          maxAngle: 150 * Math.PI / 180,
          minSide: 0.8,
        },
      },
      pad: {
        color: [1, 1, 1, 0.01],
        radius: 0.3,
        sides: 30,
        fill: true,
        isMovable: true,
        touchRadius: 0.4,
        boundary: [-2.8, -1.5, 5.6, 2.8],
      },
      angle: {
        color: colors.angles,
        curve: {
          radius: 0.3,
          width: layout.width,
        },
        label: {
          radius: 0.31,
        },
        autoRightAngle: false,
      },
      side: {
        label: {
          // text: '',
          offset: 0.1,
          precision: 2,
        },
      },
    },
  };

  layout.addElements = [
    layout.customTriangle,
  ];
  return layout;
}