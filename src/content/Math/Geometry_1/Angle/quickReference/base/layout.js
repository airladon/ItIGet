// @flow
import Fig from 'figureone';
import baseLayout from '../../../../../common/layout';
import './style.scss';

const {
  Point,
  // Transform,
  // Line,
} = Fig.tools.g2;

const cssColorNames = [
  'qrAngles_lines',
  'qrAngles_angles',
  'qrAngles_moreSharp',
  'qrAngles_lessSharp',
  'qrAngles_center',
  'qrAngles_arrow',
];

/* eslint-disable key-spacing, comma-spacing, no-multi-spaces, space-in-parens */
export default function lessonLayout() {
  const layout: Object = baseLayout(cssColorNames);
  // layout.colors = Fig.tools.color.getCSSColors(cssColorNames);
  const { colors } = layout;
  layout.position = new Point(0, 0);

  // //////////////////////////////////////////////////
  // Angle
  // //////////////////////////////////////////////////
  const length = 1.5;
  const lineWidth = 0.03;
  const angleRadius = 0.5;
  layout.arrowLocation = length * 0.9;
  layout.angle = {
    name: 'angle',
    method: 'collection',
    mods: {
      scenarios: {
        center: { position: new Point(0, -0.5) },
        summary: { position: new Point(0, -0.35), scale: 0.8 },
      },
    },
    scenario: 'center',
    addElements: [
      {
        name: 'fill',
        method: 'polygon',
        options: {
          radius: angleRadius,
          fill: true,
          color: colors.qrAngles_angles,
          sides: 200,
        },
      },
      {
        name: 'line1',
        method: 'line',
        options: {
          length,
          width: lineWidth,
          color: colors.qrAngles_lines,
          move: {
            type: 'rotation',
            middleLengthPercent: 0,
          },
        },
        mods: {
          scenarios: {
            offScreen: { position: new Point(-5, 0), rotation: 0 },
            vertical: { position: new Point(-0.5, 0), rotation: Math.PI / 2 },
            start: { position: new Point(0, 0), rotation: 0 },
          },
          interactiveLocation: new Point(length * 0.8, 0),
        },
      },
      {
        name: 'line2',
        method: 'line',
        options: {
          length,
          width: lineWidth,
          color: colors.qrAngles_lines,
        },
        mods: {
          scenarios: {
            offScreen: { position: new Point(5, 0), rotation: Math.PI },
            vertical: { position: new Point(0.5, 0), rotation: Math.PI / 2 },
            start: { position: new Point(0, 0), rotation: 0 },
          },
        },
      },
    ],
  };

  layout.addElements = [
    layout.angle,
  ];
  return layout;
}
