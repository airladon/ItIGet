// @flow
import Fig from 'figureone';
import {
  PresentationFormatContent,
  // interactiveItem,
} from '../../../../../../js/TopicFormat/PresentationFormatContent';
import Definition from '../../../../../common/tools/definition';
import diagramLayout from './layout';
import { note } from '../../../../../common/tools/note';
// import imgLink from '../../tile.png';
// import imgLinkGrey from '../../tile-grey.png';
import details from '../../details';
import DiagramCollection from './diagramCollection';
import CommonTopicDiagram from '../../../../../common/CommonTopicDiagram';

const {
  style,
  click,
  // clickW,
  highlight,
  // centerV,
} = Fig.tools.html;

const layout = diagramLayout();
const { colors } = layout;

class Content extends PresentationFormatContent {
  setTitle() {
    this.title = details.title;
    //  this.iconLink = imgLink;
    //  this.iconLinkGrey = imgLinkGrey;
  }

  setDiagram(htmlId: string = '') {
    this.diagram = new CommonTopicDiagram({ htmlId }, layout);
    this.diagram.elements = new DiagramCollection(this.diagram);
    this.loadQRs([
      'Math/Geometry_1/Quadrangles/base',
      'Math/Geometry_1/ParallelLines/base',
      'Math/Geometry_1/CongruentTriangles/base',
      'Math/Geometry_1/AnglesAtIntersections/base',
      'Math/Geometry_1/Area/base',
      'Math/Geometry_1/AreaTriangle/base',
    ]);
  }

