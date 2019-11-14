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
  colors.sides = colors.get('blue').rgb;
  colors.angles = colors.get('red').rgb;
  colors.angleFill = colors.get('red', 'darker').setOpacity(0.6).rgb;
  colors.tri = colors.get('green').rgb;
  colors.construction = colors.get('grey', 'dark').rgb;
  const width = 0.03;

  const regularPolyPoints = (num, r) => {
    const polyPoints = [];
    for (let i = 0; i < num; i += 1) {
      const angle = Math.PI * 2 / num * i + Math.PI / 2 - Math.PI * 2 / num;
      polyPoints.push([r * Math.cos(angle), r * Math.sin(angle)]);
    }
    return polyPoints;
  };

  const pointsP = [
    [-1, -0.2],
    [-0.8, 0.8],
    [-0.4, 0.2],
    [0.6, 0.9],
    [1, -0.5],
    [0.3, -0.2],
    [-0.2, -0.7],
  ];

  const pointsP1 = [
    [-0.8, 0.8],
    [0.6, 0.9],
    [-0.2, -0.7],
  ];

  const pointsP2 = [
    [-1, -0.2],
    [-0.8, 0.8],
    [0.6, 0.9],
    [1, -0.5],
  ];

  const poly = (name, points, pos = [0, 0], scale = 1) => {
    const t = new Transform().scale(scale, scale);
    const pointsToUse = points.map(p => (new Point(p[0], p[1])).transformBy(t.matrix()));
    return {
      name,
      method: 'polyLine',
      options: {
        points: pointsToUse,
        width,
        color: colors.sides,
        close: true,
      },
      mods: {
        scenarios: {
          default: { position: pos, scale },
          center: { position: [0, 0], scale: 1 },
        },
        pulseDefault: { scale: 1.4 },
      },
    };
  };

  // const pointsB3 = regularPolyPoints(3, 1.2);
  const r = 1.4;
  const a = Math.PI / 6;
  const pointsTot3 = [
    [0, r],
    [r * Math.cos(a), -r * Math.sin(a)],
    [-r * Math.cos(a), -r * Math.sin(a)],
  ];
  const newPoint4 = [1.8, 0];
  const newPoint5 = [1, 1.2];
  const newPoint6 = [0, 0];
  const pointsTot4 = [
    pointsTot3[0], newPoint4, ...pointsTot3.slice(1),
  ];
  const pointsTot5 = [
    pointsTot3[0], newPoint5, ...pointsTot4.slice(1),
  ];
  const pointsTot6 = [
    ...pointsTot5, newPoint6,
  ];

  const dashed = (name, p1, p2) => ({
    name,
    method: 'line',
    options: {
      p1,
      p2,
      color: colors.tri,
      width: width / 2,
      dashStyle: { style: [0.05, 0.03] },
    },
  });

  const line = (name, p1, p2) => ({
    name,
    method: 'line',
    options: {
      p1,
      p2,
      color: colors.sides,
      width,
    },
  });

  const dot = (name, position) => ({
    name,
    method: 'polygon',
    options: {
      fill: true,
      sides: 50,
      color: colors.sides,
      position,
      radius: 0.05,
    },
  });

  const angle = (name, text, p1, p2, p3, radius = 0.35) => ({
    name,
    method: 'angle',
    options: {
      p1,
      p2,
      p3,
      label: {
        text,
        radius,
        scale: 1,
      },
      curve: {
        radius,
        width: width / 2,
        sides: 50,
      },
      color: colors.angles,
    },
  });

  const angleFill = (name, p1, p2, p3, radius = 0.7, scale = 1) => ({
    name,
    method: 'angle',
    options: {
      p1,
      p2,
      p3,
      curve: {
        radius,
        width: radius,
        sides: 200,
      },
      color: colors.angleFill,
    },
    mods: {
      scenarios: { default: { scale: [1, scale] } },
    },
  });

  const tot = ({
    name: 'tot',
    method: 'collection',
    options: {
      color: colors.sides,
    },
    addElements: [
      angleFill('af', pointsTot6[3], pointsTot6[4], pointsTot6[0], 0.35),
      angleFill('bf', pointsTot6[1], pointsTot6[0], pointsTot6[4], 0.35, -1),
      angleFill('cf', pointsTot6[4], pointsTot6[5], pointsTot6[0], 0.2),
      dot('p4', newPoint4),
      dot('p5', newPoint5),
      dot('p6', newPoint6),
      dashed('l4', pointsTot3[0], pointsTot3[1]),
      dashed('l5', pointsTot4[0], pointsTot4[1]),
      dashed('l6', [pointsTot5[4][0] - 0.02, pointsTot5[4][1]], pointsTot5[0]),
      line('s41', pointsTot3[0], newPoint4),
      line('s42', pointsTot3[1], newPoint4),
      line('s51', pointsTot4[0], newPoint5),
      line('s52', pointsTot4[1], newPoint5),
      line('s61', pointsTot5[0], newPoint6),
      line('s62', pointsTot5[4], newPoint6),
      angle('a', 'a', newPoint6, pointsTot6[4], pointsTot6[0]),
      angle('b', 'b', pointsTot6[4], pointsTot6[0], pointsTot6[5]),
      angle('c', 'c', pointsTot6[0], pointsTot6[5], pointsTot6[4], 0.2),
      angle('e', '', pointsTot6[4], pointsTot6[5], pointsTot6[0]),
      poly('n3', pointsTot3),
      poly('n4', pointsTot4),
      poly('n5', pointsTot5),
      poly('n6', pointsTot6),
    ],
    mods: {
      scenarios: {
        default: { position: [0, -0.6] },
        low: { position: [0, -0.8] },
      },
    },
  });

  const newTot = { sub: ['New', 'tot1'] };
  const oldTot = { sub: ['Old', 'tot2'] };

  const eqnTot = {
    name: 'eqnTot',
    method: 'addEquation',
    options: {
      color: colors.diagram.text.base,
      scale: 0.9,
      elements: {
        equals: '  =  ',
        // New: { color: colors.angles },
        // Old: { color: colors.angles },
        New: 'New',
        Old: 'Old',
        tot1: { text: 'Total Angle' },
        tot2: { text: 'Total Angle' },
        a1: { text: 'a', color: colors.angles },
        a2: { text: 'a', color: colors.angles },
        b1: { text: 'b', color: colors.angles },
        b2: { text: 'b', color: colors.angles },
        c1: { text: 'c', color: colors.angles },
        c2: { text: 'c', color: colors.angles },
        _360: '360º',
        _180: '180º',
        p1: ' + ',
        p2: ' + ',
        p3: ' + ',
        m1: ' - ',
        m2: ' - ',
        m3: ' - ',
        lb: {
          symbol: 'brace', side: 'left', numLines: 1, color: colors.working,
        },
        rb: {
          symbol: 'brace', side: 'right', numLines: 1, color: colors.working,
        },
        brace: {
          symbol: 'brace', side: 'top', numLines: 2, color: colors.working,
        },
        // strike1: { symbol: 'xStrike', color: colors.working },
        // strike2: { symbol: 'xStrike', color: colors.working },
      },
      defaultFormAlignment: {
        fixTo: 'equals',    // Points can also be defined as objects
        alignH: 'center',
        alignV: 'baseline',
      },
      forms: {
        '0': [newTot, 'equals', oldTot, 'm1', 'a1', 'm2', 'b1', 'p1', '_360', 'm3', 'c1'],
        // '1': [
        //   { annotate: ['_360', ['_divide2', 'center', 'bottom', 'center', 2], 'false'] },
        //   'equals',
        //   { annotate: [['_21', 'a', 'plus', '_22', 'b'], ['_divide21', 'center', 'bottom', 'center', 2], 'false'] },
        // ],
        // '2': [
        //   {
        //     annotate: [
        //       { topComment: ['_360', '_180', 'b1', 0.1, 0.05, 0.6, false] },
        //       ['_divide2', 'center', 'bottom', 'center', 2],
        //       'false',
        //     ],
        //   },
        //   'equals',
        //   {
        //     annotate: [[
        //       { strike: ['_21', 'strike1'] },
        //       'a', 'plus',
        //       { strike: ['_22', 'strike2'] },
        //       'b',
        //     ], ['_divide21', 'center', 'bottom', 'center', 2], 'false'],
        //   },
        // ],
        // // '3': [
        // //   { bottomComment: ['_360', ['_divide2', '_180'], 'b1', 0.1, 0.05, 0.6, false] },
        // //   'equals', { strike: ['_21', 'strike1'] }, 'a',
        // //   'plus', { strike: ['_22', 'strike2'] }, 'b'],
        // '3': ['_180', 'equals', 'a', 'plus', 'b'],
      },
    },
    mods: {
      scenarios: {
        default: { position: [-0.7, 0.9] },
      },
    },
  };
  // const polyBuilder = (points, tris) => {
  //   // const sides = [];
  //   const triangles = [];
  //   // for (let i = 1; i < points.length + 1; i += 1) {
  //   //   const side = {
  //   //     name: `side${i - 1}`,
  //   //     method: 'line',
  //   //     options: {
  //   //       p1: points[i - 1],
  //   //       p2: points[i % (points.length)],
  //   //       color: colors.sides,
  //   //       width: 0.03,
  //   //     },
  //   //   };
  //   //   sides.push(side);
  //   // }
  //   // sides.push(poly('line', points));
  //   tris.forEach((triPair, index) => {
  //     const tri = {
  //       name: `tri${index}`,
  //       method: 'line',
  //       options: {
  //         p1: points[triPair[0]],
  //         p2: points[triPair[1]],
  //         dashStyle: { style: [0.05, 0.03] },
  //         width: 0.02,
  //         color: colors.tri,
  //       },
  //     };
  //     triangles.push(tri);
  //   });
  //   return {
  //     name: 'polyB',
  //     method: 'collection',
  //     options: {
  //       color: colors.sides,
  //     },
  //     addElements: triangles,
  //   };
  // };

  layout.addElements = [
    poly('tri', regularPolyPoints(3, 1), [-1, 0]),
    poly('quad', regularPolyPoints(4, 1), [1, 0]),
    poly('pent', regularPolyPoints(5, 1)),
    poly('hex', regularPolyPoints(6, 1)),
    poly('hep', regularPolyPoints(7, 1)),
    poly('oct', regularPolyPoints(8, 1)),
    poly('poly0', pointsP, [1.7, -0.2], 0.9),
    poly('poly1', pointsP1, [-2, -0.2], 0.9),
    poly('poly2', pointsP2, [-0.2, -0.2], 0.9),
    // poly('tot', pointsTot6, [0, -0.4]),
    tot,
    eqnTot,

    // polyBuilder(pointsP, [
    //   [0, 2],
    //   [2, 6],
    //   [2, 5],
    //   [3, 5],
    // ]),
  ];
  return layout;
}