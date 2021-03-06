// @flow
import Fig from 'figureone';
import baseLayout from '../../../../../common/layout';

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
  colors.sides = colors.get('blue').rgb;
  colors.angles = colors.get('red').rgb;
  colors.highlight = colors.get('green').rgb;

  const points = [
    new Point(-1, -1).add(0, 1 - Math.tan(Math.PI / 6)),
    new Point(0, 0.732050).add(0, 1 - Math.tan(Math.PI / 6)),
    new Point(1, -1).add(0, 1 - Math.tan(Math.PI / 6)),
  ];
  layout.position = [0, -0.2];
  const width = 0.02;
  const triangle = {
    name: 'triangle',
    method: 'polyline',
    options: {
      width,
      color: colors.sides,
      close: true,
      points,
      side: {
        label: { text: 'A', offset: 0.1, location: 'outside' },
      },
      angle: {
        color: colors.angles,
        label: { text: 'a', radius: 0.29 },
        curve: { radius: 0.3, sides: 100, width },
      },
    },
    mods: {
      scenarios: {
        summary: { position: [0, -0.3] },
      },
    },
  };
  const angle = {
    name: 'angle',
    method: 'polyline',
    options: {
      points,
      close: false,
      color: colors.highlight,
      width: width * 2,
    },
  };
  layout.addElements = [
    triangle,
    angle,
  ];
  return layout;
}
