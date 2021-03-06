// @flow
import Fig from 'figureone';
import baseLayout from '../../../../../common/layout';

const {
  Point,
  // Transform,
  // Line,
} = Fig.tools.g2;

const { joinObjects } = Fig.tools.misc;

/* eslint-disable key-spacing, comma-spacing, no-multi-spaces, space-in-parens */
export default function diagramLayout() {
  const layout: Object = baseLayout();
  // layout.colors = Fig.tools.color.getCSSColors(cssColorNames);
  const { colors } = layout;
  colors.lines = colors.get('blue').rgb;
  colors.angle = colors.get('green').rgb;
  colors.axes = colors.get('grey', 'dark').rgb;
  colors.fill = colors.get('green', 'darkest').rgb;
  colors.marks = colors.get('grey', 'darker').rgb;
  layout.position = new Point(0, 0);
  const radius = 1.2;
  const width = 0.03;

  layout.line1 = {
    name: 'line1',
    method: 'line',
    options: {
      length: radius,
      width,
      color: colors.lines,
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
      color: colors.lines,
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
      color: colors.angle,
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
      color: colors.fill,
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
      color: colors.fill,
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
      color: colors.fill,
    },
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
          color: colors.angle,
          weight: 700,
          family: 'Helvetica',
          position: [-0.1, 0],
          xAlign: 'right',
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
          color: colors.lines,
          weight: 500,
          family: 'Helvetica',
          xAlign: 'left',
          size: 0.14,
        },
      },
    ],
    mods: {
      scenarios: {
        bottom: { position: new Point(0.1, -1.45) },
      },
    },
    scenario: 'bottom',
  };

  const axes = {
    method: 'line',
    options: {
      length: radius * 2.2,
      width: width / 4,
      color: colors.axes,
      vertexSpaceStart: 'center',
    },
  };

  layout.xAxis = joinObjects({}, axes, {
    name: 'xAxis',
  });

  layout.yAxis = joinObjects({}, axes, {
    name: 'yAxis',
    options: {
      angle: Math.PI / 2,
    },
  });

  const marks = (numMarks: number, inner: number = radius, lineWidth: number = width / 2, name: string = `marks${numMarks}`) => ({
    name,
    method: 'radialLines',
    options: {
      innerRadius: inner,
      outerRadius: radius,
      color: colors.marks,
      width: lineWidth,
      dAngle: Math.PI * 2 / numMarks,
    },
  });
  layout.degrees = {
    name: 'degrees',
    method: 'collection',
    addElements: [
      marks(360, radius * 0.98),
      marks(36, radius * 0.95),
    ],
  };

  layout.fig = {
    name: 'fig',
    method: 'collection',
    addElements: [
      layout.acute,
      layout.obtuse,
      layout.reflex,
      layout.degrees,
      layout.xAxis,
      layout.yAxis,
      layout.angle,
      // layout.arc,
      layout.line2,
      layout.line1,
      layout.angleText,
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


  layout.right = {
    name: 'right',
    method: 'collection',
    addElements: [
      {
        name: 'horizontal',
        method: 'line',
        options: {
          color: colors.lines,
          vertexSpaceStart: 'center',
          position: [0, 0],
          length: 4,
          width,
        },
      },
      {
        name: 'vertical',
        method: 'line',
        options: {
          color: colors.lines,
          vertexSpaceStart: 'start',
          position: [0, 0],
          length: 1.5,
          angle: Math.PI / 2,
          width,
        },
      },
      {
        name: 'leftAngle',
        method: 'angle',
        options: {
          color: colors.angle,
          autoRightAngle: true,
          rotation: Math.PI / 2,
          angle: Math.PI / 2,
          curve: {
            radius: 0.3,
            width,
          },
        },
      },
      {
        name: 'rightAngle',
        method: 'angle',
        options: {
          color: colors.angle,
          autoRightAngle: true,
          rotation: 0,
          angle: Math.PI / 2,
          curve: {
            radius: 0.3,
            width,
          },
        },
      },
    ],
    options: {
      position: [0, -1],
    },
  };

  layout.addElements = [
    layout.fig,
    layout.right,
  ];

  return layout;
}