  addSections() {
    const diag = this.diagram.elements;
    const coll = diag._collection;
    const pgram = coll._pgram;
    const eqn = coll._eqn;
    const nav = coll._nav;
    const eqn2 = coll._eqn2;
    
    // // const fig = coll._fig;
    // const dimmer = () => {
    //   // coll._pgram.pulseDefault(null);
    //   // coll._pgram.setDimColor([1, 0, 0, 0.5]);
    //   // coll._pgram.dim();
    //   coll._pgram.exec('dim', ['a1', 'a2', 'b2']);
    //   this.diagram.animateNextFrame();
    // };

    // const dim2 = () => {
    //   coll._pgram.undim();
    //   coll._pgram.exec(['setDimColor', [0, 1, 0, 1]], ['a1.curve', 'a2', 'b1']);
    //   coll._pgram.dim();
    //   this.diagram.animateNextFrame();
    // };

    // const highlight1 = () => {
    //   coll._pgram.highlight([coll._pgram._a1, 'b1', 'a2.curve']);
    //   this.diagram.animateNextFrame();
    // }

    // const undimmer = () => {
    //   coll.undim();
    //   this.diagram.animateNextFrame();
    // }
    
    // // const clicker = () => {
    // //   coll._pgram.pulse(['_a1', coll._param._a2, 'b1.curve']);
    // //   this.diagram.animateNextFrame();
    // // }

    // this.addSection({
    //   setContent: 'this is a |dim| and |dim2|, |undim|, and |test|, |highlight|, |h2|',
    //   modifiers: {
    //     dim: click(dimmer, [this], colors.sides),
    //     dim2: click(dim2, [this], colors.sides),
    //     undim: click(undimmer, [this], colors.sides),
    //     highlight: click(highlight1, [this], colors.sides),
    //     h2: this.bindHighlightAndPulse(coll._pgram, ['diag2', 'a1', 'a2']),
    //     // test: click(clicker, [this], colors.sides),
    //     test: this.bindPulse(coll._pgram, ['a1', 'a2.curve', 'diag1', 'lMark21', 'pMarkTop']),
    //   },
    //   show: [coll],
    //   setSteadyState: () => {
    //     console.log(coll)
    //   }
    // });
    let common = {
      setEnterState: () => {
        pgram.undim();
        pgram.setScenario('default');
      },
    };
    this.addSection(common, {
      title: 'Definition',
      setContent: [
        'A |parallelogram| is a |quadrangle| whose opposite sides are |parallel|.',
        `${new Definition('Parallelogram', 'Latin', ['parallelogrammum', ''], 'Greek', ['parallelogrammon', 'bounded by parallel lines']).html(colors.sides)}`,
      ],
      modifiers: {
        parallelogram: this.bindPulse(pgram, null, null),
        parallel: this.qr('Math/Geometry_1/ParallelLines/base/Main'),
        quadrangle: this.qr('Math/Geometry_1/Quadrangles/base/Main'),
      },
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
      ],
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    this.addSection(common, {
      setContent: style({ top: 0 }, [
        '|Parallelograms| are |common| shapes, and it is therefore useful to know their |properties| to make solving problems that invovle them |easier|.',
      ]),
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
      ],
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    let commonContent = {
      setContent: 'Let\'s start by labeling an |angle|.',
      modifiers: { angle: this.bindNext(colors.angles) },
    };

    this.addSection(common, commonContent, {
      title: 'Angles',
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
      ],
    });

    this.addSection(common, commonContent, {
      modifiers: {
        angle: this.bindPulse(pgram._a1, null, null),
      },
      transitionFromPrev: (done) => {
        this.pulse(pgram._a1, done);
      },
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1,
      ],
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: '|Interior_angles| between intersected parallel lines can then be used to calculate the bottom right |angle|.',
      modifiers: {
        Interior_angles: this.qr('Math/Geometry_1/AnglesAtIntersections/base/Interior'),
        angle: this.bindNext(colors.angles),
      },
    };

    this.addSection(common, commonContent, {
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1,
      ],
    });
    this.addSection(common, commonContent, {
      modifiers: {
        angle: this.bindPulse(pgram, ['b1', 'a1'], null),
      },
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1,
      ],
      transitionFromPrev: (done) => {
        this.pulse(pgram, ['b1', 'a1'], done);
      },
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: 'Similarly, the remaining angles can be calculated with |interior_angle_pairs|.',
      modifiers: {
        interior_angle_pairs: this.bindNext(colors.angles),
      },
    };

    this.addSection(common, commonContent, {
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1,
      ],
    });
    this.addSection(common, commonContent, {
      modifiers: {
        interior_angle_pairs: click(coll.toggleInteriorAngles, [coll, null], colors.angles),
      },
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
      ],
      transitionFromPrev: (done) => {
        pgram.pulse(['a1', 'a2', 'b1', 'b2'], done);
      },
      setSteadyState: () => {
        coll.toggleIndex = 0;
      },
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    this.addSection(common, {
      setContent: 'And so we can see |opposite_angles| are |equal|.',
      modifiers: {
        opposite_angles: click(coll.toggleOppositeAngles, [coll, null], colors.angles),
      },
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
      ],
      setSteadyState: () => {
        coll.toggleIndex = 0;
      },
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    this.addSection(common, {
      setContent: 'Conversely, is |any| quadrangle with |equal_opposite_angles| a |parallelogram|? |test|',
      modifiers: {
        equal_opposite_angles: this.bindToggleGroups(
          pgram, [['a1', 'a2'], ['b11', 'b21']], colors.angles, ['pulse', 'highlightInParent'],
        ),
        test: this.bindToggleGroups(
          pgram, ['a1', 'b11', 'a2', 'b21'], colors.angles, ['pulse', 'highlightInParent'],
        ),
      },
      show: [
        pgram._line,
        pgram._a1, pgram._b11, pgram._a2, pgram._b21,
      ],
      setSteadyState: () => {
        coll.toggleIndex = 0;
      },
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: 'We know all quadrangles angles |add_to_360º|, therefore we have:',
      modifiers: {
        add_to_360º: this.qr('Math/Geometry_1/Quadrangles/base/Main'),
      },
    };

    this.addSection(common, commonContent, {
      show: [
        pgram._line,
        pgram._a1, pgram._b11, pgram._a2, pgram._b21,
      ],
      transitionFromPrev: (done) => {
        pgram.animations.new()
          .scenario({ target: 'low', duration: 1 })
          .whenFinished(done)
          .start();
      },
      setSteadyState: () => {
        pgram.setScenario('low');
        eqn2.setScenario('default');
        eqn2.showForm('0');
      },
    });

    const temp = {
      show: [
        pgram._line,
        pgram._a1, pgram._b11, pgram._a2, pgram._b21,
      ],
      setEnterState: () => {
        pgram.setScenario('low');
        eqn2.setScenario('default');
      },
    };

    this.addSectionEqnStep({ eqn: eqn2, from: '0', to: '1' }, common, commonContent, temp);
    this.addSectionEqnStep({ eqn: eqn2, from: '1', to: '2' }, common, commonContent, temp);
    this.addSectionEqnStep({ eqn: eqn2, from: '2', to: '3' }, common, commonContent, temp);

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: 'For simplicity moving forward, let\'s |remove| the angle labels.',
      modifiers: {
        remove: this.bindNext(colors.angles),
      },
    };
    this.addSection(common, commonContent, {
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
      ],
    });

    common = {
      setEnterState: () => {
        pgram.undim();
        pgram.setScenario('default');
      },
      hide: [
        pgram._a1._label, pgram._a2._label,
        pgram._b1._label, pgram._b2._label,
      ],
    }
    this.addSection(common, commonContent, {
      modifiers: {
        remove: click(coll.dissolveOutAngleLabels, [coll, null], colors.angles)
      },
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
      ],
      transitionFromPrev: (done) => {
        coll.dissolveOutAngleLabels(done);
      },
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: 'Draw a |diagonal_line| between two opposite corners to split the parallelogram into |two triangles|.',
      modifiers: {
        diagonal_line: this.bindNext(colors.sides),
      },
    };

    this.addSection(common, commonContent, {
      title: 'Side Lengths',
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
      ],
      hide: [
        pgram._a1._label, pgram._a2._label,
        pgram._b1._label, pgram._b2._label,
      ],
    });
    this.addSection(common, commonContent, {
      modifiers: {
        diagonal_line: click(pgram._diag1.grow, [pgram._diag1, 0.05, 1, true, null], colors.sides),
      },
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._diag1,
      ],
      transitionFromPrev: (done) => {
        pgram._diag1.grow(0.05, 1, true, done);
      },
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: 'Using |alternate_angles| between parallel lines, we can highlight two more |equal_angles|.',
      modifiers: {
        alternate_angles: this.qr('Math/Geometry_1/AnglesAtIntersections/base/Alternate'),
        equal_angles: this.bindNext(colors.angles2),
      },
    };

