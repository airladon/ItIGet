// @flow
import Fig from 'figureone';
import {
  PresentationFormatContent,
  // interactiveItem,
} from '../../../../../../js/TopicFormat/PresentationFormatContent';
// import Definition from '../../../../../common/tools/definition';
import diagramLayout from './layout';
// import imgLink from '../../tile.png';
// import imgLinkGrey from '../../tile.svg';
import details from '../../details';
import CommonCollection from './diagramCollectionCommon';
import CommonTopicDiagram from '../../../../../common/CommonTopicDiagram';

const {
  click,
  centerV,
  withClass,
  highlight,
} = Fig.tools.html;

const layout = diagramLayout();
const { colors } = layout;

class Content extends PresentationFormatContent {
  setTitle() {
    this.title = details.title;
    // this.iconLink = imgLink;
    // this.iconLinkGrey = imgLinkGrey;
  }

  setDiagram(htmlId: string = '') {
    this.diagram = new CommonTopicDiagram({ htmlId }, layout);
    this.diagram.elements = new CommonCollection(this.diagram, layout);
    // this.loadQRs([
    //   'qr_names_here',
    // ]);
  }

  addSections() {
    const diag = this.diagram.elements;
    const shapes = diag._shapes;
    const angle = diag._angle;
    const example = diag._example;
    const equalAnglesExample = diag._equalAnglesExample;

    this.addSection({
      title: 'Corners',
      setContent: [
        'Many |shapes| have |corners|.',
        'Some corners are |more_sharp|, while others are |less_sharp|.',
        withClass(['The |sharpness| of a corner is a property that can describe a shape.'], 'content_angles_bottom'),
      ],
      modifiers: {
        shapes: click(diag.pulseShapeElement, [diag, 'lines'], colors.lines),
        corners: click(diag.pulseShapeElement, [diag, 'corners'], colors.lines),
        more_sharp: click(diag.pulseShapeElement, [diag, 'moreSharp'], colors.moreSharp),
        less_sharp: click(diag.pulseShapeElement, [diag, 'lessSharp'], colors.lessSharp),
      },
      show: [shapes._shape1._line, shapes._shape2._line, shapes._shape3._line],
    });

    this.addSection({
      setContent: centerV([
        'Instead of calling a corner more or less |sharp|, it is useful to |define| it better and ultimately be able to |measure| it.',
      ]),
    });

    this.addSection({
      setContent: [
        'To |create| a corner, start with two |lines|.',
      ],
      modifiers: {
        lines: click(diag.pulseLines, [diag], colors.lines),
      },
      setEnterState: () => {
        angle._line1.setScenario('offScreen');
        angle._line2.setScenario('offScreen');
        angle._line1.isTouchable = false;
      },
      transitionFromPrev: (done) => {
        angle._line1.animations.new()
          .scenario({ target: 'vertical', duration: 1 })
          .whenFinished(done)
          .start();
        angle._line2.animations.new()
          .scenario({ target: 'vertical', duration: 1 })
          .start();
      },
      setSteadyState: () => {
        angle._line1.setScenario('vertical');
        angle._line2.setScenario('vertical');
      },
      show: [angle._line1, angle._line2],
    });

    this.addSection({
      setContent: [
        'Place them on top of each other, and |anchor| one end.',
      ],
      modifiers: {
        // lines: click(diag.pulseLines, [diag], colors.lines),
        anchor: click(diag.pulseAnchor, [diag, null], colors.center),
      },
      setEnterState: () => {
        angle._line1.setScenario('vertical');
        angle._line2.setScenario('vertical');
        angle._line1.isTouchable = false;
      },
      transitionFromPrev: (done) => {
        angle._line1.animations.new()
          .scenario({ target: 'start', duration: 1 })
          .whenFinished(done)
          .start();
        angle._line2.animations.new()
          .scenario({ target: 'start', duration: 1 })
          .start();
        diag.pulseAnchor();
      },
      setSteadyState: () => {
        angle._line1.setScenario('start');
        angle._line2.setScenario('start');
        angle._anchor.show();
      },
      show: [angle._line1, angle._line2],
    });

    this.addSection({
      setContent: [
        'Rotate one line by |pushing| the free end, and a |corner| is formed.',
      ],
      modifiers: {
        lines: click(diag.pulseLines, [diag], colors.lines),
        pushing: click(diag.push, [diag], colors.arrow),
      },
      setEnterState: () => {
        angle._line1.setScenario('start');
        angle._line2.setScenario('start');
        angle._arrow.setColor(colors.arrow);
        angle._line1.isTouchable = true;
      },
      setSteadyState: () => {
        diag.updateAngle();
        diag.pulseArrow();
      },
      setLeaveState: () => {
        angle._arrow.setColor(colors.arrow);
      },
      show: [angle._line1, angle._line2, angle._anchor, angle._arrow],
    });

    this.addSection({
      setContent: [
        '|Small_rotation| creates a |sharper corner|.',
        '|Larger_rotation| creates a |less sharp corner|.',
      ],
      modifiers: {
        Small_rotation: click(diag.rotateLine, [diag, 'small'], colors.lessSharp),
        Larger_rotation: click(diag.rotateLine, [diag, 'large'], colors.moreSharp),
      },
      setEnterState: () => {
        const r = angle._line1.getRotation();
        angle._line1.setScenario('start');
        angle._line2.setScenario('start');
        angle._line1.setRotation(r);
        angle._line1.isTouchable = true;
      },
      transitionFromPrev: (done) => {
        angle._line1.animations.new()
          .rotation({ target: 1, duration: 1 })
          .whenFinished(done)
          .start();
      },
      transitionFromNext: (done) => {
        angle._line1.animations.new()
          .rotation({ target: 1, duration: 1 })
          .whenFinished(done)
          .start();
      },
      setSteadyState: () => {
        angle._line1.setRotation(1);
      },
      show: [angle._line1, angle._line2, angle._anchor],
    });

    const common = {
      setEnterState: () => {
        const r = angle._line1.getRotation();
        angle._line1.setScenario('start');
        angle._line2.setScenario('start');
        angle._line1.setRotation(r);
        angle._line1.isTouchable = true;
      },
      transitionFromPrev: (done) => {
        angle._line1.animations.new()
          .rotation({ target: 1, duration: 1 })
          .whenFinished(done)
          .start();
      },
      transitionFromNext: (done) => {
        angle._line1.animations.new()
          .rotation({ target: 1, duration: 1 })
          .whenFinished(done)
          .start();
      },
      setSteadyState: () => {
        angle._line1.setRotation(1);
      },
      show: [angle._line1, angle._line2, angle._fill],
    };

    this.addSection(common, {
      setContent: [
        'So the |amount| of |rotation| determines the sharpness of the corner.',
      ],
      modifiers: {
        amount: click(diag.pulseFill, [diag], colors.angles),
        rotation: click(diag.rotateLine, [diag, ''], colors.moreSharp),
      },
    });

    this.addSection({
      title: 'Angle',
      setContent: centerV([
        'What |name| do we use for corner sharpness?',
        'The |Latin| word for |corner| is |angulus|.',
        'Our word for |corner sharpness| comes from this Latin root, and is |angle|.',
      ]),
      modifiers: {
        Latin: highlight('topic__latin'),
        angulus: highlight('topic__latin'),
      },
    });

    this.addSection(common, {
      setContent: [
        'So, a |larger| |angle| is a less sharp corner, and a |smaller| |_angle| is a more sharp corner.',
      ],
      modifiers: {
        smaller: click(diag.rotateLine, [diag, 'small'], colors.lessSharp),
        larger: click(diag.rotateLine, [diag, 'large'], colors.moreSharp),
        angle: click(diag.pulseFill, [diag], colors.angles),
        _angle: click(diag.pulseFill, [diag], colors.angles),
      },
    });

    this.addSection({
      title: 'Markings',
      setContent: [
        'Angles are often |marked| in a shape with a |line| and |label|.',
      ],
      modifiers: {
        marked: click(diag.toggleAngle, [diag, null, true], colors.angles),
        line: click(diag.pulseAngleLine, [diag], colors.angles),
        label: click(diag.pulseAngleLabel, [diag], colors.angles),
      },
      show: [example],
      setSteadyState: () => {
        diag.toggleAngle(0, false);
      },
    });

    this.addSection({
      setContent: [
        'Angles are sometimes marked with |multiple_lines|. Angles with the same number of lines are equal.',
      ],
      modifiers: {
        multiple_lines: click(diag.pulseDoubleAngles, [diag], colors.angles),
      },
      show: [equalAnglesExample],
    });
  }
}

export default Content;
