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
  colors.qrSideAngleRelationshipSides = colors.get('blue').rgb;
  colors.qrSideAngleRelationshipAngles = colors.get('green').rgb;
  const triPoints = [
    new Point(-2, -1),
    new Point(-1.5, 0.6),
    new Point(0.7, -1),
  ];

  const width = 0.04;
  const angle = (text, radius = 0.3, color = colors.qrSideAngleRelationshipAngles) => ({
    color,
    curve: {
      radius,
      width: 0.015,
      sides: 200,
    },
    label: {
      text,
      radius: radius - 0.05,
    },
  });
  const side = text => ({
    label: {
      text,
      location: 'outside',
      offset: 0.05,
    },
  });

  const tri = {
    name: 'tri',
    method: 'polyline',
    options: {
      color: colors.qrSideAngleRelationshipSides,
      width,
      close: true,
      points: triPoints,
      angle: [
        angle('b'),
        angle('c'),
        angle('a'),
      ],
      side: [
        side('A'),
        side('B'),
        side('C'),
      ],
    },
  };


  const fig = {
    name: 'fig',
    method: 'collection',
    addElements: [
      tri,
    ],
    mods: {
      scenarios: {
        default: { position: [0.7, 0], scale: 1 },
        left: { position: [-1.1, 0], scale: 0.8 },
        summary: { position: [0.7, -0.5], scale: 1 },
        qr: { position: [0.7, 0], scale: 1.3 },
      },
    },
  };

  layout.addElements = [
    fig,
  ];
  return layout;
}
