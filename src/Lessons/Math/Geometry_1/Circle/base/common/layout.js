// @flow
import Fig from 'figureone';
import baseLayout from '../../../../../LessonsCommon/layout';
import textureMap from '../../../../../LessonsCommon/images/textureMaps/circles.png';
import { activator } from '../../../../../../js/tools/misc';

const {
  Point,
  Rect,
  Transform,
  Line,
} = Fig.tools.g2;

const { joinObjects } = Fig.tools.misc;

const cssColorNames = [
  'circle',
  'radius',
  'diameter',
  'center',
];

/* eslint-disable key-spacing, comma-spacing, no-multi-spaces, space-in-parens */
export default function lessonLayout() {
  const layout: Object = baseLayout();
  const colors = Fig.tools.color.getCSSColors(cssColorNames);
  layout.colors = colors;
  layout.position = new Point(0, 0);

  // ///////////////////////////////////////////////////////////////
  // Shapes
  // ///////////////////////////////////////////////////////////////
  const radius = 1;
  const sides = 50;
  const textureFile = `/static/dist/${textureMap}`;
  const lineWidth = 0.08;
  const scenarios = {
    moreLeft: { position: new Point(-2, -0.4), scale: 0.7 },
    left: { position: new Point(-0.7, -0.4), scale: 0.5 },
    center: { position: new Point(0.3, -0.4), scale: 0.4 },
    right: { position: new Point(1.1, -0.4), scale: 0.3 },
    moreRight: { position: new Point(2.2, -0.4), scale: 0.5 },
  };
  const mods = { scenarios };

  const filledCircle = {
    fill: true,
    sides,
    radius,
    color: [1, 1, 0, 1],
    transform: new Transform('filledCircle').scale(1, 1).translate(0, 0),
    textureLocation: textureFile,
  };

  const moonTex = { textureCoords: new Rect(0, 0, 0.3333, 0.3333) };
  const wheelTex = { textureCoords: new Rect(0.3333, 0, 0.2222, 0.2222) };
  const ballTex = { textureCoords: new Rect(0.5555, 0, 0.1667, 0.1667) };
  const ringTex = { textureCoords: new Rect(0.7222, 0.1481, 0.1481, 0.1481) };
  layout.moon = ['', 'moon', 'polygon', [filledCircle, moonTex], mods, [], 'moreLeft'];
  layout.wheel = ['', 'wheel', 'polygon', [filledCircle, wheelTex], mods, [], 'left'];
  layout.ball = ['', 'ball', 'polygon', [filledCircle, ballTex], mods, [], 'center'];
  layout.ring = ['', 'ring', 'polygon', [filledCircle, ringTex], mods, [], 'right'];

  layout.circle = {
    name: 'circle',
    method: 'polygon',
    options: {
      fill: false,
      radius,
      width: lineWidth,
      sides,
      color: colors.circle,
      transform: new Transform('Circle').scale(1, 1).translate(0, 0),
    },
    mods: { scenarios },
    scenario: 'moreRight',
  };

  const makeCircle = (name, scenario) => joinObjects(
    {},
    layout.circle,
    { scenario, name },
  );
  layout.circleMoon = makeCircle('circleMoon', 'moreLeft');
  layout.circleWheel = makeCircle('circleWheel', 'left');
  layout.circleBall = makeCircle('circleBall', 'center');
  layout.circleRing = makeCircle('circleRing', 'right');

  layout.addObjectsElements = [
    activator({ width: 6, height: 2, position: new Point(0, -0.4) }),
    layout.moon,
    layout.wheel,
    layout.ball,
    layout.ring,
    layout.circle,
    layout.circleWheel,
    layout.circleBall,
    layout.circleMoon,
    layout.circleRing,
  ];

  // ///////////////////////////////////////////////////////////////
  // Interactive Circle
  // ///////////////////////////////////////////////////////////////
  const width = 0.05;
  layout.circ = {
    name: 'circle',
    method: 'polygon',
    options: {
      sides: 400,
      radius,
      width,
      color: colors.circle,
      transform: new Transform('Circle').scale(1, 1).translate(0, 0),
    },
  };

  layout.arc = joinObjects({}, layout.circ, { name: 'arc' });

  layout.radius = {
    name: 'radius',
    method: 'line',
    options: {
      length: radius,
      width,
      color: colors.radius,
      vertexSpaceStart: 'left',
      move: {
        type: 'rotation',
      },
    },
  };

  layout.diameter = {
    name: 'diameter',
    method: 'line',
    options: {
      length: radius * 2,
      width,
      color: colors.diameter,
      vertexSpaceStart: 'center',
      move: {
        type: 'rotation',
      },
    },
  };

  layout.anchor = {
    name: 'anchor',
    method: 'polygon',
    options: {
      sides: 20,
      radius: 0.05,
      fill: true,
      color: colors.center,
    },
  };

  layout.circleScenarios = {
    'center': { position: new Point(0, -0.4) },
  };

  layout.addCircleElements = [
    layout.circ,
    layout.arc,
    layout.radius,
    layout.diameter,
    layout.anchor,
  ];

  return layout;
}