    this.addSection(common, commonContent, {
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._diag1,
      ],
    });
    this.addSection(common, commonContent, {
      modifiers: {
        equal_angles: this.bindPulse(pgram, ['c1', 'c2']),
      },
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._diag1,
        pgram._c1, pgram._c2,
      ],
      transitionFromPrev: (done) => {
        pgram.pulse(['c1', 'c2'], done);
      },
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: 'The two triangles |share| the same corresponding two angles and side, therefore by |AAS| they must be |congruent|.',
      modifiers: {
        AAS: this.qr('Math/Geometry_1/CongruentTriangles/base/Aas'),
        share: click(coll.toggleSas, [coll, null], colors.diagram.action),
      },
    };

    this.addSection(common, commonContent, {
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._diag1,
        pgram._c1, pgram._c2,
      ],
      setSteadyState: () => {
        coll.toggleIndex = 0;
      }
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: 'As the triangles are |congruent|, then their corresponding sides must be the |same_length|.',
      modifiers: {
        same_length: this.bindNext(colors.sides),
      },
    };

    this.addSection(common, commonContent, {
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._diag1,
        pgram._c1, pgram._c2,
      ],
    });
    this.addSection(common, commonContent, {
      modifiers: {
        same_length: click(coll.toggleEqualSides, [coll, null], colors.sides),
      },
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._diag1,
        pgram._c1, pgram._c2,
        pgram._labelA1, pgram._labelA2, pgram._labelB1, pgram._labelB2,
      ],
      transitionFromPrev: (done) => {
        pgram.pulse(['labelA1', 'labelA2', 'labelB1', 'labelB2'], done);
      },
      setSteadyState: () => {
        coll.toggleIndex = 0;
      },
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    this.addSection(common, commonContent, {
      setContent: 'And so we see the parallelogram\'s |opposite_sides| are |equal|.',
      modifiers: {
        opposite_sides: click(coll.toggleEqualSides, [coll, null], colors.sides),
      },
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._diag1,
        pgram._c1, pgram._c2,
        pgram._labelA1, pgram._labelA2, pgram._labelB1, pgram._labelB2,
      ],
      transitionFromPrev: (done) => {
        pgram.pulse(['labelA1', 'labelA2', 'labelB1', 'labelB2'], done);
      },
      setSteadyState: () => {
        coll.toggleIndex = 0;
      },
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: 'Next, we will draw the |second_diagonal| of the parallelogram.',
      modifiers: {
        second_diagonal: this.bindNext(colors.sides),
      },
    };

    this.addSection(common, commonContent, {
      title: 'Diagonal Intersection',
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._diag1,
        pgram._c1, pgram._c2,
        pgram._labelA1, pgram._labelA2, pgram._labelB1, pgram._labelB2,
      ],
    });
    this.addSection(common, commonContent, {
      modifiers: {
        second_diagonal: click(pgram._diag2.grow, [pgram._diag2, 0.05, 1, true, null], colors.sides),
      },
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._diag1, pgram._diag2,
        pgram._c1, pgram._c2,
        pgram._labelA1, pgram._labelA2, pgram._labelB1, pgram._labelB2,
      ],
      transitionFromPrev: (done) => {
        pgram._diag2.grow(0.05, 1, true, done);
      },
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: 'Using |alternate_angles| between parallel lines, we again can highlight two more |equal_angles|.',
      modifiers: {
        alternate_angles: this.qr('Math/Geometry_1/AnglesAtIntersections/base/Alternate'),
        equal_angles: this.bindNext(colors.angles2),
      },
    };

    this.addSection(common, commonContent, {
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._diag1, pgram._diag2,
        pgram._c1, pgram._c2,
        pgram._labelA1, pgram._labelA2, pgram._labelB1, pgram._labelB2,
      ],
    });
    this.addSection(common, commonContent, {
      modifiers: {
        equal_angles: this.bindPulse(pgram, ['d1', 'd2']),
      },
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._diag1, pgram._diag2,
        pgram._c1, pgram._c2,
        pgram._labelA1, pgram._labelA2, pgram._labelB1, pgram._labelB2,
        pgram._d1, pgram._d2,
      ],
      transitionFromPrev: (done) => {
        pgram.pulse(['d1', 'd2'], done);
      },
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: 'Let\'s |simplify| the diagram to compare just the top and bottom triangles.',
      modifiers: {
        simplify: this.bindNext(colors.angles2),
      },
    };

    this.addSection(common, commonContent, {
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._diag1, pgram._diag2,
        pgram._c1, pgram._c2,
        pgram._labelA1, pgram._labelA2, pgram._labelB1, pgram._labelB2,
        pgram._d1, pgram._d2,
      ],
    });
    this.addSection(common, commonContent, {
      modifiers: {
        simplify: click(coll.dissolveOutToTriangles, [coll, null], colors.diagram.action),
      },
      show: [
        // pgram._line,
        // pgram._pMarkLeft, pgram._pMarkRight,
        // pgram._pMarkTop, pgram._pMarkBottom,
        // pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._diag1, pgram._diag2,
        pgram._c1, pgram._c2,
        pgram._labelA1, pgram._labelA2,
        // pgram._labelB1, pgram._labelB2,
        pgram._d1, pgram._d2,
      ],
      transitionFromPrev: (done) => {
        coll.dissolveOutToTriangles(done);
      },
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: 'Using |ASA| we can see the two triangles are congruent, and as a result their corresponding sides will be |equal|.',
      modifiers: {
        ASA: this.qr('Math/Geometry_1/CongruentTriangles/base/Asa'),
        equal: this.bindNext(colors.sides),
      },
    };
    this.addSection(common, commonContent, {
      show: [
        pgram._diag1, pgram._diag2,
        pgram._c1, pgram._c2,
        pgram._labelA1, pgram._labelA2,
        pgram._d1, pgram._d2,
      ],
    });
    this.addSection(common, commonContent, {
      modifiers: {
        equal: click(coll.toggleEqualHalves, [coll, null], colors.sides),
      },
      show: [
        pgram._diag1, pgram._diag2,
        pgram._c1, pgram._c2,
        pgram._labelA1, pgram._labelA2,
        pgram._d1, pgram._d2,
        pgram._lMarkUp1, pgram._lMarkUp2,
        pgram._lMark21, pgram._lMark22,
      ],
      transitionFromPrev: (done) => {
        pgram.pulse(['lMarkUp1', 'lMarkUp2', 'lMark21', 'lMark22'], done);
      },
      setSteadyState: () => {
        coll.toggleIndex = 0;
      },
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: 'Each |diagonal| line is |split_in_half| by the other.',
      modifiers: {
        split_in_half: click(coll.toggleEqualHalves, [coll, null], colors.sides),
      },
    };
    this.addSection(common, commonContent, {
      show: [
        pgram._diag1, pgram._diag2,
        pgram._c1, pgram._c2,
        pgram._labelA1, pgram._labelA2,
        pgram._d1, pgram._d2,
        pgram._lMarkUp1, pgram._lMarkUp2,
        pgram._lMark21, pgram._lMark22,
      ],
      setSteadyState: () => {
        coll.toggleIndex = 0;
      },
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: 'So the |diagonals| of a parallelogram will |always| intersect at their |center|.',
      modifiers: {
        diagonals: this.bindPulse(pgram, ['diag1', 'diag2']),
      },
    };
    this.addSection(common, commonContent, {
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._diag1, pgram._diag2,
        pgram._lMarkUp1, pgram._lMarkUp2,
        pgram._lMark21, pgram._lMark22,
        pgram._line,

      ],
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: 'Next, let\'s find the parallelogram\'s |area|.',
    };
    this.addSection(common, commonContent, {
      title: 'Area',
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._labelA1, pgram._labelA2,
        pgram._labelB1, pgram._labelB2,
      ],
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: 'Start by |splitting| the parallelogram into |two right angle triangles| and a |rectangle|.',
      modifiers: {
        splitting: this.bindNext(colors.sides),
      },
    };
    this.addSection(common, commonContent, {
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._labelA1, pgram._labelA2,
        pgram._labelB1, pgram._labelB2,
      ],
    });
    this.addSection(common, commonContent, {
      modifiers: {
        splitting: click(coll.split, [coll, null], colors.sides),
      },
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._v1, pgram._v2, pgram._right1, pgram._right2,
        pgram._labelA1, pgram._labelA2,
        pgram._labelB1, pgram._labelB2,
      ],
      transitionFromPrev: (done) => {
        coll.split(done);
      },
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: 'By |AAS|, the two triangles are |equal|, and so their side lengths are |equal_|.',
      modifiers: {
        AAS: this.qr('Math/Geometry_1/CongruentTriangles/base/Aas'),
        equal: click(coll.toggleAreaAas, [coll, null], colors.diagram.action),
        equal_: this.bindNext(colors.sides),
      },
    };
    this.addSection(common, commonContent, {
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._v1, pgram._v2, pgram._right1, pgram._right2,
        pgram._labelA1, pgram._labelA2,
        pgram._labelB1, pgram._labelB2,
      ],
      setSteadyState: () => {
        coll.toggleIndex = 0;
      },
    });
    this.addSection(common, commonContent, {
      modifiers: {
        // splitting: click(coll.split, [coll, null], colors.sides),
        equal_: this.bindPulse(pgram, ['s1.label', 's2.label']),
      },
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._v1, pgram._v2, pgram._right1, pgram._right2,
        pgram._labelA1, pgram._labelA2,
        pgram._labelB1, pgram._labelB2,
        pgram._s1, pgram._s2,
      ],
      transitionFromPrev: (done) => {
        pgram.pulse(['s1.label', 's2.label'], done);
      },
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: 'The distance between the parallel lines is the |height| of the parallelogram.',
      modifiers: {
        height: this.bindNext(colors.sides),
      },
    };
    this.addSection(common, commonContent, {
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._v1, pgram._v2, pgram._right1, pgram._right2,
        pgram._labelA1, pgram._labelA2,
        pgram._labelB1, pgram._labelB2,
        pgram._s1, pgram._s2,
      ],
    });
    this.addSection(common, commonContent, {
      modifiers: {
        // splitting: click(coll.split, [coll, null], colors.sides),
        height: this.bindPulse(pgram, ['h.label']),
      },
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._v1, pgram._v2, pgram._right1, pgram._right2,
        pgram._labelA1, pgram._labelA2,
        pgram._labelB1, pgram._labelB2,
        pgram._s1, pgram._s2, pgram._h,
      ],
      transitionFromPrev: (done) => {
        pgram.pulse(['h.label'], done);
      },
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: style({ top: 0 }, [
        'The |total_area| is the sum of the |rectangle|, and |two_triangles|.',
        note({ top: 93, color: colors.diagram.text.note }, 'Reference formulas: |rectangle_area|, |triangle_area|.')
      ]),
      modifiers: {
        rectangle: this.bindToggle(pgram, ['rect'], colors.sides),
        two_triangles: this.bindToggle(pgram, ['tri1', 'tri2'], colors.sides),
        total_area: this.bindToggle(pgram, ['tri1', 'tri2', 'rect'], colors.sides),
        rectangle_area: this.qr('Math/Geometry_1/Area/base/RectanglePres'),
        triangle_area: this.qr('Math/Geometry_1/AreaTriangle/base/Main'),
      },
    };
    this.addSection(common, commonContent, {
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._v1, pgram._v2, pgram._right1, pgram._right2,
        pgram._labelA1, pgram._labelA2,
        pgram._labelB1, pgram._labelB2,
        pgram._s1, pgram._s2, pgram._h,
      ],
    });
    this.addSection(common, commonContent, {
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._v1, pgram._v2, pgram._right1, pgram._right2,
        pgram._labelA1, pgram._labelA2,
        pgram._labelB1, pgram._labelB2,
        pgram._s1, pgram._s2, pgram._h,
      ],
      transitionFromPrev: (done) => {
        pgram.animations.new()
          .scenario({ target: 'low', duration: 1 })
          .whenFinished(done)
          .start();
      },
      setSteadyState: () => {
        pgram.setScenario('low');
        eqn.showForm('0');
        eqn.setScenarios('default');
        // nav.updateButtons();
      },
    });

    common = {
      setEnterState: () => {
        pgram.undim();
        pgram.setScenario('low');
        eqn.setScenario('default');
        nav.setScenario('default');
      },
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._v1, pgram._v2, pgram._right1, pgram._right2,
        pgram._labelA1, pgram._labelA2,
        pgram._labelB1, pgram._labelB2,
        pgram._s1, pgram._s2, pgram._h,
      ],
      hide: [
        pgram._a1._label, pgram._a2._label,
        pgram._b1._label, pgram._b2._label,
      ],
    }
    this.addSectionEqnStep({ eqn, from: '0', to: '1' }, common, commonContent);
    this.addSectionEqnStep({ eqn, from: '1', to: '2' }, common, commonContent);

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: 'Which |simplifies| to:',
    };
    this.addSection(common, commonContent, {
      setSteadyState: () => {
        eqn.showForm('2');
      },
    });

    this.addSection(common, commonContent, {
      // show: [
      //   pgram._line,
      //   pgram._pMarkLeft, pgram._pMarkRight,
      //   pgram._pMarkTop, pgram._pMarkBottom,
      //   pgram._a1, pgram._b1, pgram._a2, pgram._b2,
      //   pgram._v1, pgram._v2, pgram._right1, pgram._right2,
      //   pgram._labelA1, pgram._labelA2,
      //   pgram._labelB1, pgram._labelB2,
      //   pgram._s1, pgram._s2, pgram._h,
      //   eqn, nav,
      // ],
      setSteadyState: () => {
        nav.showAll();
        eqn.showForm('7');
        nav.updateButtons();
      },
    });

    // this.addSection(common, commonContent, {
    //   show: [
    //     pgram._line,
    //     pgram._pMarkLeft, pgram._pMarkRight,
    //     pgram._pMarkTop, pgram._pMarkBottom,
    //     pgram._a1, pgram._b1, pgram._a2, pgram._b2,
    //     pgram._v1, pgram._v2, pgram._right1, pgram._right2,
    //     pgram._labelA1, pgram._labelA2,
    //     pgram._labelB1, pgram._labelB2,
    //     pgram._s1, pgram._s2, pgram._h,
    //     eqn, nav,
    //   ],
    //   setSteadyState: () => {

    //     pgram.setScenario('low');
    //     eqn.showForm('6');
    //     eqn.setScenarios('default');
    //     // nav.updateButtons();
    //   },
    // });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: style({ top: 0 }, 'So the area of a parallelogram is the |length| of one set of |parallel lines| multiplied by the |distance between| them.'),
    };
    this.addSection(common, commonContent, {
      transitionFromPrev: (done) => {
        eqn.showForm('7');
        eqn.animations.new()
          .scenario({ target: 'center', duration: 1 })
          .whenFinished(done)
          .start();
      },
      setSteadyState: () => {
        eqn.setScenario('center');
        eqn.showForm('7');
      },
    });

    this.addSection(common, commonContent, {
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._labelA1, pgram._labelA2,
        pgram._h,
        eqn,
      ],
      setSteadyState: () => {
        eqn.setScenario('center');
        eqn.showForm('7');
      },
    });

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    commonContent = {
      setContent: [
        style({ top: 0 }, 'In summary, a |parallelogram| has'),
        style({
          list: 'unordered', listStyleTyle: 'disc', size: 0.95, top: 2,
        }, [
          '|Opposite_sides| that are |parallel| and |equal|',
          '|Opposite_angles| that are |equal|',
          '|Diagonals| that split each other in |half|',
          '|Area| = |A| \u00D7 |H|',
        ]),
      ],
      modifiers: {
        Opposite_angles: click(coll.toggleOppositeAngles, [coll, null], colors.angles),
        Opposite_sides: click(coll.toggleEqualSides, [coll, null], colors.sides),
        half: click(coll.toggleEqualHalves, [coll, null], colors.sides),
        A: this.bindPulse(pgram, ['labelA1']),
        H: this.bindPulse(pgram, ['h']),
        Diagonals: this.bindPulse(pgram, ['diag1', 'diag2']),
      },
    };

    this.addSection(common, commonContent, {
      title: 'summary',
      show: [
        pgram._line,
        pgram._pMarkLeft, pgram._pMarkRight,
        pgram._pMarkTop, pgram._pMarkBottom,
        pgram._a1, pgram._b1, pgram._a2, pgram._b2,
        pgram._labelA1, pgram._labelA2,
        pgram._labelB1, pgram._labelB2,
        pgram._diag1, pgram._diag2,
        pgram._lMarkUp1, pgram._lMarkUp2,
        pgram._lMark21, pgram._lMark22,
        pgram._h,
      ],
      setSteadyState: () => {
        pgram.setScenario('bottom');
      },
    });
  }
}

export default Content;
