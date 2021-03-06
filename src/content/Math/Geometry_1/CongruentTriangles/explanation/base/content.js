// @flow
import Fig from 'figureone';
import {
  PresentationFormatContent,
  // interactiveItem,
} from '../../../../../../js/TopicFormat/PresentationFormatContent';
// import Definition from '../../../../../common/tools/definition';
import { note } from '../../../../../common/tools/note';
import diagramLayout from './layout';
// import imgLink from '../../tile.png';
// import imgLinkGrey from '../../tile-grey.png';
import details from '../../details';
import DiagramCollection from './diagramCollection';
import CommonTopicDiagram from '../../../../../common/CommonTopicDiagram';

const {
  // centerV,
  click,
  style,
  highlight,
  highlightWord,
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
      'Math/Geometry_1/Triangles/base',
    ]);
  }

  addSections() {
    const diag = this.diagram.elements;
    const coll = diag._collection;
    const congruent = coll._congruentTriangles;
    const aaa = diag._aaa;
    const sas = diag._sas;
    const asa = diag._asa;
    const aas = diag._aas;
    const ssa = diag._ssa;
    const sss = diag._sss;
    const oneProp = diag._oneProp;
    const twoProp = diag._twoProp;
    // const sss = diag._sss;

    this.addSection({
      title: 'Congruent Triangles',
      setContent: style({ centerV: true }, [
        'In mathematics, if |two shapes are the same size and shape|, then they are said to be |congruent|.',
        'The word |congruent| comes from |Latin|, where it means |"agreeing, meeting together"|.',
      ]),
    });

    this.addSection({
      setContent: [
        'For two triangles to be |congruent|, the corresponding |side_lengths| and |angles| of each triangle must be the same as the other.',
      ],
      modifiers: {
        side_lengths: click(coll.toggleBothSides, [coll, null], colors.sides),
        angles: click(coll.toggleBothAngles, [coll, null], colors.angles),
      },
      show: [congruent._tri1._line, congruent._tri2._line],
      setSteadyState: () => {
        congruent._tri1.setScenario('left');
        congruent._tri2.setScenario('right');
      },
    });

    this.addSection({
      setContent: [
        'If one triangle is |rotated|, the triangles are still congruent as the |side_lengths| and |angles| are the same.',
      ],
      modifiers: {
        side_lengths: click(coll.toggleBothSides, [coll, null], colors.sides),
        angles: click(coll.toggleBothAngles, [coll, null], colors.angles),
        rotated: click(coll.rotateTriangle, [coll, null, null], colors.diagram.action),
      },
      show: [congruent._tri1._line, congruent._tri2._line],
      transitionFromAny: (done) => {
        congruent._tri1.setScenario('left');
        congruent._tri2.setScenario('right');
        coll.rotateTriangle(Math.PI, done);
      },
      setSteadyState: () => {
        congruent._tri2.makeTouchable();
        congruent._tri2.isMovable = true;
        congruent._tri2.touchInBoundingRect = true;
        congruent._tri2.move.type = 'rotation';
      },
      setLeaveState: () => {
        congruent._tri2.isTouchable = false;
        congruent._tri2.isMovable = false;
      },
    });

    this.addSection({
      setContent: [
        'If one triangle is |flipped|, the triangles are still congruent as the |side_lengths| and |angles| are the same.',
      ],
      modifiers: {
        side_lengths: click(coll.toggleBothSides, [coll, null], colors.sides),
        angles: click(coll.toggleBothAngles, [coll, null], colors.angles),
        flipped: click(coll.flipTriangle, [coll, 1, null], colors.diagram.action),
      },
      show: [congruent._tri1._line, congruent._tri2._line],
      transitionFromAny: (done) => {
        if (this.comingFrom === 'prev') {
          coll.isFlipped = false;
          congruent._tri1.setScenario('left');
          coll.flipTriangle(1, done);
        } else {
          congruent._tri1.setScenario('left');
          congruent._tri2.setScenario('right');
          coll.isFlipped = false;
          coll.flipTriangle(0, done);
        }
      },
      setLeaveState: () => {
        congruent._tri2.stop(true, 'complete');
        coll.resetTriangle();
      },
    });

    this.addSection({
      setContent: style({ centerV: true }, [
        'Showing two triangles are congruent can be beneficial in calculating a geometric problem.',
        'When |two triangles are known to be congruent|, unknown angles and lengths of one triangle, can be |inferred| from the known lengths and angles of the other triangle.',
        'This is |tremendously useful| to find properties and relationships of many common shapes and geometries, such as isosceles triangles and rectangles.',
      ]),
    });

    this.addSection({
      setContent: style({ centerV: true }, [
        'So |how| can you figure out if two triangles are congruent?',
        'What is the |minimum| number of properties you need confirm two triangles are congruent?',
      ]),
    });

    this.addSection({
      setContent: style({ centerV: true }, [
        'We will test this by seeing how many |different triangles| we can make from different property configurations.',
        'If we can only make |one triangle|, or all the triangles we can make are the same, then we will know that the property configuration is |sufficient to determine congruence|.',
      ]),
    });

    this.addSection({
      setContent: style({ centerV: true }, [
        'Lets start with a single property. Either a |side| or an |angle|.',
      ]),
    });

    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */

    this.addSection({
      title: 'One Property',
      setContent: [
        'If we know just a |single_side_length|, how many triangles can be formed?',
        note({ label: 'Note:' }, 'Move the |top_point| of the triangle to change the triangle'),
      ],
      modifiers: {
        single_side_length: click(oneProp.pulseSide, [oneProp], oneProp.colors.highlight),
        top_point: click(oneProp.pulsePad, [oneProp], oneProp.colors.pads),
      },
      show: [oneProp._sideTri],
    });

    this.addSection({
      setContent: style({ top: 0 }, [
        '|Many| triangles can be formed. Therefore if two triangles share a single side length that is |not enough information| to know they are |congruent|.',
      ]),
      modifiers: {
        Many: click(oneProp.randomSide, [oneProp], colors.diagram.action),
      },
      show: [oneProp._sideTri],
    });

    this.addSection({
      setContent: style({ top: 0 }, [
        'Similarly, if we know just |one_angle|, |many| triangles can be formed and that is |not enough information| to know two triangles are |congruent|.',
      ]),
      modifiers: {
        one_angle: click(oneProp.pulseAngle, [oneProp], oneProp.colors.highlight),
        many: click(oneProp.randomAngle, [oneProp], colors.diagram.action),
      },
      show: [oneProp._angleTri],
    });

    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    this.addSection({
      title: 'Two Properties',
      setContent: style({ centerV: true }, [
        'Therefore |one property is insufficient| to determine congruency.',
        'How about |two properties|?',
        'The two property |combinations| are:',
        style({ list: 'unordered' }, [
          'Side-Side',
          'Angle-Angle',
          'Adjacent Side-Angle',
          'Opposite Side-Angle',
        ]),
      ]),
    });

    this.addSection({
      setContent: 'Try making the |different combinations| and see if multiple triangles can be made for each.',
      show: [twoProp._tri],
    });

    this.addSection({
      setContent: style({ top: 0 }, 'You might see that |Side_Side|, |Angle_Angle|, |Adjacent_Side_Angle| and |Opposite_Side_Angle| can all form |many| triangles.'),
      modifiers: {
        Side_Side: click(twoProp.sideSide, [twoProp], { text: 'Side-Side', color: colors.diagram.action }),
        Angle_Angle: click(twoProp.angleAngle, [twoProp], { text: 'Angle-Angle', color: colors.diagram.action }),
        Adjacent_Side_Angle: click(twoProp.adjacentAngleSide, [twoProp], { text: 'Adjacent Side-Angle', color: colors.diagram.action }),
        Opposite_Side_Angle: click(twoProp.oppositeAngleSide, [twoProp], { text: 'Opposite Side-Angle', color: colors.diagram.action }),
      },
      show: [twoProp._tri],
    });

    this.addSection({
      setContent: style({ centerV: true }, [
        'Therefore if two triangles share the same |two corresponding properties|, it is |not enough information| to know if they are |congruent|.',
        'Therefore, we will now look at combinations of |three properties|, some of which |do allow| you to determine triangle congruence.',
      ]),
    });

    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */

    this.addSection({
      title: 'AAA',
      setContent: [
        'First consider when only the |three_angles| are known. Do triangles of different sizes exist that have the same angles, or can only one triangle size be formed from these constraints?',
      ],
      modifiers: {
        three_angles: highlight(colors.angles),
      },
      show: [
        aaa._fig._tri._line, aaa._fig._tri._angle0, aaa._fig._tri._angle1, aaa._fig._tri._angle2,
      ],
      setEnterState: () => {
        aaa.resetTri();
        aaa.hasTouchableElements = false;
      },
    });

    this.addSection({
      setContent: [
        'You can |move| the bottom corners of the triangle to see that |triangles with the same angles, can be of different sizes|. You can move the top corner of the triangle to test different triangles.',
      ],
      modifiers: {
        move: click(aaa.randomSize, [aaa], colors.diagram.action),
      },
      show: [aaa],
      setEnterState: () => {
        aaa.resetTri();
        aaa.hasTouchableElements = true;
      },
    });

    this.addSection({
      setContent: style({ centerV: true }, [
        'So triangles with the |same_angles|, can have |different_side_lengths|.',
        'Only knowing two triangles have the same angles, is |not enough| to know they are congruent.',
      ]),
      modifiers: {
        same_angles: highlight(colors.angles),
        different_side_lengths: highlight(colors.sides),
      },
    });

    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    this.addSection({
      title: 'SSS',
      setContent: style({}, [
        'What about if we fix |three side lengths|. How many triangles can be made?',
      ]),
      show: [sss._left, sss._base, sss._right],
      setSteadyState: () => {
        sss.setScenarios('initial');
        sss.updateLabels();
        sss.hasTouchableElements = false;
      },
    });

    let common = {
      setContent: [
        'We can start by fixing one side in position then connecting the other sides to it.',
      ],
    };
    this.addSection(common, {
      show: [sss._left, sss._base, sss._right],
      setSteadyState: () => {
        sss.setScenarios('initial');
        sss.updateLabels();
        sss.hasTouchableElements = false;
      },
    });
    this.addSection(common, {
      show: [sss._left, sss._base, sss._right],
      transitionFromPrev: (done) => {
        sss.animations.cancelAll();
        sss.animations.new()
          .scenarios({
            target: 'center',
            duration: 1,
            afterFrame: () => { sss.updateLabels(); },
          })
          .whenFinished(done)
          .start();
      },
      setSteadyState: () => {
        sss.setScenarios('center');
        sss.updateLabels();
        sss.hasTouchableElements = false;
      },
    });

    common = {
      setContent: 'We can show all possible rotations of these sides by tracing the |circles| they form.',
    };
    this.addSection(common, {
      modifiers: {
        circles: click(this.next, [this, null], colors.diagram.action),
      },
      show: [sss._left._line, sss._base._line, sss._right._line],
      setSteadyState: () => {
        sss.setScenarios('center');
        sss.hasTouchableElements = false;
      },
    });
    this.addSection(common, {
      modifiers: {
        circles: click(sss.createConstructionLines, [sss, null], colors.diagram.action),
      },
      show: [
        sss._left._line, sss._base._line, sss._right._line,
        sss._leftCircle, sss._rightCircle,
      ],
      transitionFromPrev: (done) => {
        sss.createConstructionLines(done);
      },
      setSteadyState: () => {
        sss.setScenarios('center');
        sss.hasTouchableElements = true;
      },
    });

    this.addSection(common, {
      setContent: style({ top: 0 }, 'The two |intersect| points of the circles, are the side rotations where triangles can be formed.'),
      modifiers: {
        intersect: click(sss.toggleIntersects, [sss, null, null], colors.diagram.action),
      },
      transitionFromPrev: (done) => {
        sss.toggleIntersects('top', done);
      },
      show: [
        sss._left._line, sss._base._line, sss._right._line,
        sss._leftCircle, sss._rightCircle,
      ],
      setSteadyState: () => {
        sss.setScenarios('center');
        sss.setScenarios('top');
        sss.hasTouchableElements = true;
      },
    });

    this.addSection({
      setContent: 'Now, are these triangles the |same| or |different|?',
      show: [
        sss._left._line, sss._base._line, sss._right._line,
        sss._leftCircle, sss._rightCircle,
      ],
      setSteadyState: () => {
        sss.setScenarios('center');
        sss._leftBottom._line.showAll();
        sss._rightBottom._line.showAll();
        sss.setScenarios('default');
        sss.hasTouchableElements = false;
      },
    });

    this.addSection({
      setContent: style({ top: 0 }, 'We know that if we |flip| the top triangle about the horizontal side, we get a |congruent| triangle below.'),
      show: [
        sss._leftCircle, sss._rightCircle,
        sss._fixedTri, sss._flipTri,
      ],
      modifiers: {
        flip: click(sss.flipTriangle, [sss, 1], colors.sides),
      },
      setSteadyState: () => {
        sss.setScenarios('center');
        sss.setScenarios('default');
        sss.hasTouchableElements = false;
      },
      setLeaveState: () => {
        sss._flipTri.setScale(1, 1);
      },
    });

    this.addSection({
      setContent: style({ top: 0 }, 'We also know there is only |one circle intersection| point below the horizontal side, and thus only one lower triangle |possible|.'),
      show: [
        sss._leftCircle, sss._rightCircle,
        sss._flipTri,
      ],
      setSteadyState: () => {
        sss.setScenarios('center');
        sss.setScenarios('default');
        sss.hasTouchableElements = false;
        // sss._flipTri.setScale(1, 1);
      },
    });

    this.addSection({
      setContent: style({ top: 0 }, 'As |only one triangle| is possible below the line, it must therefore be the |flipped triangle|.'),
      show: [
        sss._leftCircle, sss._rightCircle,
        sss._fixedTri, sss._flipTri,
      ],
      setSteadyState: () => {
        sss.setScenarios('center');
        sss.setScenarios('default');
        sss.hasTouchableElements = false;
        sss._flipTri.setScale(1, 1);
      },
    });

    this.addSection({
      setContent: style({ top: 0 }, 'Similarly, if these triangles are flipped around the |vertical|, then it would be as if we switched the positions of the two rotating sides.'),
      show: [
        sss._leftCircle, sss._rightCircle,
        sss._fixedTri, sss._flipTri,
      ],
      modifiers: {
        vertical: click(sss.flipAll, [sss, 1], colors.sides),
      },
      setSteadyState: () => {
        const flip = sss._fixedTri.getScale().x;
        sss.setScenarios('center');
        sss.setScenarios('default');
        sss.hasTouchableElements = false;
        if (flip !== 1 && this.comingFrom === 'next') {
          sss.flipAll(0);
        }
      },
      setLeaveState: () => {
        if (this.goingTo !== 'next') {
          sss._fixedTri.setScale(1, 1);
          sss._flipTri.setScale(1, 1);
          sss._leftCircle.setScale(1, 1);
          sss._rightCircle.setScale(1, 1);
        }
      },
    });

    this.addSection({
      setContent: style({ top: 0 }, 'So no matter which |end| we connect the sides to, we have the same congruent triangle.'),
      show: [
        sss._leftCircle, sss._rightCircle,
        sss._fixedTri, sss._flipTri,
      ],
      modifiers: {
        end: click(sss.flipAll, [sss, 1], colors.sides),
      },
      setSteadyState: () => {
        const flip = sss._fixedTri.getScale().x;
        sss.setScenarios('center');
        sss.setScenarios('default');
        sss.hasTouchableElements = false;
        if (flip !== 1 && this.comingFrom === 'prev') {
          sss.flipAll(0);
        }
      },
      setLeaveState: () => {
        if (this.goingTo !== 'prev') {
          sss._fixedTri.setScale(1, 1);
          sss._flipTri.setScale(1, 1);
          sss._leftCircle.setScale(1, 1);
          sss._rightCircle.setScale(1, 1);
        }
      },
    });

    this.addSection({
      setContent: style({ centerV: true }, [
        'And so for this case, the three side lengths can only create |one triangle|.',
        'Does this hold for |any| three side lengths?',
      ]),
    });

    this.addSection({
      setContent: style({ centerV: true }, [
        'We have seen making a triangle from three fixed side lengths is the same as making a triangle from |two overlapping circles|.',
        'One side of the triangle is the distance between the |circle centers|.',
        'The other two sides join at one of the circle |intersection| points.',
        'So, a more general question might be, can you find any configuration of separated circles that has |more than two, opposite, intersection points|?',
      ]),
    });

    this.addSection({
      setContent: style({ top: 0 }, [
        '|Experiment| by changing the circle\'s sizes and positions.',
      ]),
      show: [
        sss._circ1, sss._circ2, sss._pad1, sss._pad2,
        sss._rad1, sss._rad2, sss._baseLine,
      ],
      transitionFromAny: (done) => {
        if (this.comingFrom === 'next') {
          // const rad1 = sss._rad1.getRotation();
          // const rad2 = sss._rad2.getRotation();
          // const scale1 = sss._circ1._scale.getScale();
          // const scale2 = sss._circ2._scale.getScale();
          // const pad1 = sss._pad1.transform._dup();
          // const pad2 = sss._pad2.transform._dup();
          // sss.setScenarios('center');
          // sss._rad1.setRotation(rad1);
          // sss._rad2.setRotation(rad2);
          // sss._circ1._scale.setScale(scale1);
          // sss._circ2._scale.setScale(scale2);
          // sss._pad1.setTransform(pad1);
          // sss._pad2.setTransform(pad2);
          sss.animations.new()
            .scenarios({ target: 'center', duration: 0.8 })
            .whenFinished(done)
            .start();
          return;
        }
        sss.setScenarios('center');
        done();
      },
      setSteadyState: () => {
        sss.hasTouchableElements = true;
      },
    });

    common = {
      show: [
        sss._circ1, sss._circ2, sss._pad1, sss._pad2,
        sss._rad1, sss._rad2, sss._baseLine,
      ],
      modifiers: {
        same_position: click(sss.goToSamePosition, [sss, null], colors.diagram.action),
        do_not_intersect: click(sss.goToNoOverlap, [sss, null], colors.diagram.action),
        do_intersect: click(sss.goToOverlap, [sss, null], colors.diagram.action),
        two: click(sss.goToOverlapIntersect, [sss, null], colors.diagram.action),
      },
      setSteadyState: () => {
        sss.hasTouchableElements = true;
      },
    };

    this.addSection(common, {
      setContent: style({ top: 0 }, [
        'If the circles are at the |same_position|, then a triangle cannot be formed as one of the side lengths is zero',
      ]),
      transitionFromAny: (done) => {
        if (this.comingFrom === 'goto') {
          sss.setScenarios('center');
          sss.goToPositionAndScale(0, 0, 0.7, 0.6, null, 0);
          done();
          return;
        }
        sss.goToPositionAndScale(0, 0, 0.7, 0.6, done);
      },
    });

    this.addSection(common, {
      setContent: style({ top: 0 }, [
        'If the circles |do_not_intersect|, then no triangles can be formed as the side lengths never meet at their ends.',
      ]),
      transitionFromAny: (done) => {
        if (this.comingFrom === 'goto') {
          sss.setScenarios('center');
          sss.goToPositionAndScale(-1, 1, 0.7, 0.6, done, 0);
          done();
          return;
        }
        sss.goToPositionAndScale(-1, 1, 0.7, 0.6, done);
      },
    });

    this.addSection(common, {
      setContent: style({ top: 0 }, [
        'In the situations the circles |do_intersect|, there are only ever |two| intersect points which we have seen makes the |same triangle|.',
      ]),
      transitionFromAny: (done) => {
        const [angle1, angle2] = sss.getIntersectAngles(-0.5, 0.5, 0.7, 0.6);
        if (this.comingFrom === 'goto') {
          sss.setScenarios('center');
          sss.goToPositionAndScale(-0.5, 0.5, 0.7, 0.6, done, 0, angle1, angle2);
          done();
          return;
        }
        // sss.goToOverlap(done);
        sss.goToPositionAndScale(-0.5, 0.5, 0.7, 0.6, done, 0.8, angle1, angle2);
      },
    });

    this.addSection({
      setContent: style({ centerV: true }, [
        'And so any set of |three side lengths| will only create |one unique triangle|.',
      ]),
    });

    this.addSection({
      setContent: [
        'Therefore if two triangles share |three sides of the same length|, then they |are congruent|.',
        'This case is often called the |Side Side Side| or |SSS| case.',
      ],
      modifiers: {
        angle_between: highlight(colors.angles),
      },
      setEnterState: () => {
        congruent._tri1.setScenario('lowLeft');
        congruent._tri2.setScenario('rightLeft');
      },
      show: [congruent],
      hide: [
        congruent._tri1._angle0, congruent._tri1._angle1,
        congruent._tri2._angle0, congruent._tri2._angle1,
        congruent._tri1._angle2, congruent._tri2._angle2,
      ],
      // setSteadyState: () => {
      // },
    });

    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */

    this.addSection({
      setContent: style({ centerV: true }, [
        'The next two cases are combinations of |two_sides| and |one_angle|.',
        'When you know one angle and two sides, the two sides can either be |adjacent| to the angle, or one can be |adjacent| while the other is |opposite|.',
      ]),
      modifiers: {
        two_sides: highlight(colors.sides),
        one_angle: highlight(colors.angles),
      },
    });

    this.addSection({
      title: 'SAS',
      setContent: [
        'First consider the case where the |two_sides_are_adjacent| to the |angle|. Can more than one triangle be made?',
      ],
      modifiers: {
        angle: highlight(colors.angles),
        two_sides_are_adjacent: highlight(colors.sides),
      },
      show: [sas._line, sas._angle, sas._base],
      setSteadyState: () => {
        sas.setScenarios('initial');
      },
    });

    this.addSection({
      setContent: [
        'We can start by connecting the angle to one of the sides. At first look, there seem to be |four| ways to do this.',
      ],
      modifiers: {
        four: click(sas.toggleAngles, [sas], colors.angles),
      },
      show: [sas._angle, sas._base],
      transitionFromPrev: (done) => {
        sas.setScenarios('initial');
        sas.animations.cancelAll();
        sas.animations.new()
          .scenarios({ target: 'center1', duration: 1 })
          .whenFinished(done)
          .start();
      },
      setSteadyState: () => {
        sas.setScenarios('center1');
        sas.anglePosition = 1;
      },
      transitionToNext: (done) => {
        // const r = sas._angle.getRotation();
        if (sas.anglePosition !== 1) {
          sas.animations.cancelAll();
          sas.animations.new()
            .scenarios({ target: 'center1', duration: 1 })
            .whenFinished(done)
            .start();
        } else {
          done();
        }
      },
    });

    this.addSection({
      setContent: [
        'We can visualize these 4 ways at the same time.',
      ],
      transitionFromPrev: (done) => {
        sas._config1.showAll();
        sas._config1._line.hide();
        sas._config1._line3.hide();
        sas._config1._angle2.hide();
        sas._config1.setScenario('center');
        sas._config1.animations.cancelAll();
        sas._config1.animations.new()
          .scenario({ target: 'showAll', duration: 1 })
          .whenFinished(done)
          .start();
      },
      setSteadyState: () => {
        sas._config1.showAll();
        sas._config2.showAll();
        sas._config3.showAll();
        sas._config4.showAll();
        sas._config1._line.hide();
        sas._config2._line.hide();
        sas._config3._line.hide();
        sas._config4._line.hide();
        sas._config1._line3.hide();
        sas._config2._line3.hide();
        sas._config3._line3.hide();
        sas._config4._line3.hide();
        sas._config1._angle2.hide();
        sas._config2._angle2.hide();
        sas._config3._angle2.hide();
        sas._config4._angle2.hide();
        sas.setScenarios('showAll');
      },
    });

    common = {
      setContent: [
        'Next, we can connect the |second side| to be |adjacent_to_the_angle|.',
      ],
      modifiers: {
        adjacent_to_the_angle: highlight(colors.angles),
      },
      setSteadyState: () => {
        sas.setScenarios('showAll');
      },
    };
    this.addSection(common, {
      show: [sas._config1, sas._config2, sas._config3, sas._config4],
      hide: [
        sas._config1._line, sas._config2._line,
        sas._config3._line, sas._config4._line,
        sas._config1._line3, sas._config2._line3,
        sas._config3._line3, sas._config4._line3,
        sas._config1._angle2, sas._config2._angle2,
        sas._config3._angle2, sas._config4._angle2,
      ],
    });
    this.addSection(common, {
      show: [sas._config1, sas._config2, sas._config3, sas._config4],
      hide: [
        sas._config1._line3, sas._config2._line3,
        sas._config3._line3, sas._config4._line3,
        sas._config1._angle2, sas._config2._angle2,
        sas._config3._angle2, sas._config4._angle2,
      ],
    });
    this.addSection(common, {
      setContent: style({ top: 0 }, [
        'For each of these scenarios, how many triangles can be made, and are the triangles between scenarios the same or different?',
      ]),
      show: [sas._config1, sas._config2, sas._config3, sas._config4],
      hide: [
        sas._config1._line3, sas._config2._line3,
        sas._config3._line3, sas._config4._line3,
        sas._config1._angle2, sas._config2._angle2,
        sas._config3._angle2, sas._config4._angle2,
      ],

    });

    this.addSection({
      setContent: [
        'We start by considering just one of these scenarios.',
      ],
      show: [sas._config1],
      hide: [sas._config1._line3, sas._config1._angle2],
      transitionFromPrev: (done) => {
        sas._config1.animations.cancelAll();
        sas._config1.animations.new()
          .scenario({ target: 'center', duration: 1 })
          .whenFinished(done)
          .start();
      },
      setSteadyState: () => {
        sas._fig.showAll();
        sas.setProblemStatement();
        sas._config1.hide();
        // console.log(sas)
      },
    });

    this.addSection({
      setContent: [
        'You can move the |pad| to see how many different lines can be drawn to make a triangle with the known sides and angle.',
      ],
      modifiers: {
        pad: click(sas.pulsePad, [sas], colors.pads),
      },
      show: [sas._fig],
      setSteadyState: () => {
        sas.setMovableLegReady();
      },
    });

    this.addSection({
      setContent: [
        'There is |only_one| line length and angle possible. If this line has a |different_length| or |different_angle|, it does not form a triangle.',
      ],
      modifiers: {
        only_one: click(sas.goToTri, [sas, null], colors.sides),
        different_length: click(sas.randLength, [sas], colors.sides),
        different_angle: click(sas.randRotation, [sas], colors.angles),
      },
      show: [sas._fig],
      transitionFromPrev: (done) => {
        if (sas._fig._pad0.getPosition().isNotEqualTo(sas._fig._pad3.getPosition())) {
          sas.goToTri(done);
        } else {
          done();
        }
      },
      setSteadyState: () => {
        sas.setMovableLeg();
      },
    });

    this.addSection({
      setContent: [
        'So for this scenario, |only one| triangle can be made.',
      ],
      show: [sas._fig],
      transitionFromPrev: (done) => {
        if (sas._fig._pad0.getPosition().isNotEqualTo(sas._fig._pad3.getPosition())) {
          sas.goToTri(done);
        } else {
          done();
        }
      },
      interactiveItemsOnly: [],
      setSteadyState: () => {
        sas._fig.hideAll();
        sas._config1.showAll();
        sas._config1.setScenario('center');
      },
    });

    this.addSection({
      setContent: [
        'Now if we |flip| this triangle in different ways, we know all the reflections are |congruent|.',
      ],
      show: [sas._config1],
      setSteadyState: () => {
        sas._config1.setScenario('center');
      },
    });

    common = {
      setContent: [
        'Therefore, we can |flip| them to resemble the |original| four scenarios of connecting the angle to the first side.',
      ],
      show: [sas._config1],
    };
    this.addSection(common, {
      modifiers: {
        flip: click(this.next, [this, null], colors.sides),
        original: click(this.next, [this, null], colors.diagram.action),
      },
      setSteadyState: () => {
        sas._config1.setScenario('center');
      },
    });

    this.addSection(common, {
      modifiers: {
        flip: click(sas.createCongruentTriangles, [sas, null, true], colors.sides),
        original: click(sas.toggleConfig, [sas, null], colors.diagram.action),
      },
      show: [sas._config1],
      transitionFromPrev: (done) => {
        sas.setScenario('center');
        sas.animations.cancelAll();
        sas.animations.new()
          .scenarios({ target: 'showAll', duration: 1 })
          .trigger({
            callback: sas.createCongruentTriangles.bind(sas, null, false),
            duration: 3,
          })
          .whenFinished(done)
          .start();
      },
      setSteadyState: () => {
        sas._config2.showAll();
        sas._config3.showAll();
        sas._config4.showAll();
        sas.setScenarios('showAll');
        sas.configColors(colors.disabled, colors.disabled);
      },
      setLeaveState: () => {
        sas.configColors(colors.sides, colors.angles);
      },
    });

    this.addSection({
      setContent: style({ centerV: true }, [
        'So all four scenarios result in the |same triangle|, just flipped or rotated compared to the first.',
        'So we see that only one triangle can be formed when given two side lengths and the angle between them.',
      ]),
    });

    this.addSection({
      setContent: [
        'Therefore if two triangles share |two sides of the same length|, and the |angle_between| those two sides is also the same on both triangles, then they |are congruent|.',
        'This case is often called the |Side Angle Side| or |SAS| case.',
      ],
      modifiers: {
        angle_between: highlight(colors.angles),
      },
      setEnterState: () => {
        congruent._tri1.setScenario('lowLeft');
        congruent._tri2.setScenario('rightLeft');
      },
      show: [congruent],
      hide: [
        congruent._tri1._angle0, congruent._tri1._angle1,
        congruent._tri2._angle0, congruent._tri2._angle1,
        congruent._tri1._side01, congruent._tri2._side01,
      ],
      // setSteadyState: () => {
      // },
    });

    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    common = {
      show: [
        ssa._unknown, ssa._opposite, ssa._adjacent, ssa._angle,
        ssa._adjacentMovePad,
      ],
      setSteadyState: () => {
        ssa.hasTouchableElements = false;
        ssa.setScenarios('init');
        ssa.updatePosition();
        ssa.updateRotation();
        ssa.setDefault();
      },
    };
    this.addSection(common, {
      title: 'SSA',
      setContent: [
        'Next we consider the case where an |angle|, its |adjacent_side| and its |opposite_side| are known.',
      ],
      modifiers: {
        angle: highlight(colors.angles),
        adjacent_side: click(ssa.pulseAdjacent, [ssa], colors.sides),
        opposite_side: click(ssa.pulseOpposite, [ssa], colors.sides),
      },
    });

    this.addSection(common, {
      setContent: [
        'How many triangles can be made with this set of constraints?',
      ],
    });

    this.addSection(common, {
      setContent: [
        'To help visualize, we can |extend| the unknown side and |rotate| the opposite side while tracing its end.',
      ],
      modifiers: {
        extend: click(this.next, [this, null], colors.sides),
        rotate: click(this.next, [this, null], colors.sides),
      },
    });

    this.addSection({
      setContent: [
        'To help visualize, we can |extend| the unknown side and |rotate| the opposite side while tracing its end.',
      ],
      modifiers: {
        extend: click(ssa.createConstructionLines, [ssa, null, 'line'], colors.sides),
        rotate: click(ssa.createConstructionLines, [ssa, null, 'circle'], colors.sides),
      },
      show: [ssa],
      setEnterState: () => {
        ssa.setScenarios('init');
        ssa.updatePosition();
        ssa.updateRotation();
      },
      transitionFromPrev: (done) => {
        ssa._constructionCircle.angleToDraw = 0;
        ssa.createConstructionLines(done, 'both');
      },
      setSteadyState: () => {
        ssa.hasTouchableElements = true;
        ssa._constructionLine.isTouchable = false;
        ssa._constructionLine.isMovable = false;
        ssa._constructionLine._line.isMovable = false;
        ssa._constructionLine._line.isTouchable = false;
        ssa._adjacentMovePad.isTouchable = false;
        ssa._adjacentMovePad.isMovable = false;
        ssa.setDefault();
        // ssa._constructionCircle.angleToDraw = Math.PI / 2;
      },
      setLeaveState: () => {
        const r = ssa._constructionLine.getRotation();
        ssa._constructionLine.setLength(1.7 / Math.sin(r) * 1);
        ssa._constructionCircle.angleToDraw = 1 * Math.PI * 2;
      },
    });

    this.addSection({
      setContent: style({ top: 0 }, [
        'The |intersect| points are the possible triangles. In this case there are |two| possible triangles.',
      ]),
      modifiers: {
        intersect: click(ssa.toggleInterceptAngles, [ssa], colors.sides),
        two: click(ssa.toggleInterceptAngles, [ssa], colors.sides),
      },
      show: [ssa],
      setEnterState: () => {
        ssa.setScenarios('init');
        ssa.updatePosition();
        ssa.updateRotation();
      },
      setSteadyState: () => {
        ssa.hasTouchableElements = true;
        ssa._constructionLine.isTouchable = false;
        ssa._constructionLine.isMovable = false;
        ssa._constructionLine._line.isMovable = false;
        ssa._constructionLine._line.isTouchable = false;
        ssa._adjacentMovePad.isTouchable = false;
        ssa._adjacentMovePad.isMovable = false;
        ssa.setDefault();
      },
    });
    this.addSection({
      setContent: style({ top: 0 }, [
        'But what happens if we start with a different length of the adjacent side, or different angle? Are two triangles still formed?',
      ]),
      show: [ssa],
      setEnterState: () => {
        if (this.comingFrom === 'goto') {
          ssa.setScenarios('init');
          ssa.updatePosition();
          ssa.updateRotation();
        }
      },
      setSteadyState: () => {
        ssa.makeFullyInteractive();
      },
    });
    this.addSection({
      setContent: style({ top: 0 }, [
        'You might see different scenarios where |two|, |one| or |zero| triangles can be formed.',
      ]),
      show: [ssa],
      setEnterState: () => {
        if (this.comingFrom === 'goto') {
          ssa.setScenarios('init');
          ssa.updatePosition();
          ssa.updateRotation();
        }
      },
      setSteadyState: () => {
        ssa.makeFullyInteractive();
      },
    });

    this.addSection({
      setContent: style({ top: 0 }, [
        'When the |adjacent| side is |shorter| than or equal to the |opposite| side, only |one triangle| can ever be formed.',
      ]),
      modifiers: {
        adjacent: click(ssa.pulseAdjacent, [ssa], colors.sides),
        opposite: click(ssa.pulseOpposite, [ssa], colors.sides),
        shorter: click(ssa.adjacentShorter, [ssa, null], colors.diagram.action),
      },
      show: [ssa],
      setEnterState: () => {
        ssa.setScenario('init');
        if (this.comingFrom === 'goto') {
          ssa.setScenarios('init');
          ssa.updatePosition();
          ssa.updateRotation();
        }
      },
      transitionFromAny: (done) => {
        ssa.adjacentShorterDefault(done);
      },
      setSteadyState: () => {
        ssa.makeFullyInteractive();
      },
    });

    this.addSection({
      setContent: style({ top: 0 }, [
        'When the |adjacent| side is |longer| than  the |opposite| side, then either |two|, |one| or |zero| triangles can be formed.',
      ]),
      modifiers: {
        adjacent: click(ssa.pulseAdjacent, [ssa], colors.sides),
        opposite: click(ssa.pulseOpposite, [ssa], colors.sides),
        two: click(ssa.adjacentTwo, [ssa, null], colors.diagram.action),
        one: click(ssa.adjacentOne, [ssa, null], colors.diagram.action),
        zero: click(ssa.adjacentZero, [ssa, null], colors.diagram.action),
      },
      show: [ssa],
      setEnterState: () => {
        if (this.comingFrom === 'goto') {
          ssa.setScenarios('init');
          ssa.updatePosition();
          ssa.updateRotation();
        }
      },
      transitionFromAny: (done) => {
        ssa.adjacentTwoDefault(done);
      },
      setSteadyState: () => {
        ssa.makeFullyInteractive();
      },
    });

    this.addSection({
      setContent: style({ centerV: true }, [
        'To summarize, if we know an |angle|, an |adjacent side|, and an |opposite side| of a triangle, then we can uniquely create just one triangle if the |adjacent side is shorter than or equal to the opposite side|.',
        'If the adjacent side is longer than the opposite side, then up to two triangles might be possible.',
      ]),
    });

    this.addSection({
      setContent: style({}, [
        'This case is often referred to as the |Side Side Angle|, or |SSA| case.',
        'If two triangles have the same |angle_a|, |adjacent side (B)|, and |opposite side (A)|, then we can only be sure they are |congruent| if the |opposite side is longer or equal to the adjacent side|, or |A ≥ B|.',
      ]),
      modifiers: {
        angle_a: highlightWord('angle (a)', colors.angles),
      },
      setEnterState: () => {
        congruent._tri1.setScenario('lowLeft');
        congruent._tri2.setScenario('rightLeft');
      },
      show: [congruent],
      hide: [
        congruent._tri1._angle1, congruent._tri2._angle1,
        congruent._tri1._angle0, congruent._tri2._angle0,
        // congruent._tri1._side01, congruent._tri2._side01,
        congruent._tri1._side20, congruent._tri2._side20,
      ],
    });

    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */

    this.addSection({
      setContent: style({ centerV: true }, [
        'The next two cases are combinations of |two_angles| and |one_side|.',
        'When you know one side and two angles, the two angles can either be adjacent to the side, or one can be adjacent while the other is opposite.',
      ]),
      modifiers: ({
        two_angles: highlight(colors.angles),
        one_side: highlight(colors.sides),
      }),
    });

    this.addSection({
      title: 'ASA',
      setContent: [
        'We will start where |one_side| and its |two_adjacent_angles| are known. Can only one triangle be formed from this configuration?',
      ],
      modifiers: {
        one_side: highlight(colors.sides),
        two_adjacent_angles: highlight(colors.angles),
      },
      setEnterState: () => {
        asa.initialTri();
      },
      show: [asa],
      hide: [
        asa._fig._pad0, asa._fig._pad3,
        asa._fig._side01._label, asa._fig._side23._label],
    });

    this.addSection({
      setContent: [
        'As the two angles are fixed, the only way to make a triangle is to |extend| the remaining sides till they meet.',
      ],
      modifiers: {
        extend: click(this.next, [this, null], colors.sides),
      },
      setEnterState: () => {
        asa.initialTri();
      },
      show: [asa],
      hide: [
        asa._fig._pad0, asa._fig._pad3,
        asa._fig._side01._label, asa._fig._side23._label],
    });

    this.addSection({
      setContent: [
        'As the two angles are fixed, the only way to make a triangle is to |extend| the remaining sides till they meet.',
      ],
      modifiers: {
        extend: click(asa.goToTri, [asa, null, true], colors.sides),
      },
      transitionFromAny: (done) => {
        // asa.initialTri();
        if (this.comingFrom === 'prev') {
          asa.goToTri(done, true);
        } else {
          asa.goToTri(done, false);
        }
      },
      show: [asa],
      hide: [
        asa._fig._pad0, asa._fig._pad3,
      ],
    });

    this.addSection({
      setContent: [
        'Different lengths of the |left| or |right| side will not result in a triangle. Only |one_length| for each side will form the triangle.',
      ],
      modifiers: {
        one_length: click(asa.goToTri, [asa, null, false], colors.sides),
        left: click(asa.randLength, [asa, '01'], colors.sides),
        right: click(asa.randLength, [asa, '23'], colors.sides),
      },
      show: [asa],
      transitionFromAny: (done) => {
        asa.goToTri(done, false);
      },
    });

    this.addSection({
      setContent: [
        'Note, similar to the Side-Angle-Side case, we started this with a |choice| on how to orient the known |angles| and |side|.',
      ],
      modifiers: {
        angles: highlight(colors.angles),
        sides: highlight(colors.sides),
      },
      setEnterState: () => {
        asa.initialTri();
      },
      show: [asa],
      hide: [
        asa._fig._pad0, asa._fig._pad3,
        asa._fig._side01._label, asa._fig._side23._label,
      ],
    });

    this.addSection({
      setContent: [
        'We can follow the same procedure as the Side-Angle-Side case to show that these choices simply result in the same triangle which is either |rotated| or |flipped|.',
        'Therefore, the triangles resulting from these choices are all |congruent|.',
      ],
      modifiers: {
        angles: highlight(colors.angles),
        sides: highlight(colors.sides),
      },
      setEnterState: () => {
        asa.initialTri();
      },
      show: [asa],
      hide: [
        asa._fig._pad0, asa._fig._pad3,
        asa._fig._side01._label, asa._fig._side23._label,
      ],
    });

    this.addSection({
      setContent: [
        'Therefore if two triangles share the same |two_angles| and |side_between| them, then they will be |congruent|.',
        'This case is often called the |Angle Side Angle| or |ASA| case.',
      ],
      modifiers: {
        two_angles: highlight(colors.angles),
        side_between: highlight(colors.sides),
      },
      setEnterState: () => {
        congruent._tri1.setScenario('lowLeft');
        congruent._tri2.setScenario('rightLeft');
      },
      show: [congruent],
      hide: [
        congruent._tri1._angle0, congruent._tri2._angle0,
        congruent._tri1._side01, congruent._tri2._side01,
        congruent._tri1._side20, congruent._tri2._side20,
      ],
    });

    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    this.addSection({
      title: 'AAS',
      setContent: [
        'The next case is when a |side| and its |adjacent_angle| and |opposite_angle| are known.',
      ],
      modifiers: {
        side: highlight(colors.sides),
        opposite_angle: highlight(colors.angles),
        adjacent_angle: highlight(colors.angles),
      },
      show: [aas._angle1, aas._angle3, aas._side],
    });

    common = {
      setContent: [
        'First, we know angles in a |triangle| always add up to 180º. Therefore we can |calculate| the third angle.',
      ],
    };
    this.addSection(common, {
      modifiers: {
        triangle: this.qr('Math/Geometry_1/Triangles/base/AngleSumPres', colors.sides),
        calculate: click(this.next, [this, null], colors.angles),
      },
      show: [aas._angle1, aas._angle3, aas._side],
    });
    this.addSection(common, {
      modifiers: {
        triangle: this.qr('Math/Geometry_1/Triangles/base/AngleSumPres', colors.sides),
        calculate: click(aas.pulseAngle2, [aas], colors.angles),
      },
      show: [aas],
      transitionFromPrev: (done) => {
        aas.pulseAngle2(done);
      },
    });

    this.addSection({
      setContent: [
        'The third angle has now given us the |Angle Side Angle| case. With this established, we know only one triangle can be formed.',
      ],
      show: [aas],
      setSteadyState: () => {
        aas._angle3.setColor(colors.disabled);
      },
      setLeaveState: () => {
        aas._angle3.setColor(colors.angles);
        aas._angle3._side1.setColor(colors.sides);
        aas._angle3._side2.setColor(colors.sides);
      },
    });

    this.addSection({
      setContent: [
        'Therefore if two triangles share the same |two_angles| and relatively positioned |side_not_between| them, then they will be |congruent|.',
        'This case is often called the |Angle Angle Side| or |AAS| case.',
      ],
      modifiers: {
        two_angles: highlight(colors.angles),
        side_not_between: highlight(colors.sides),
      },
      setEnterState: () => {
        congruent._tri1.setScenario('lowLeft');
        congruent._tri2.setScenario('rightLeft');
      },
      show: [congruent],
      hide: [
        congruent._tri1._angle1, congruent._tri2._angle1,
        congruent._tri1._side01, congruent._tri2._side01,
        congruent._tri1._side20, congruent._tri2._side20,
      ],
    });

    this.addSection({
      setContent: style({ centerV: true }, [
        'The |Angle Side Side| and |Angle Angle Side| cases can be combined to be more general as all the combinations of two angles and one side are covered between them.',
        'Therefore, if two triangles share the same |two_angles| and |relatively_positioned_side|, then the |triangles are congruent|.',
      ]),
      modifiers: {
        two_angles: highlight(colors.angles),
        relatively_positioned_side: highlight(colors.sides),
      },
    });

    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    /* ********************************************************************* */
    this.addSection({
      title: 'Three Property Summary',
      setContent: style({ centerV: true, size: 0.9 }, [
        'We have now seen whether we can determine congruence from all combinations of |three properties| including:',
        style({ left: 3, list: 'unordered', size: 0.9 }, [
          'All angles - |Angle-Angle-Angle| (AAA)',
          'All sides - |Side-Side-Side| (SSS)',
          'Two sides and an angle - |Side-Angle-Side| (SAS) and |Side-Side-Angle| (SSA)',
          'Two angles and a side - |Angle-Side-Angle| (ASA) and |Angle-Angle-Side| (AAS)',
        ]),
        '|AAA| is |not| enough information to determine congruence.',
        '|SSA| is |only| enough if the |side opposite the angle is equal to or longer than the side adjacent| to the angle',
        '|SSS|, |SAS|, |ASA|, |AAS| are all |sufficent| to determine congruence.',
      ]),
    });
    this.addSection({
      title: 'Four or Five Properties',
      setContent: style({ centerV: true, size: 0.9 }, [
        'All combinations of |four| or |five| properties have within them either |three sides|, or |one side and two angles|. As |SSS|, |AAS| and |ASA| are all sufficient tests of congruence, then |all| combinations of four or five properties will also be |sufficient| tests of congruence.',
      ]),
    });
  }
}

export default Content;
