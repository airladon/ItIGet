// @flow
// import Fig from 'figureone';
import baseLayout from '../../../../../common/layout';
import './style.scss';

// const {
//   // Point,
//   // Transform,
//   // Line,
// } = Fig.tools.g2;

// const { joinObjects } = Fig.tools.misc;

/* eslint-disable key-spacing, comma-spacing, no-multi-spaces, space-in-parens */
export default function diagramLayout() {
  const layout: Object = baseLayout();
  const { colors } = layout;
  colors.qrIsoscelesSides = colors.get('blue').rgb;
  colors.qrIsoscelesAngles = colors.get('red').rgb;
  colors.qrIsoscelesDisabled = colors.get('diagram', 'disabled', 'darker').rgb;
  layout.position = [0, -0.1];
  const width = 0.02;
  const points = [
    [-1, -1],
    [0, 1],
    [1, -1],
  ];
  const midPoint = [0, -1];
  const angle = (text, autoRightAngle = false) => ({
    curve: {
      radius: 0.3,
      width,
      sides: 200,
    },
    autoRightAngle,
    color: colors.qrIsoscelesAngles,
    label: {
      text,
    },
  });
  const side = (text, linePosition = 0.5, location = 'outside') => ({
    label: {
      text,
      offset: 0.1,
      location,
      linePosition,
    },
  });

  const on2 = numerator => ({
    elements: {
      num: numerator,
      v: { symbol: 'vinculum' },
      _2: '2',
    },
    forms: {
      base: { frac: ['num', 'v', '_2'] },
    },
    scale: 0.6,
    defaultFormAlignment: {
      xAlign: 'center',
    },
  });

  layout.left = {
    name: 'left',
    method: 'polyline',
    options: {
      width,
      points: [points[0], points[1], midPoint],
      close: true,
      angle: [angle('a'), angle(on2('b')), angle('c', true)],
      side: [side('A'), side('L', 0.7, 'inside'), side(on2('B'))],
      color: colors.qrIsoscelesSides,
    },
    mods: {
      scenarios: {
        combined: { position: [0, 0], scale: 1 },
        separate: { position: [-0.5, 0], scale: 1 },
        summary: { position: [0, -0.2], scale: 1 },
      },
    },
  };

  layout.right = {
    name: 'right',
    method: 'polyline',
    options: {
      width,
      points: [points[2], midPoint, points[1]],
      close: true,
      angle: [angle('a'), angle('c', true), angle(on2('b'))],
      side: [side(on2('B')), side('L', 0.3, 'inside'), side('A')],
      color: colors.qrIsoscelesSides,
    },
    mods: {
      scenarios: {
        combined: { position: [0, 0], scale: 1 },
        separate: { position: [0.5, 0], scale: 1 },
        summary: { position: [0, -0.2], scale: 1 },
      },
    },
  };
  layout.triangle = {
    name: 'triangle',
    method: 'polyline',
    options: {
      width,
      points,
      close: true,
      angle: [angle('a'), angle('b'), angle('a')],
      side: [side('A'), side('A'), side('2B')],
      color: colors.qrIsoscelesSides,
    },
    mods: {
      scenarios: {
        center: { position: [0, 0], scale: 1 },
        summary: { position: [0, 0], scale: 1 },
      },
    },
  };
  layout.split = {
    name: 'split',
    method: 'line',
    options: {
      width,
      vertexSpaceStart: 'start',
      position: points[1],
      length: points[1][1] - midPoint[1],
      angle: -Math.PI / 2,
      label: {
        text: 'L',
        offset: 0.1,
        linePosition: 0.7,
      },
      // angle: [angle('a'), angle(''), angle('a')],
      // side: [side('C'), side('C'), side('2B')],
      color: colors.qrIsoscelesSides,
    },
    mods: {
      scenarios: {
        center: { position: points[1], scale: 1 },
        summary: { position: [points[1][0], points[1][1] - 0.2], scale: 1 },
      },
    },
  };

  const a = Math.atan((points[1][1] - points[0][1]) / points[2][0]) + Math.PI / 2;
  const w2 = width * 1.5;
  const cosa = Math.cos(a);
  const sina = Math.sin(a);
  const cosar = Math.cos(Math.PI - a);
  const sinar = Math.sin(Math.PI - a);
  layout.correction = {
    name: 'correction',
    method: 'polyline',
    options: {
      points: [
        [points[0][0] + w2 * cosa, points[0][1] + w2 * sina],
        [points[1][0] + w2 * cosa, points[1][1] + w2 * sina],
        [points[1][0], points[1][1] + w2 * 1.5],
        [points[1][0] + w2 * cosar, points[1][1] + w2 * sinar],
        [points[2][0] + w2 * cosar, points[2][1] + w2 * sinar],
      ],
      close: false,
      color: colors.diagram.background, // [0, 1, 0, 1],
      width: width * 2,
    },
    mods: {
      scenarios: {
        summary: { position: [0, -0.2], scale: 1 },
      },
    },
  };

  layout.addElements = [
    layout.left,
    layout.right,
    layout.triangle,
    layout.split,
    layout.correction,
    // layout.eqn,
  ];
  return layout;
}
