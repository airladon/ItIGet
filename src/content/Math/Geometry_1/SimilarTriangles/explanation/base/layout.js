// @flow
import Fig from 'figureone';
import baseLayout from '../../../../../common/layout';

const {
  Point,
  Transform,
  // Line,
} = Fig.tools.g2;

// const { joinObjects } = Fig.tools.misc;
// const { round } = Fig.tools.math;

/* eslint-disable key-spacing, comma-spacing, no-multi-spaces, space-in-parens */
export default function diagramLayout() {
  const layout: Object = baseLayout();
  const { colors } = layout;
  colors.sides = colors.get('blue', 'base').rgb;
  colors.angles = colors.get('red', 'base').rgb;
  colors.highlight = colors.get('red').rgb;
  colors.grey = colors.get('grey', 'base').rgb;
  colors.darkGrey = colors.get('grey', 'darker').rgb;
  colors.circle = colors.get('red', 'base').rgb;
  colors.quad = colors.get('green', 'base').rgb;

  // *****************************************************************
  // *****************************************************************
  // *****************************************************************
  const makeCircle = name => ({
    name,
    method: 'polygon',
    options: {
      color: colors.circle,
      sides: 100,
      width: 0.02,
      radius: 0.8,
      // transform: new Transform().scale(s, s).translate(0, 0),
    },
    mods: {
      scenarios: {
        small: { scale: 0.4, position: [-2, 0.5] },
        overlay: { scale: 0.4, position: [-2, -0.8] },
        large: { scale: 0.8, position: [-2, -0.8] },
      },
    },
  });

  const makeTri = name => ({
    name,
    method: 'polyLine',
    options: {
      points: [
        [-1, -0.8],
        [0.6, -0.8],
        [0.2, 0.8],
      ],
      width: 0.02,
      color: colors.sides,
      close: true,
    },
    mods: {
      scenarios: {
        small: { scale: 0.4, position: [0, 0.5] },
        overlay: { scale: 0.4, position: [0, -0.9] },
        large: { scale: 0.8, position: [0, -0.8] },
      },
    },
  });

  const makeQuad = name => ({
    name,
    method: 'polyLine',
    options: {
      points: [
        [-1, -0.8],
        [0.8, -0.4],
        [0.4, 0.8],
        [-0.8, 0.4],
      ],
      width: 0.02,
      color: colors.quad,
      close: true,
    },
    mods: {
      scenarios: {
        small: { scale: 0.4, position: [2, 0.5] },
        overlay: { scale: 0.4, position: [2, -0.8] },
        large: { scale: 0.8, position: [2, -0.8] },
      },
    },
  });

  const circ1 = makeCircle('circ1');
  const circ2 = makeCircle('circ2');
  const tri1 = makeTri('tri1');
  const tri2 = makeTri('tri2');
  const quad1 = makeQuad('quad1');
  const quad2 = makeQuad('quad2');

  const examples = {
    name: 'examples',
    method: 'collection',
    addElements: [
      circ1,
      circ2,
      tri1,
      tri2,
      quad1,
      quad2,
    ],
  };

  // *****************************************************************
  // *****************************************************************
  // *****************************************************************

  const points = [
    new Point(-1.2, -0.8).add(0.3, 0),
    new Point(0, 0.8).add(0.3, 0),
    new Point(0.3, -0.8).add(0.3, 0),
  ];
  const pointsSmall = [
    new Point(-0.72, -0.48).add(0.3, 0),
    new Point(0, 0.48).add(0.3, 0),
    new Point(0.18, -0.48).add(0.3, 0),
  ];
  const side = text => ({
    label: {
      text,
      offset: 0.05,
      location: 'outside',
    },
  });

  const angle = text => ({
    label: {
      text,
      offset: 0.01,
      scale: 0.6,
      // location: 'outside',
    },
    curve: {
      radius: 0.2,
      width: 0.01,
      color: colors.angles,
    },
    color: colors.angles,
    sides: 100,
  });

  const tri = (name, p, a, b, c) => ({
    name,
    method: 'polyLine',
    options: {
      points: p,
      color: colors.sides,
      close: true,
      width: 0.02,
      side: [
        side(a),
        side(c),
        side(b),
      ],
      angle: [
        angle(null),
        angle(null),
        angle(null),
      ],
    },
    mods: {
      scenarios: {
        base: { scale: 1, position: [0, 0] },
        left: { scale: 1, position: [-1, 0] },
        right: { scale: 1, position: [1, 0] },
        topRight: { scale: 1, position: [1, 0.5] },
        bottomRight: { scale: 1, position: [1, -1] },
      },
      touchInBoundingRect: true,
    },
  });

  const newBase = {
    name: 'newBase',
    method: 'line',
    options: {
      p1: pointsSmall[2],
      p2: pointsSmall[0],
      label: {
        text: 'rB',
        offset: 0.05,
        location: 'outside',
      },
      width: 0.02,
      color: colors.sides,
    },
    mods: {
      scenarios: {
        topRight: { position: [1, 0] },
        bottomRight: { position: [1, -1.5] },
      },
    },
  };

  const fig = {
    name: 'fig',
    method: 'collection',
    addElements: [
      tri('triScaler', points, 'A', 'B', 'C'),
      tri('tri1', points, 'A', 'B', 'C'),
      tri('tri2', pointsSmall, 'rA', 'rB', 'rC'),
      tri('trir', pointsSmall, 'rA', 'rB', 'rC'),
      newBase,
    ],
    mods: {
      scenarios: {
        left: { position: [-1.2, -0.3] },
        center: { position: [0.5, -0.3] },
      },
    },
  };

  const elements = {
    A: { color: colors.sides },
    B: { color: colors.sides },
    C: { color: colors.sides },
    _A: { text: 'A', color: colors.sides },
    _B: { text: 'B', color: colors.sides },
    _C: { text: 'C', color: colors.sides },
    r1: { text: 'r', color: colors.sides },
    r2: { text: 'r', color: colors.sides },
    r3: { text: 'r', color: colors.sides },
    Ap: { text: 'A\'', color: colors.sides },
    Bp: { text: 'B\'', color: colors.sides },
    Cp: { text: 'C\'', color: colors.sides },
    equals1: '  =  ',
    equals2: '  =  ',
    equals3: '  =  ',
    equals4: '  =  ',
    v1: { symbol: 'vinculum' },
    v2: { symbol: 'vinculum' },
    v3: { symbol: 'vinculum' },
    v4: { symbol: 'vinculum' },
  };

  const eqn = {
    name: 'eqn',
    method: 'addEquation',
    options: {
      elements,
      scale: 1,
      defaultFormAlignment: {
        alignH: 'center',
        alignV: 'middle',
      },
      color: colors.diagram.text.base,
      forms: {
        'ratios': [
          { frac: [['r1', '_A'], 'A', 'v1'] }, 'equals1',
          { frac: [['r2', '_B'], 'B', 'v2'] }, 'equals2',
          { frac: [['r3', '_C'], 'C', 'v3'] },
        ],
        'generalRatios': [
          { frac: ['Ap', 'A', 'v1'] }, 'equals1',
          { frac: ['Bp', 'B', 'v2'] }, 'equals2',
          { frac: ['Cp', 'C', 'v3'] },
        ],
      },
    },
    mods: {
      scenarios: {
        bottom: { position: [0, -1.5], scale: 1 },
      },
    },
  };

  layout.addElements = [
    fig,
    examples,
    eqn,
  ];
  return layout;
}