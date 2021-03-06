// @flow
import Fig from 'figureone';
import {
  PresentationFormatContent,
  // interactiveItem,
} from '../../../../../../js/TopicFormat/PresentationFormatContent';
// import Definition from '../../../../../common/tools/definition';
import diagramLayout from './layout';
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
  // highlightWord,
  centerV,
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
      'Math/Geometry_1/AnglesAtIntersections/base',
      'Math/Geometry_1/AreaTriangle/base',
      'Math/Geometry_1/RightAngleTriangles/base',
      'Math/Geometry_1/ParallelLineDistance/base',
    ]);
  }

  addSections() {
    const diag = this.diagram.elements;
    const coll = diag._collection;
    const fig = coll._fig;
    const fig2 = coll._fig2;
    const fig3 = coll._fig3;
    const fig4 = coll._fig4;

    this.addSection({
      title: 'Right Angle Triangle Split',
      setContent: centerV([
        'We will examine what happens when we |split a triangle with a line parallel to one of its sides|.',
        'To do this, we start with the simple case of a |right angle triangle|, and then extend the result.',
      ]),
    });

    const centerFig = {
      setEnterState: () => {
        fig.setScenario('center');
      },
    };

    this.addSection(centerFig, {
      setContent: [
        'Start with a right angle triangle with sides |M|, |N| and |B|',
      ],
      show: [fig._tri, fig._rightAngle],
    });

    let common = {
      setContent: [
        'Then |draw_a_line| parallel to |B|.',
      ],
    };
    this.addSection(centerFig, common, {
      modifiers: { draw_a_line: this.bindNext(colors.sides) },
      show: [fig._tri, fig._rightAngle],
    });

    this.addSection(centerFig, common, {
      modifiers: {
        draw_a_line: click(coll.drawSplit, [coll, null], colors.sides),
      },
      transitionFromPrev: (done) => { coll.drawSplit(done); },
      show: [fig._tri, fig._rightAngle, fig._split],
    });

    common = {
      setContent: [
        'As the line is parallel, then it will also form a |right angle| with side |N| as the two |right_angles| are |corresponding_angles|.',
      ],
    };
    this.addSection(centerFig, common, {
      modifiers: {
        corresponding_angles: this.qr('Math/Geometry_1/AnglesAtIntersections/base/Corresponding'),
        right_angles: this.bindNext(colors.sides),
      },
      show: [fig._tri, fig._rightAngle, fig._split],
    });

    this.addSection(centerFig, common, {
      modifiers: {
        corresponding_angles: this.qr('Math/Geometry_1/AnglesAtIntersections/base/Corresponding'),
        right_angles: click(coll.pulseRightAngles, [coll, null], colors.sides),
      },
      show: [fig._tri, fig._rightAngle, fig._split, fig._splitRightAngle],
      transitionFromPrev: (done) => { coll.pulseRightAngles(done); },
    });

    common = {
      setContent: [
        'The split line has created a smaller |triangle| at the top. We can highlight this triangle, and label its sides.',
      ],
    };
    this.addSection(centerFig, common, {
      modifiers: {
        triangle: this.bindNext(colors.highlight),
      },
      show: [fig._tri, fig._rightAngle, fig._split, fig._splitRightAngle],
    });

    this.addSection(centerFig, common, {
      modifiers: {
        triangle: click(coll.pulseSplitTriangle, [coll, null], colors.highlight),
      },
      show: [
        fig._tri, fig._rightAngle, fig._split, fig._splitRightAngle,
        fig._splitTri,
      ],
      hide: [fig._tri._side01, fig._tri._side12],
      transitionFromPrev: (done) => { coll.pulseSplitTriangle(done); },
    });

    this.addSection(centerFig, {
      setContent: [
        'We wish to see if there is any relationship between the side lengths in the |original triangle| and the new |smaller_triangle|.',
      ],
      modifiers: {
        smaller_triangle: highlight(colors.highlight),
      },
      show: [
        fig._tri, fig._rightAngle, fig._split, fig._splitRightAngle,
        fig._splitTri,
      ],
      hide: [fig._tri._side01, fig._tri._side12],
    });

    common = {
      setContent: [
        'To do this, we will |divide| the triangle into three triangles, then look at the areas.',
      ],
    };

    this.addSection(centerFig, common, {
      modifiers: {
        divide: this.bindNext(colors.sides),
      },
      show: [
        fig._tri, fig._rightAngle, fig._split, fig._splitRightAngle,
        fig._splitTri,
      ],
      hide: [fig._tri._side01, fig._tri._side12],
    });

    this.addSection(centerFig, common, {
      modifiers: {
        divide: click(coll.pulseAreaLabels, [coll, null], colors.sides),
      },
      show: [
        fig._tri, fig._split, fig._area1, fig._area2, fig._area3,
        fig._construction,
      ],
      hide: [fig._tri._side01, fig._tri._side12, fig._tri._side20],
      transitionFromPrev: (done) => { coll.pulseAreaLabels(done); },
    });

    let content = {
      setContent: [
        'Now lets add back all the information we have about this split triangle, so we can |analyze| it.',
      ],
    };

    this.addSection(centerFig, content, {
      show: [
        fig._tri, fig._split, fig._area1, fig._area2, fig._area3,
        fig._construction,
      ],
      hide: [fig._tri._side01, fig._tri._side12, fig._tri._side20],
    });

    this.addSection(centerFig, content, {
      show: [
        fig._tri, fig._split, fig._area1, fig._area2, fig._area3,
        fig._construction,
        fig._rightAngle, fig._splitRightAngle,
      ],
      hide: [fig._tri._side01, fig._tri._side12, fig._tri._side20],
    });

    this.addSection(centerFig, content, {
      show: [
        fig._tri, fig._split, fig._area1, fig._area2, fig._area3,
        fig._construction, fig._splitTri,
        fig._rightAngle, fig._splitRightAngle,
      ],
      hide: [fig._tri._side01, fig._tri._side12, fig._tri._side20],
    });

    this.addSection(centerFig, content, {
      show: [fig],
      hide: [fig._tri._side01, fig._tri._side12],
    });

    common = {
      setEnterState: () => {
        coll.setScenarios('default');
        fig.setScenario('left');
      },
      show: [fig],
      hide: [fig._tri._side01, fig._tri._side12],
    };
    this.addSection(common, content, {
      transitionFromPrev: (done) => {
        fig.setScenario('center');
        fig.animations.new()
          .scenario({ target: 'left', duration: 1 })
          .whenFinished(done)
          .start();
      },
      setSteadyState: () => {
        fig.setScenario('left');
      },
    });

    content = {
      setContent: 'The area of the original triangle is equal to the sum of the three smaller triangles:',
    };
    this.addSection(common, content, {
      setSteadyState: () => { fig.setScenario('left'); },
    });
    this.addSectionEqnStory([{ nav: coll._0, form: '0' }], common, content);
    // this.addSectionEqnStory([
    //   { nav: coll._0, form: '0' },
    //   {
    //     nav: coll._1, form: '0', toForm: '1', moveFrom: coll._0Eqn,
    //   },
    // ], common, content);
    // this.addSectionEqnStory([
    //   { nav: coll._0, form: '0' },
    //   {
    //     nav: coll._1, form: '1', toForm: '1a',
    //   },
    // ], common, content);

    content = {
      setContent: 'The |areas| can be calculated from the base and heights of each triangle:',
      modifiers: {
        areas: this.qr('Math/Geometry_1/AreaTriangle/base/Main'),
      },
    };
    this.addSectionEqnStory([{ nav: coll._0, form: '0' }], common, content);
    this.addSectionEqnStory([
      { nav: coll._0, form: '0' },
      { nav: coll._1, form: '1a' },
    ], common, content);

    content = {
      setContent: 'This can be simplified down to a more simple expression:',
    };
    this.addSectionEqnStory([
      { nav: coll._0, form: '0' },
      { nav: coll._1, form: '1a' },
    ], common, content);
    this.addSectionEqnStory([
      { nav: coll._0, form: '0' },
      { nav: coll._1, form: '1a' },
      { nav: coll._2, form: '2m' },
    ], common, content);

    content = {
      setContent: 'We will call this ratio |r| and then determine |n| from the same procedure:',
      modifiers: {
        n: highlight(colors.highlight),
      },
    };
    this.addSectionEqnStory([
      { nav: coll._0, form: '0' },
      { nav: coll._1, form: '1a' },
      { nav: coll._2, form: '2m' },
    ], common, content);
    this.addSectionEqnStory([
      { nav: coll._0, form: '0' },
      { nav: coll._1, form: '1a' },
      { nav: coll._2, form: '2m' },
      { nav: coll._3, form: '3f' },
    ], common, content);

    content = {
      setContent: 'This means both |n_| and |b_| are the same proportion of their corresponding sides |N| and |B|.',
      modifiers: {
        N: highlight(colors.sides),
        n_: highlight(colors.highlight),
        B: highlight(colors.sides),
        b_: highlight(colors.highlight),
      },
    };
    this.addSectionEqnStory([
      { nav: coll._0, form: '0' },
      { nav: coll._1, form: '1a' },
      { nav: coll._2, form: '2m' },
      { nav: coll._3, form: '3f' },
    ], common, content);

    content = {
      setContent: 'We can then use this, and the Pythagorean theorem, to find the relationship with |m|.',
      modifiers: {
        m: highlight(colors.highlight),
      },
    };
    this.addSectionEqnStory([
      { nav: coll._0, form: '0' },
      { nav: coll._1, form: '1a' },
      { nav: coll._2, form: '2m' },
      { nav: coll._3, form: '3f' },
    ], common, content);

    this.addSection(common, content, {
      transitionFromPrev: (done) => {
        coll._4Eqn.showForm('4');
        coll._4Eqn.setPositionToElement(coll._3Eqn);
        const target = coll._0Eqn.getPosition();
        coll._4Eqn.animations.new()
          .position({ target, duration: 2 })
          .whenFinished(done)
          .start();
      },
      setSteadyState: () => {
        coll._4.showForm('4');
        coll._4.setPositionToElement(coll._0);
        coll._4Eqn.setPositionToElement(coll._0Eqn);
      },
    });

    content = {
      setContent: 'Using the |Pythagorean_theorem|, we know the relationship between |m|, |n| and |b|:',
      modifiers: {
        m: highlight(colors.highlight),
        n: highlight(colors.highlight),
        b: highlight(colors.highlight),
        Pythagorean_theorem: this.qr('Math/Geometry_1/RightAngleTriangles/base/PythagorusPres'),
      },
    };
    this.addSectionEqnStory([
      { nav: coll._4, form: '4' },
    ], common, content);
    this.addSectionEqnStory([
      { nav: coll._4, form: '4' },
      { nav: coll._5, form: '5' },
    ], common, content, {
      setEnterState: () => {
        coll.setScenarios('default');
        fig.setScenario('left');
      },
    });

    content = {
      setContent: 'Substitute in our |initial_knowledge| and rearrange for |r|:',
      modifiers: {
        initial_knowledge: click(coll.pulseEqn4, [coll], colors.highlight),
      },
    };
    this.addSectionEqnStory([
      { nav: coll._4, form: '4' },
      { nav: coll._5, form: '5' },
    ], common, content);
    this.addSectionEqnStory([
      { nav: coll._4, form: '4' },
      { nav: coll._5, form: '5' },
      { nav: coll._6, form: '6c' },
    ], common, content);

    content = {
      setContent: 'We can substitute in the |Pythagorean| equivalent of |M| and then simplify:',
      modifiers: {
        Pythagorean_theorem: this.qr('Math/Geometry_1/RightAngleTriangles/base/PythagorusPres'),
      },
    };

    this.addSectionEqnStory([
      { nav: coll._4, form: '4' },
      { nav: coll._5, form: '5' },
      { nav: coll._6, form: '6c' },
      { nav: coll._7, form: '7c' },
    ], common, content);

    content = {
      setContent: style({ top: 0 }, 'And so we have the |relationships| between each side of the split triangle and the corresponding side of the original triangle.'),
    };

    this.addSectionEqnStory([
      { nav: coll._4, form: '4' },
      { nav: coll._5, form: '5' },
      { nav: coll._6, form: '6c' },
      { nav: coll._7, form: '7c' },
    ], common, content);

    common = {
      setEnterState: () => {
        coll.setScenarios('default');
        fig.setScenario('left');
      },
      show: [fig],
      hide: [
        fig._tri._side01, fig._tri._side12, fig._split,
        fig._area1, fig._area2, fig._area3,
        fig._construction,
        fig._rightAngle, fig._splitRightAngle,
      ],
    };

    // this.addSectionEqnStory([
    //   { eqn: coll._4Eqn, form: '4' },
    //   { eqn: coll._7Eqn, form: '7c' },
    // ], common, content);

    this.addSection(common, content, {
      transitionFromPrev: (done) => {
        coll._4Eqn.showForm('4');
        coll._7Eqn.showForm('7c');
        coll._7Eqn.animations.new()
          .scenario({ target: 'midRight', duration: 2 })
          .whenFinished(done)
          .start();
        coll._4Eqn.animations.new()
          .scenario({ target: 'midLeft', duration: 2 })
          .start();
      },
      setSteadyState: () => {
        coll._4Eqn.showForm('4Comma');
        coll._4Eqn.setScenario('midLeft');
        // coll._4Eqn.setPositionToElement(coll._0);
        // const target = coll._4Eqn.getPosition().add(0, -0.5);
        coll._7Eqn.showForm('7c');
        coll._7Eqn.setScenario('midRight');
        // coll._7Eqn.setPosition(0, 0);
      },
    });

    content = {
      setContent: style({ top: 0 }, 'Each side of the smaller triangle has been reduced by the |same amount| (r) from the corresponding side on the original triangle.'),
    };

    this.addSection(common, content, {
      setSteadyState: () => {
        coll._4Eqn.showForm('4Comma');
        coll._4Eqn.setScenario('midLeft');
        coll._7Eqn.showForm('7c');
        coll._7Eqn.setScenario('midRight');
      },
    });

    this.addSection({
      setContent: centerV([
        'If a right angle triangle is |split with a line parallel to one of its perpendicular sides|, then the new split triangle\'s sides are all in |equal proportion| to their corresponding sides of the original triangle.',
      ]),
    });

    this.addSection({
      title: 'Any Triangle',
      setContent: centerV([
        'We now can apply this learning to |any triangle| as |any triangle| can be split into a sum or difference of |right angle triangles|.',
      ]),
    });

    content = {
      setContent: 'Consider an arbitrary triangle, and then |split| it with a line parallel to its base.',
    };
    this.addSection(content, {
      modifiers: { split: this.bindNext(colors.sides) },
      show: [fig2._tri],
    });

    this.addSection(content, {
      modifiers: {
        split: click(coll.growFig2Split, [coll, null], colors.sides),
      },
      show: [fig2._tri, fig2._hSplit],
      transitionFromPrev: (done) => {
        coll.growFig2Split(done);
      },
    });

    content = {
      setContent: 'We want to find the relationship between the side lengths of the |original_triangle|, and the |split_triangle|.',
    };

    this.addSection(content, {
      modifiers: {
        original_triangle: highlight(colors.sides),
        split_triangle: highlight(colors.highlight),
      },
      show: [fig2._tri, fig2._hSplit],
    });

    this.addSection({
      setContent: 'We want to find the relationship between the side lengths of the |original_triangle|, and the |split_triangle|.',
      modifiers: {
        // original_triangle: click(coll.toggleOriginalTriangle, [coll], colors.sides),
        original_triangle: coll.bindAccent(fig2._tri),
        split_triangle: coll.bindAccent(fig2._topTri),
        // split_triangle: click(coll.toggleSplitTriangle, [coll], colors.highlight),
      },
      show: [
        fig2._tri, fig2._hSplit,
        fig2._topTri,
        fig2._labelM, fig2._labelB, fig2._labelN,
      ],
    });

    content = {
      setContent: 'The triangles can be vertically |split| into two right angle triangles.',
    };
    this.addSection(content, {
      modifiers: { split: this.bindNext(colors.sides) },
      show: [
        fig2._tri, fig2._hSplit,
        fig2._topTri,
        fig2._labelM, fig2._labelB, fig2._labelN,
      ],
    });

    this.addSection(content, {
      modifiers: {
        split: click(coll.growFig2VSplit, [coll, null], colors.sides),
      },
      transitionFromPrev: (done) => {
        coll.growFig2VSplit(done);
      },
      show: [
        fig2._tri, fig2._hSplit, fig2._vSplit,
        fig2._topTri,
        fig2._labelM, fig2._labelB, fig2._labelN,
        fig2._rightAngle, fig2._splitRightAngle,
      ],
    });

    content = {
      setContent: 'The |base| is then the sum of the two bases |B1| and |B2|.',
    };

    this.addSection(content, {
      modifiers: {
        B1: this.bindNext(colors.sides),
        B2: this.bindNext(colors.sides),
        base: click(coll.pulseB, [coll, null], colors.sides),
      },
      show: [
        fig2._tri, fig2._hSplit, fig2._vSplit,
        fig2._topTri,
        fig2._labelM, fig2._labelB, fig2._labelN,
        fig2._rightAngle, fig2._splitRightAngle,
      ],
    });

    this.addSection(content, {
      modifiers: {
        base: click(coll.pulseB, [coll, null], colors.sides),
        B1: click(coll.pulseB1, [coll, null], colors.sides),
        B2: click(coll.pulseB2, [coll, null], colors.sides),
      },
      transitionFromPrev: (done) => {
        coll.pulseB1(done);
        coll.pulseB2(null);
      },
      show: [
        fig2._tri, fig2._hSplit, fig2._vSplit,
        fig2._topTri,
        fig2._labelM, fig2._labelB, fig2._labelN,
        fig2._rightAngle, fig2._splitRightAngle,
        fig2._B1, fig2._B2,
      ],
    });

    // content = {
    //   setContent: 'The |base| is then the sum of the two bases |B1| and |B2|.',
    // };

    // this.addSection(content, {
    //   modifiers: {
    //     B1: this.bindNext(colors.sides),
    //     B2: this.bindNext(colors.sides),
    //     base: click(coll.pulseB, [coll, null], colors.sides),
    //   },
    //   show: [
    //     fig2._tri, fig2._hSplit, fig2._vSplit,
    //     fig2._topTri,
    //     fig2._labelM, fig2._labelB, fig2._labelN,
    //     fig2._rightAngle, fig2._splitRightAngle,
    //   ],
    // });

    // this.addSection(content, {
    //   modifiers: {
    //     base: click(coll.pulseB, [coll, null], colors.sides),
    //     B1: click(coll.pulseB1, [coll, null], colors.sides),
    //     B2: click(coll.pulseB2, [coll, null], colors.sides),
    //   },
    //   transitionFromPrev: (done) => {
    //     coll.pulseB1(done);
    //     coll.pulseB2(null);
    //   },
    //   show: [
    //     fig2._tri, fig2._hSplit, fig2._vSplit,
    //     fig2._topTri,
    //     fig2._labelM, fig2._labelB, fig2._labelN,
    //     fig2._rightAngle, fig2._splitRightAngle,
    //     fig2._B1, fig2._B2,
    //   ],
    // });

    content = {
      setContent: 'Now consider just the left triangles with total height |H|.',
    };

    this.addSection(content, {
      show: [
        fig2._tri, fig2._hSplit, fig2._vSplit,
        fig2._topTri,
        fig2._labelM, fig2._labelB, fig2._labelN,
        fig2._rightAngle, fig2._splitRightAngle,
        fig2._B1, fig2._B2,
      ],
    });

    this.addSection(content, {
      show: [
        fig2._greyTri, fig2._labelM, fig2._greyHSplit, fig2._B1,
        fig2._leftTri, fig2._topLeftTri._line, fig2._labelH,
      ],
    });

    content = {
      setContent: 'We know from earlier that the top triangle\'s |sides| will all be reduced by the |same ratio|.',
    };

    this.addSection(content, {
      modifiers: { sides: this.bindNext(colors.highlight) },
      show: [
        fig2._greyTri, fig2._labelM, fig2._greyHSplit, fig2._B1,
        fig2._leftTri, fig2._topLeftTri._line, fig2._labelH,
      ],
    });

    this.addSection(content, {
      modifiers: {
        sides: click(coll.pulseTopLeft, [coll, null], colors.highlight),
      },
      transitionFromPrev: (done) => {
        coll.pulseTopLeft(done);
      },
      show: [
        fig2._greyTri, fig2._labelM, fig2._greyHSplit, fig2._B1,
        fig2._leftTri, fig2._topLeftTri, fig2._labelH,
        fig2._rH,
      ],
    });

    content = {
      setContent: 'Similarly, for the right triangles, the |sides| will be reduced by the same ratio.',
    };

    this.addSection(content, {
      modifiers: { sides: this.bindNext(colors.highlight) },
      show: [
        fig2._greyTri, fig2._labelM, fig2._greyHSplit, fig2._B1,
        fig2._leftTri, fig2._topLeftTri, fig2._labelH,
        fig2._rH,
      ],
    });

    this.addSection(content, {
      modifiers: {
        sides: click(coll.pulseTopRight, [coll, null], colors.highlight),
      },
      transitionFromPrev: (done) => {
        coll.pulseTopRight(done);
      },
      show: [
        fig2._greyTri, fig2._labelN, fig2._greyHSplit, fig2._B2,
        fig2._rightTri, fig2._topRightTri, fig2._labelH,
        fig2._rH,
      ],
    });

    content = {
      setContent: 'Let\'s now consider the original triangles.',
    };

    this.addSection(content, {
      show: [
        fig2._greyTri, fig2._labelN, fig2._greyHSplit, fig2._B2,
        fig2._rightTri, fig2._topRightTri, fig2._labelH,
        fig2._rH,
      ],
    });

    this.addSection(content, {
      show: [
        fig2._tri, fig2._labelN, fig2._labelM, fig2._labelB,
        fig2._B1, fig2._B2,
        fig2._topTri._line,
        fig2._vSplit,
        fig2._topRightTri._side12, fig2._topLeftTri._side01,
        fig2._topRightTri._side20, fig2._topLeftTri._side20,
      ],
    });

    content = {
      setContent: 'Note that:',
    };

    this.addSection(content, {
      show: [
        fig2._tri, fig2._labelN, fig2._labelM, fig2._labelB,
        fig2._B1, fig2._B2,
        fig2._topTri._line,
        fig2._vSplit,
        fig2._topRightTri._side12, fig2._topLeftTri._side01,
        fig2._topRightTri._side20, fig2._topLeftTri._side20,
      ],
      setSteadyState: () => {
        coll._fig2Eqn.showForm('1');
        coll._fig2Eqn.setScenario('top');
      },
    });

    content = {
      setContent: 'And so we have:',
    };

    this.addSection(content, {
      show: [
        fig2._tri, fig2._labelN, fig2._labelM, fig2._labelB,
        fig2._topTri,
      ],
      setSteadyState: () => {
        coll._fig2Eqn.showForm('2');
        coll._fig2Eqn.setScenario('topLeft');
      },
    });

    this.addSection({
      setContent: centerV([
        'So we have seen if |any| triangle is |split with a line parallel to one of its  sides|, then the new split triangle\'s sides are all in |equal proportion| to their corresponding sides of the original triangle.',
      ]),
    });

    // ********************************************************************
    // ********************************************************************
    // ********************************************************************
    // ********************************************************************
    // ********************************************************************
    // ********************************************************************
    this.addSection({
      title: 'Lines between Parallel Lines',
      setContent: centerV([
        'The right angle triangle can also be extended to the case of |split lines between parallel lines|.',
      ]),
    });

    content = {
      setContent: 'Start with two |parallel_lines| and then |draw_lines| between them.',
    };

    this.addSection(content, {
      modifiers: {
        parallel_lines: click(coll.pulseParallel, [coll], colors.sides),
        draw_lines: this.bindNext(colors.sides),
      },
      show: [
        fig3._topLine, fig3._bottomLine, fig3._topArrow, fig3._bottomArrow,
      ],
    });

    this.addSection(content, {
      modifiers: {
        parallel_lines: click(coll.pulseParallel, [coll], colors.sides),
        draw_lines: click(coll.drawLines, [coll, null], colors.sides),
      },
      show: [
        fig3._topLine, fig3._bottomLine, fig3._topArrow, fig3._bottomArrow,
        fig3._line1, fig3._line2, fig3._line3,
      ],
      transitionFromPrev: (done) => {
        coll.drawLines(done);
      },
    });

    content = {
      setContent: 'Now, a |third_parallel_line| splits all the lines.',
    };
    this.addSection(content, {
      modifiers: {
        third_parallel_line: this.bindNext(colors.sides),
      },
      show: [
        fig3._topLine, fig3._bottomLine, fig3._topArrow, fig3._bottomArrow,
        fig3._line1, fig3._line2, fig3._line3,
      ],
    });
    this.addSection(content, {
      modifiers: {
        third_parallel_line: click(coll.drawParallelSplit, [coll, null], colors.sides),
      },
      show: [
        fig3._topLine, fig3._bottomLine, fig3._topArrow, fig3._bottomArrow,
        fig3._line1, fig3._line2, fig3._line3, fig3._split,
      ],
      transitionFromPrev: (done) => {
        coll.drawParallelSplit(done);
      },
    });

    content = {
      setContent: 'Are all the lines, split in the |same proportion|?',
    };

    this.addSection(content, {
      show: [
        fig3._topLine, fig3._bottomLine, fig3._topArrow, fig3._bottomArrow,
        fig3._line1, fig3._line2, fig3._line3, fig3._split,
      ],
    });

    content = {
      setContent: 'Each of these lines can be the |hypotenuse| of a |right_angle_triangle|.',
    };

    this.addSection(content, {
      modifiers: {
        right_angle_triangle: this.bindNext(colors.highlight),
      },
      show: [
        fig3._topLine, fig3._bottomLine, fig3._topArrow, fig3._bottomArrow,
        fig3._line1, fig3._line2, fig3._line3, fig3._split,
      ],
    });
    this.addSection(content, {
      modifiers: {
        right_angle_triangle: click(
          coll.pulseParallelTris,
          [coll, null],
          colors.highlight,
        ),
      },
      show: [
        fig3._topLine, fig3._bottomLine, fig3._topArrow, fig3._bottomArrow,
        fig3._line1, fig3._line2, fig3._line3, fig3._split,
        fig3._tri1, fig3._tri2, fig3._tri3,
        fig3._right1, fig3._right2, fig3._right3,
      ],
      transitionFromPrev: (done) => {
        coll.pulseParallelTris(done);
      },
    });

    content = {
      setContent: 'The |parallel_line_distance| is the |height| of the triangles.',
    };
    this.addSection(content, {
      modifiers: {
        parallel_line_distance: this.qr('Math/Geometry_1/ParallelLineDistance/base/Main'),
        height: click(coll.pulseHeights, [coll], colors.highlight),
      },
      show: [
        fig3._topLine, fig3._bottomLine, fig3._topArrow, fig3._bottomArrow,
        fig3._line1, fig3._line2, fig3._line3, fig3._split,
        fig3._tri1, fig3._tri2, fig3._tri3,
        fig3._right1, fig3._right2, fig3._right3,
        fig3._height1, fig3._height2, fig3._height3,
      ],
    });

    content = {
      setContent: style({ top: 0 }, 'As all the |heights| are split in the same proportion, then all the right angle triangles are also split in the |same propotion|.'),
      modifiers: {
        heights: click(coll.pulseHeights, [coll], colors.highlight),
      },
    };
    this.addSection(content, {
      show: [
        fig3._topLine, fig3._bottomLine, fig3._topArrow, fig3._bottomArrow,
        fig3._line1, fig3._line2, fig3._line3, fig3._split,
        fig3._tri1, fig3._tri2, fig3._tri3,
        fig3._right1, fig3._right2, fig3._right3,
        fig3._height1, fig3._height2, fig3._height3,
      ],
    });

    this.addSection({
      setContent: centerV([
        'So, |all lines between parallel lines will be split with the same proportion| if a third parallel line is introduced between the initial parallel lines.',
      ]),
    });

    // ********************************************************************
    // ********************************************************************
    // ********************************************************************
    // ********************************************************************
    // ********************************************************************
    // ********************************************************************
    this.addSection({
      title: 'Two Sides Split in Proportion',
      setContent: centerV([
        'We know if a triangle is split by a parallel line, it will form a split triangle whose sides all have the |same proportion|, or ratio, to the original triangle’s sides.',
        '|Is the converse true?| If we draw a line between two sides of a triangle split in the same ratio, is that line parallel?',
      ]),
    });

    let commonContent = {
      setContent: [
        'To see, let\'s take a triangle and |split| two of it’s sides in the |same_ratio|.',
      ],
    };
    this.addSection(commonContent, {
      modifiers: {
        split: this.bindNext(colors.sides),
        same_ratio: this.bindNext(colors.sides),
      },
      show: [fig4._tri, fig4._A, fig4._B, fig4._C],
      setSteadyState: () => {
        fig4.setScenarios('default');
      },
    });

    let fig4Base = [
      fig4._tri, fig4._A, fig4._B, fig4._C,
      fig4._pointD, fig4._pointE,
      fig4._AB, fig4._AD, fig4._AC, fig4._AE, fig4._BC, fig4._AF,
    ];
    this.addSection(commonContent, {
      modifiers: {
        split: click(coll.pulseE, [coll, ['pointE', 'pointD'], null, 2], colors.sides),
        same_ratio: click(coll.pulseE, [coll, ['eqn1.eqn'], null], colors.sides),
      },
      transitionFromPrev: (done) => {
        coll.pulseE(['pointE', 'pointD'], done, 2);
      },
      show: [...fig4Base],
      setSteadyState: () => {
        fig4._E.show();
        fig4._D.show();
        fig4._eqn1.showForm('0');
        fig4.setScenarios('default');
      },
    });

    // ********************************************************************
    // ********************************************************************
    common = {
      setSteadyState: () => {
        fig4._eqn1.showForm('0');
        fig4.setScenarios('default');
      },
    };
    commonContent = {
      setContent: [
        'Now, let\'s assume the line |DE| is not parallel with |BC|.',
      ],
    };
    this.addSection(common, commonContent, {
      modifiers: {
        DE: this.bindNext(colors.sides),
        BC: click(coll.pulseE, [coll, ['BC'], null], colors.sides),
      },
      show: [
        ...fig4Base,
        fig4._D, fig4._E, fig4._pointD, fig4._pointE,
      ],
    });

    this.addSection(common, commonContent, {
      modifiers: {
        DE: click(coll.pulseE, [coll, ['DE'], null], colors.sides),
        BC: click(coll.pulseE, [coll, ['BC'], null], colors.sides),
      },
      show: [
        ...fig4Base,
        fig4._D, fig4._E, fig4._pointD, fig4._pointE,
        fig4._DE,
      ],
      transitionFromPrev: (done) => {
        fig4._eqn1.showForm('0');
        // fig4._eqn1.setScenario('topLeft');
        fig4.setScenarios('default');
        coll.pulseE(['DE'], done, 4);
      },
    });

    // ********************************************************************
    // ********************************************************************
    commonContent = {
      setContent: [
        'So we can draw a line from D that is |parallel| with |BC|.',
      ],
    };
    this.addSection(common, commonContent, {
      modifiers: {
        parallel: this.bindNext(colors.sides),
        BC: click(coll.pulseE, [coll, ['BC'], null], colors.sides),
      },
      show: [
        ...fig4Base,
        fig4._D, fig4._E, fig4._pointD, fig4._pointE,
        fig4._DE,
      ],
    });

    this.addSection(common, commonContent, {
      modifiers: {
        parallel: click(coll.pulseE, [coll, ['DF'], null], colors.sides),
        BC: click(coll.pulseE, [coll, ['BC'], null], colors.sides),
      },
      show: [
        ...fig4Base,
        fig4._D, fig4._E, fig4._pointD, fig4._pointE,
        fig4._DE, fig4._DF, fig4._pointF,
      ],
      transitionFromPrev: (done) => {
        fig4._eqn1.showForm('0');
        // fig4._eqn1.setScenario('topLeft');
        fig4.setScenarios('default');
        coll.pulseE(['pointF'], null, 2);
        fig4._DF.grow(0.1, 1, true, done);
      },
      setSteadyState: () => {
        fig4._F.showAll();
        fig4._eqn1.showForm('0');
        // fig4._eqn1.setScenario('topLeft');
        fig4.setScenarios('default');
      },
    });

    // ********************************************************************
    // ********************************************************************
    fig4Base = [
      fig4._tri, fig4._A, fig4._B, fig4._C,
      fig4._pointD, fig4._pointE,
      fig4._AB, fig4._AD, fig4._AC, fig4._AE, fig4._BC, fig4._AF,
      fig4._D, fig4._E, fig4._pointD, fig4._pointE,
      fig4._DE, fig4._DF, fig4._pointF,
      fig4._F,
    ];
    commonContent = {
      setContent: [
        'As |DF| is parallel to |BC| it must split the triangle in |equal_proportion|.',
      ],
    };

    this.addSection(common, commonContent, {
      modifiers: {
        equal_proportion: this.bindNext(colors.sides),
        DF: click(coll.pulseE, [coll, ['DF'], null], colors.sides),
        BC: click(coll.pulseE, [coll, ['BC'], null], colors.sides),
      },
      show: [
        ...fig4Base,
      ],
    });

    common = {
      setSteadyState: () => {
        fig4._eqn1.showForm('0');
        fig4._eqn2.showForm('1');
        fig4.setScenarios('default');
      },
    };
    this.addSection(common, commonContent, {
      modifiers: {
        equal_proportion: click(coll.pulseE, [coll, ['eqn2.eqn'], null], colors.sides),
        DF: click(coll.pulseE, [coll, ['DF'], null], colors.sides),
        BC: click(coll.pulseE, [coll, ['BC'], null], colors.sides),
      },
      show: [...fig4Base],
      transitionFromPrev: (done) => {
        fig4.setScenarios('default');
        fig4._eqn1.showForm('0');
        fig4._eqn2.showForm('1');
        coll.pulseE(['eqn2.eqn'], done, 1.3);
      },
    });

    // ********************************************************************
    // ********************************************************************
    commonContent = {
      setContent: [
        'The two equations have an equal |left_side|. Therefore the |right_sides| are |equal| to each other.',
      ],
    };
    common = {
      show: [...fig4Base],
      setSteadyState: () => {
        fig4._eqn1.showForm('0');
        fig4._eqn2.showForm('1');
        fig4.setScenarios('default');
      },
    };
    this.addSection(common, commonContent, {
      modifiers: {
        left_side: click(coll.pulseE, [coll, [
          'eqn1.eqn._AD', 'eqn1.eqn._AB', // 'eqn1._v1',
          'eqn2.eqn._AD', 'eqn2.eqn._AB', // 'eqn2._v1',
        ], null], colors.sides),
        right_sides: click(coll.pulseE, [coll, [
          'eqn1.eqn._AE', 'eqn1.eqn._AC', // 'eqn1._v1',
          'eqn2.eqn._AF', 'eqn2.eqn._AC', // 'eqn2._v1',
        ], null], colors.sides),
        equal: this.bindNext(colors.sides),
      },
    });

    this.addSection(common, commonContent, {
      modifiers: {
        left_side: click(coll.pulseE, [coll, [
          'eqn1.eqn._AD', 'eqn1.eqn._AB', // 'eqn1._v1',
          'eqn2.eqn._AD', 'eqn2.eqn._AB', // 'eqn2._v1',
        ], null], colors.sides),
        right_sides: click(coll.pulseE, [coll, [
          'eqn1.eqn._AE', 'eqn1.eqn._AC', // 'eqn1._v1',
          'eqn2.eqn._AF', 'eqn2.eqn._AC', // 'eqn2._v1',
        ], null], colors.sides),
        equal: click(coll.pulseE, [coll, ['eqn3.eqn'], null], colors.sides),
      },
      transitionFromPrev: (done) => {
        fig4._eqn1.showForm('0');
        fig4._eqn2.showForm('1');
        fig4._eqn3.showForm('2');
        coll.pulseE('eqn3.eqn', done);
      },
      setSteadyState: () => {
        fig4._eqn1.showForm('0');
        fig4._eqn2.showForm('1');
        fig4._eqn3.showForm('2');
        fig4.setScenarios('default');
      },
    });

    // ********************************************************************
    // ********************************************************************
    common = {
      show: [...fig4Base],
      setSteadyState: () => {
        fig4._eqn1.showForm('0');
        fig4._eqn2.showForm('1');
        fig4._eqn3.showForm('2');
        fig4.setScenarios('default');
      },
    };
    commonContent = {
      setContent: [
        '|AC| is a common term, so it cancels and we are left with |AE| and |AF| as |equal|.',
      ],
    };
    this.addSection(common, commonContent, {
      modifiers: {
        AC: click(coll.pulseE, [coll, [
          'eqn3.eqn._AC', 'eqn3.eqn._AC1', // 'eqn1._v1',
        ], null], colors.sides),
        AF: click(coll.pulseE, [coll, ['AF'], null], colors.sides),
        AE: click(coll.pulseE, [coll, ['AE'], null], colors.sides),
        equal: this.bindNext(colors.sides),
      },
      setSteadyState: () => {
        fig4._eqn1.showForm('0');
        fig4._eqn2.showForm('1');
        fig4._eqn3.showForm('2');
        fig4.setScenarios('default');
      },
    });

    this.addSection(common, commonContent, {
      modifiers: {
        AC: click(coll.pulseE, [coll, [
          'eqn3.eqn._AC', 'eqn3.eqn._AC1', // 'eqn1._v1',
        ], null], colors.sides),
        AF: click(coll.pulseE, [coll, ['AF'], null], colors.sides),
        AE: click(coll.pulseE, [coll, ['AE'], null], colors.sides),
        equal: click(coll.pulseE, [coll, ['eqn4.eqn'], null], colors.sides),
      },
      transitionFromPrev: (done) => {
        fig4.setScenarios('default');
        fig4._eqn1.showForm('0');
        fig4._eqn2.showForm('1');
        fig4._eqn3.showForm('2');
        fig4._eqn4.showForm('3');
        coll.pulseE('eqn4.eqn', done);
      },
      setSteadyState: () => {
        fig4._eqn1.showForm('0');
        fig4._eqn2.showForm('1');
        fig4._eqn3.showForm('2');
        fig4._eqn4.showForm('3');
        fig4.setScenarios('default');
      },
    });

    // ********************************************************************
    // ********************************************************************
    common = {
      show: [...fig4Base],
      setSteadyState: () => {
        fig4._eqn1.showForm('0');
        fig4._eqn2.showForm('1');
        fig4._eqn3.showForm('2');
        fig4._eqn4.showForm('3');
        fig4.setScenarios('default');
      },
    };
    this.addSection(common, {
      setContent: [
        'If |AE| equals |AF|, then points |E| and |F| must be the |same point|, and so |DE| is |parallel| to |BC|.',
      ],
      modifiers: {
        AF: click(coll.pulseE, [coll, ['AF'], null], colors.sides),
        F: click(coll.pulseE, [coll, ['F'], null], colors.sides),
        E: click(coll.pulseE, [coll, ['E'], null], colors.sides),
        DE: click(coll.pulseE, [coll, ['DE'], null], colors.sides),
        AE: click(coll.pulseE, [coll, ['AE'], null], colors.sides),
        BC: click(coll.pulseE, [coll, ['BC'], null], colors.sides),
      },
    });

    this.addSection({
      setContent: style({ centerV: true }, [
        'Therefore, the line between two sides of a triangle split by the same proportion or ratio will be |parallel| to the third unsplit side.',
      ]),
    });
  }
}

export default Content;
