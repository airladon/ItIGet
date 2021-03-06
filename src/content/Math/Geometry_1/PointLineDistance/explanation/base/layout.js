// @flow
import Fig from 'figureone';
import baseLayout from '../../../../../common/layout';

const {
  Point,
  // Transform,
  Line,
} = Fig.tools.g2;

// const { joinObjects } = Fig.tools.misc;

/* eslint-disable key-spacing, comma-spacing, no-multi-spaces, space-in-parens */
export default function diagramLayout() {
  const layout: Object = baseLayout();
  // layout.colors = Fig.tools.color.getCSSColors(cssColorNames);
  const { colors } = layout;
  colors.lines = colors.get('blue').rgb;
  colors.points = colors.get('blue').rgb;
  colors.distance = colors.get('yellow').rgb;
  colors.distance2 = colors.get('violet').rgb;
  const p0 = new Point(0, 0.7);
  const p1 = new Point(-2, -0.7);
  const p2 = new Point(2, -0.7);
  const mid = new Point(0, -0.7);
  const p3 = p0.add(p1.x - 0.4, 0);

  layout.mid = mid;
  layout.p1 = p1;

  const point = {
    name: 'point',
    method: 'polygon',
    options: {
      sides: 100,
      radius: 0.05,
      color: colors.points,
      fill: true,
      position: p0,
    },
    mods: {
      scenarios: {
        default: { position: p0 },
        end: { position: p3 },
      },
    },
  };

  const pointEnd = {
    name: 'pointEnd',
    method: 'polygon',
    options: {
      sides: 100,
      radius: 0.05,
      color: colors.points,
      fill: true,
      position: p3,
    },
  };

  const line = {
    name: 'line',
    method: 'line',
    options: {
      vertexSpaceStart: 'center',
      color: colors.lines,
      width: 0.03,
      p1,
      p2,
    },
  };
  const distance = {
    name: 'distance',
    method: 'collection',
    addElements: [
      {
        name: 'pad',
        method: 'polygon',
        options: {
          color: [0, 0, 0, 0.001],
          radius: 0.5,
          sides: 30,
          position: p1,
        },
        mods: {
          move: {
            limitLine: new Line(p1, p2),
          },
          isTouchable: true,
          isMovable: true,
          scenarios: {
            default: { position: p1.add(0.2, 0) },
            end: { position: p1 },
          },
        },
      },
      {
        name: 'line',
        method: 'line',
        options: {
          width: 0.01,
          color: colors.distance,
          // vertexSpaceStart: 'start',
          arrows: {
            height: 0.07,
            width: 0.07,
          },
          dashStyle: {
            style: [0.05],
          },
          length: 4,
        },
      },
    ],
  };

  const perpendicular = {
    name: 'perpendicular',
    method: 'line',
    options: {
      p1: p0,
      p2: mid,
      color: colors.distance,
      width: 0.01,
      label: {
        text: 'd',
        location: 'left',
        offset: 0.05,
        linePosition: 0.6,
      },
    },
  };

  const distanceEnd = {
    name: 'distanceEnd',
    method: 'line',
    options: {
      p1: p3,
      p2: p1,
      color: colors.distance2,
      width: 0.01,
      label: {
        text: 'd',
        location: 'top',
        offset: 0.05,
        linePosition: 0.6,
      },
    },
  };

  const base = {
    name: 'base',
    method: 'line',
    options: {
      p1: mid,
      p2: mid.add(0.75, 0),
      color: colors.distance,
      width: 0.01,
    },
  };

  const hypot = {
    name: 'hypot',
    method: 'line',
    options: {
      p1: p0,
      p2: mid.add(0.75, 0),
      color: colors.distance,
      width: 0.01,
      label: {
        text: 'h',
        location: 'top',
        offset: 0.05,
      },
    },
  };

  const hypotPad = {
    name: 'hypotPad',
    method: 'polygon',
    options: {
      color: [0, 0, 0, 0.001],
      radius: 0.5,
      sides: 30,
      position: p1,
    },
    mods: {
      move: {
        limitLine: new Line(p1, p2),
      },
      isTouchable: true,
      isMovable: true,
      scenarios: {
        default: { position: [0.75, 0] },
      },
    },
  };

  const rightAngle = {
    name: 'rightAngle',
    method: 'angle',
    options: {
      p1: p2,
      p2: mid,
      p3: p0,
      color: colors.distance,
      autoRightAngle: true,
      curve: {
        radius: 0.2,
        width: 0.01,
      },
    },
  };

  const end = {
    name: 'end',
    method: 'polygon',
    options: {
      color: colors.lines,
      radius: 0.01,
      sides: 100,
      position: p1,
    },
  };

  const fig = {
    name: 'fig',
    method: 'collection',
    addElements: [
      end,
      hypotPad,
      point,
      line,
      distance,
      perpendicular,
      rightAngle,
      hypot,
      base,
      pointEnd,
      distanceEnd,
    ],
    mods: {
      scenarios: {
        default: { position: [0, 0] },
        low: { position: [0, -0.5] },
        summary: { position: [0, -0.5] },
      },
    },
  };

  layout.addElements = [fig];
  return layout;
}
