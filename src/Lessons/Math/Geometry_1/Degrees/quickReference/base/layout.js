// @flow
import Fig from 'figureone';
import baseLayout from '../../../../../LessonsCommon/layout';
import './style.scss';

const {
  Point,
} = Fig.tools.g2;

const cssColorNames = [
  'qrDegrees_lines', 'qrDegrees_angles', 'qrDegrees_arc', 'qrDegrees_marks',
];

/* eslint-disable key-spacing, comma-spacing, no-multi-spaces, space-in-parens */
export default function lessonLayout() {
  const layout: Object = baseLayout();
  layout.colors = Fig.tools.color.getCSSColors(cssColorNames);
  const { colors } = layout;
  layout.position = new Point(0, 0);
  const radius = 1.2;
  layout.radius = radius;
  const width = 0.03;
  layout.width = width;

  layout.line1 = {
    name: 'line1',
    method: 'line',
    options: {
      length: radius,
      width,
      color: colors.qrDegrees_lines,
      move: {
        type: 'rotation',
        middleLengthPercent: 0,
      },
    },
    mods: {
      interactiveLocation: new Point(radius * 0.8, 0),
      scenarios: {
        start: { rotation: 1.3 },
      },
    },
    scenario: 'start',
  };
  layout.line2 = {
    name: 'line2',
    method: 'line',
    options: {
      length: radius,
      width,
      color: colors.qrDegrees_lines,
    },
  };
  layout.angle = {
    name: 'angle',
    method: 'angle',
    options: {
      curve: {
        width,
        sides: 400,
        radius: radius / 4,
      },
      color: colors.qrDegrees_angles,
    },
  };

  const marks = (numMarks: number, inner: number = radius, lineWidth: number = width / 2, name: string = `marks${numMarks}`) => ({
    name,
    method: 'radialLines',
    options: {
      innerRadius: inner,
      outerRadius: radius * 1.1,
      color: colors.qrDegrees_marks,
      width: lineWidth,
      dAngle: Math.PI * 2 / numMarks,
    },
  });
  layout.degrees = {
    name: 'degrees',
    method: 'collection',
    addElements: [
      marks(360, radius * 1.05),
      marks(36, radius * 1.025),
    ],
  };

  layout.angleText = {
    name: 'angleText',
    method: 'collection',
    addElements: [
      {
        name: 'label',
        method: 'text',
        options: {
          text: 'Angle:',
          color: colors.qrDegrees_angles,
          // style: 'normal',
          weight: 700,
          family: 'Helvetica',
          position: [-0.1, 0],
          hAlign: 'right',
          size: 0.14,
        },
        mods: {
          interactiveLocation: new Point(-0.05, 0.06),
        },
      },
      {
        name: 'value',
        method: 'text',
        options: {
          color: colors.qrDegrees_lines,
          weight: 500,
          family: 'Helvetica',
          hAlign: 'left',
          size: 0.14,
        },
      },
    ],
    mods: {
      scenarios: {
        topLeft: { position: new Point(-1.7, 1.5) },
        bottomRight: { position: new Point(1.7, -1.3) },
        bottomLeft: { position: new Point(-1.2, -1.2) },
        bottom: { position: new Point(-0.2, -1.5) },
        // bottomSlightRight: { position: new Point(1.4, -1.2) },
        bottomSlightRight: { position: new Point(0.15, -1.5) },
        summary: { position: new Point(0.15, -1.55), scale: 1.2 },
        qr: { position: new Point(0.2, -1.7), scale: 1.5 },
      },
    },
  };

  layout.circle = {
    name: 'circle',
    method: 'collection',
    addElements: [
      layout.degrees,
      layout.angle,
      layout.line2,
      layout.line1,
      layout.angleText,
    ],
    mods: {
      scenarios: {
        'center': { position: new Point(0, -0.15), scale: 1 },
        'right': { position: new Point(1.2, -0.1), scale: 0.9 },
        'summary': { position: new Point(1.4, 0.1), scale: 0.9 },
        'qr': { position: new Point(0, 0.3), scale: 1 },
      },
    },
    scenario: 'center',
  };
  layout.addElements = [
    layout.circle,
  ];
  return layout;
}