// @flow
import Fig from 'figureone';
import baseLayout from '../../../../../common/layout';
import './style.scss';

const {
  Point,
  // Transform,
  // Line,
} = Fig.tools.g2;

// const { joinObjects } = Fig.tools.misc;

/* eslint-disable key-spacing, comma-spacing, no-multi-spaces, space-in-parens */
export default function diagramLayout() {
  const layout: Object = baseLayout();
  // layout.colors = Fig.tools.color.getCSSColors(cssColorNames);
  const { colors } = layout;
  colors.qrAngleTypes_lines = colors.get('blue').rgb;
  colors.qrAngleTypes_angle = colors.get('green').rgb;
  colors.qrAngleTypes_fill = colors.get('green', 'darkest').rgb;
  layout.position = new Point(0, 0);
  const radius = 1.2;
  const width = 0.03;

  layout.line1 = {
    name: 'line1',
    method: 'line',
    options: {
      length: radius,
      width,
      color: colors.qrAngleTypes_lines,
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
      color: colors.qrAngleTypes_lines,
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
      autoRightAngle: true,
      rightAngleRange: 0.01,
      color: colors.qrAngleTypes_angle,
    },
  };

  layout.acute = {
    name: 'acute',
    method: 'polygon',
    options: {
      radius,
      fill: true,
      sides: 200,
      sidesToDraw: 50,
      color: colors.qrAngleTypes_fill,
    },
  };

  layout.obtuse = {
    name: 'obtuse',
    method: 'polygon',
    options: {
      radius,
      fill: true,
      sides: 200,
      sidesToDraw: 50,
      rotation: Math.PI / 2,
      color: colors.qrAngleTypes_fill,
    },
  };

  layout.reflex = {
    name: 'reflex',
    method: 'polygon',
    options: {
      radius,
      fill: true,
      sides: 200,
      sidesToDraw: 100,
      rotation: Math.PI,
      color: colors.qrAngleTypes_fill,
    },
  };

  layout.fig = {
    name: 'fig',
    method: 'collection',
    addElements: [
      layout.acute,
      layout.obtuse,
      layout.reflex,
      // layout.degrees,
      // layout.xAxis,
      // layout.yAxis,
      layout.angle,
      // layout.arc,
      layout.line2,
      layout.line1,
      // layout.angleText,
    ],
    mods: {
      scenarios: {
        'right': { position: new Point(1.4, -0.1), scale: 1 },
        // 'right': { position: new Point(1.2, -0.1), scale: 0.9 },
        'summary': { position: new Point(1.4, 0.1), scale: 0.9 },
        'qr': { position: new Point(0, 0.3), scale: 1 },
      },
    },
    scenario: 'right',
  };

  layout.addElements = [
    layout.fig,
    // layout.right,
  ];

  return layout;
}
