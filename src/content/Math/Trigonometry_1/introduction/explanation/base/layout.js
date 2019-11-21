// @flow
import Fig from 'figureone';
import baseLayout from '../../../../../common/layout';
import planeSrc from './plane.svg';
import cartSrc from './cart.svg';

const {
  Point,
  // Transform,
  Line,
} = Fig.tools.g2;

const {
  range,
} = Fig.tools.math;

// const { joinObjects } = Fig.tools.misc;
// const { round } = Fig.tools.math;

/* eslint-disable key-spacing, comma-spacing, no-multi-spaces, space-in-parens */
export default function diagramLayout() {
  const layout: Object = baseLayout();
  const { colors } = layout;
  colors.line = colors.get('blue').rgb;
  colors.angles = colors.get('red').rgb;
  colors.components = colors.get('red').rgb;
  colors.circle = colors.get('green', 'dark').rgb;
  colors.axes = colors.get('grey', 'darl').rgb;

  const points = [
    new Point(-1, -0.6),
    new Point(1, 0.6),
    new Point(1, -0.6),
  ];

  const side = text => ({ label: { text, offset: 0.1, location: 'outside' } });
  // const angle = text => ({ label: { text, radius: 0.3 }, curve: { radius: 0.3, width: 0.02 } });

  const introTri = {
    name: 'tri',
    method: 'collection',
    addElements: [
      {
        name: 'tri',
        method: 'polyLine',
        options: {
          points,
          width: 0.03,
          close: true,
          color: colors.line,
          side: [side('A'), side('?'), side('?')],
        },
      },
      {
        name: 'angle',
        method: 'angle',
        options: {
          p1: points[2],
          p2: points[0],
          p3: points[1],
          color: colors.angles,
          curve: {
            radius: 0.4,
            width: 0.02,
          },
          label: {
            radius: 0.4,
            text: 'b',
          },
        },
      },
    ],
    options: {
      position: [0, 0.2],
    },
  };
  const makeLine = (name, p1, p2, color, width = 0.02, arrow1 = false, arrow2 = false) => ({
    name,
    method: 'line',
    options: {
      p1,
      p2,
      color,
      width,
      arrowStart: arrow1 ? { width: arrow1, height: 0.06 } : null,
      arrowEnd: arrow2 ? { width: arrow2, height: 0.06 } : null,
    },
  });
  const line = {
    name: 'line',
    method: 'collection',
    addElements: [
      makeLine('line', points[0], points[1], colors.line),
      makeLine(
        'h', points[0].add(0.015, 0), points[2],
        colors.components, 0.015, 0.06, 0.06,
      ),
      makeLine(
        'v', points[2], points[1].add(0, -0.015),
        colors.components, 0.015, 0.06, 0.06,
      ),
    ],
    mods: {
      scenarios: {
        default: { position: [0, 0], scale: 1.2 },
        house: { position: [-points[2].x, 0], scale: 1 },
        plane: { position: [0, -0.5], scale: 1.2 },
      },
    },
  };

  const arrow = {
    name: 'arrow',
    method: 'collection',
    addElements: [
      makeLine(
        'h', points[0].add(0.04, 0), points[2],
        colors.components, 0.015, 0.06, false,
      ),
      makeLine(
        'v', points[2], points[1].add(0, -0.015),
        colors.components, 0.015, 0.06, false,
      ),
      makeLine('line', points[1], points[0], colors.line, 0.03, false, 0.09),
    ],
    mods: {
      scenarios: {
        plane: { position: [0, -0.5], scale: 1.2 },
        cart: { position: [0.7, 0], scale: 0.9 },
      },
    },
  };

  const leftRafter = new Line(points[0], points[1]);
  const rightRafter = new Line(
    new Point(points[0].x + (points[2].x - points[0].x) * 2, points[0].y),
    points[1],
  );
  const leftWall = leftRafter.pointAtPercent(0.2);
  const rightWall = rightRafter.pointAtPercent(0.2);
  const house = {
    name: 'house',
    method: 'collection',
    addElements: [
      makeLine(
        'left', leftWall, leftWall.add(0, -1),
        colors.line,
      ),
      makeLine(
        'bottom', leftWall.add(0, -1), rightWall.add(0, -1),
        colors.line,
      ),
      makeLine(
        'right', rightWall.add(0, -1), rightWall,
        colors.line,
      ),
      makeLine(
        'rightRafter', rightRafter.p1, rightRafter.p2, colors.line,
      ),
    ],
    mods: {
      scenarios: {
        house: { position: [-points[2].x, 0], scale: 1 },
      },
    },
  };

  const plane = {
    name: 'plane',
    method: 'htmlImage',
    options: {
      src: planeSrc,
      id: 'id_aeroplane',
      alignV: 'middle',
      alignH: 'center',
    },
    mods: {
      scenarios: {
        plane: { position: points[1].add(0.5), scale: 1.2 },
      },
    },
  };

  const cart = {
    name: 'cart',
    method: 'collection',
    addElements: [
      {
        name: 'cart',
        method: 'htmlImage',
        options: {
          src: cartSrc,
          id: 'id_cart',
          alignV: 'middle',
          alignH: 'center',
          position: [-1, 0],
        },
      },
      {
        name: 'ground',
        method: 'line',
        options: {
          p1: [-2.8, -0.58],
          p2: [2.8, -0.58],
          width: 0.015,
          color: colors.line,
        },
      },
    ],
    mods: {
      scenarios: {
        cart: { position: [0, -1], scale: 1 },
      },
    },
  };

  const r = 1;
  const axis = r * 1.2;
  layout.timeDuration = 10;
  layout.timeStep = 0.02;
  const time = range(0, layout.timeDuration, layout.timeStep);
  layout.time = time;
  const f = 1.5;
  const sinePoints = time.map(t => new Point(
    t,
    r * Math.sin(2 * f * Math.PI * t),
  ));

  const rotator = {
    name: 'rotator',
    method: 'collection',
    addElements: [
      makeLine('x', [-axis, 0], [axis, 0], colors.axes, 0.01),
      makeLine('y', [0, -axis], [0, axis], colors.axes, 0.01),
      makeLine('xExtension', [axis, 0], [4, 0], colors.axes, 0.01),
      {
        name: 'circle',
        method: 'polygon',
        options: {
          radius: r,
          sides: 200,
          width: 0.01,
          color: colors.circle,
        },
      },
      makeLine('h', [0, 0], [r, 0], colors.components, 0.01),
      makeLine('v', [r, 0], [r, 0.1], colors.components, 0.01),
      {
        name: 'line',
        method: 'line',
        options: {
          width: 0.03,
          p1: [0, 0],
          p2: [r, 0],
          move: { type: 'rotation' },
          color: colors.line,
        },
      },
      {
        name: 'sine',
        method: 'polyLine',
        options: {
          points: sinePoints,
          color: colors.components,
          width: 0.01,
          close: false,
          position: [1.5, 0],
        },
      },
    ],
    mods: {
      scenarios: {
        default: { position: [0, -0.5], scale: 1 },
        sine: { position: [-1.5, -0.5], scale: 1 },
      },
    },
  };

  layout.addElements = [
    introTri,
    plane,
    house,
    cart,
    arrow,
    line,
    rotator,
  ];
  return layout;
}
