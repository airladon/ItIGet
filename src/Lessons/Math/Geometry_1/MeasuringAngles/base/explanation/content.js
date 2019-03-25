// @flow
import Fig from 'figureone';
import {
  PresentationLessonContent,
  // interactiveItem,
} from '../../../../../../js/Lesson/PresentationLessonContent';
// import Definition from '../../../../../LessonsCommon/tools/definition';
import lessonLayout from '../common/layout';
import imgLink from '../../tile.png';
import imgLinkGrey from '../../tile-grey.png';
import details from '../../details';
import CommonCollection from '../common/diagramCollectionCommon';
import CommonLessonDiagram from '../../../../../LessonsCommon/CommonLessonDiagram';

const {
  click,
  centerVH, centerV,
  // highlight,
  // clickWord,
} = Fig.tools.html;

const layout = lessonLayout();
const { colors } = layout;

class Content extends PresentationLessonContent {
  setTitle() {
    this.title = details.details.title;
    this.iconLink = imgLink;
    this.iconLinkGrey = imgLinkGrey;
  }

  setDiagram(htmlId: string = '') {
    this.diagram = new CommonLessonDiagram({ htmlId }, layout);
    this.diagram.elements = new CommonCollection(this.diagram, layout);
    // this.loadQRs([
    //   'qr_names_here',
    // ]);
  }

  addSections() {
    const diag = this.diagram.elements;
    const circle = diag._circle;

    const common = {
      transitionFromAny: (done) => {
        diag.setLineRotation();
        done();
      },
    };

    this.addSection({
      title: 'Introduction',
      setContent: centerVH([
        'How do we |measure| angle?',
        'How do we quantify how large or small an angle is?',
      ]),
    });

    this.addSection(common, {
      setContent: [
        'An |angle| is the amount of |rotation| between two lines.',
      ],
      modifiers: {
        rotation: click(diag.pushLine, [diag, null, 0, 1], colors.lines),
        angle: click(diag.pulseAngle, [diag], colors.angles),
      },
      show: [
        circle._line1, circle._line2, circle._angle,
      ],
      // setSteadyState: () => {
      //   // circle._line1.setScenario('start');
      //   // diag.updateAngle();
      // },
    });
    this.addSection(common, {
      setContent: [
        'An |angle| in a shape can be as small as |no_rotation|, and as large as a |full_rotation|.',
      ],
      modifiers: {
        rotation: click(diag.pushLine, [diag, null, 0, 1], colors.lines),
        angle: click(diag.pulseAngle, [diag], colors.angles),
        no_rotation: click(diag.pushLine, [diag, 0, -1, 2], colors.lines),
        full_rotation: click(diag.pushLine, [diag, Math.PI * 1.999, 1, 2], colors.lines),
      },
      show: [
        circle._line1, circle._line2, circle._angle,
      ],
      // setSteadyState: () => {
      //   circle._line1.setScenario('start');
      //   diag.updateAngle();
      // },
    });
    this.addSection(common, {
      setContent: [
        'Therefore, one way to measure angle is to split the full rotation up into |equal portions|.',
      ],
      show: [
        circle._line1, circle._line2, circle._angle,
      ],
      // setSteadyState: () => {
      //   circle._line1.setScenario('start');
      //   diag.updateAngle();
      // },
    });

    this.addSection(common, {
      setContent: [
        'For example, it could be |_12| equal portions like a clock.',
      ],
      modifiers: { _12: click(this.next, [this], colors.marks) },
      show: [
        circle._line1, circle._line2, circle._angle,
      ],
      // setSteadyState: () => {
      //   circle._line1.setScenario('start');
      //   diag.updateAngle();
      // },
    });

    this.addSection(common, {
      setContent: [
        'For example, it could be |_12| equal portions like a clock.',
      ],
      modifiers: { _12: click(diag.pulseMarks, [diag, 12], colors.marks) },
      show: [
        circle._line1, circle._line2, circle._angle, circle._marks12,
      ],
    });

    this.addSection(common, {
      setContent: [
        'The |angle| would then be how many portions are covered.',
      ],
      modifiers: { angle: click(diag.pulseAngle, [diag], colors.angles) },
      show: [
        circle._line1, circle._line2, circle._angle, circle._marks12,
        circle._angleText,
      ],
      setSteadyState: () => {
        // diag.updateAngle();
        diag.setAngleMarks(12);
        circle._angleText.setScenario('bottomRight');
      },
    });

    this.addSection(common, {
      setContent: [
        '|_12| portions is just an example. It could also be |_20|, |_50| or |_100|.',
      ],
      modifiers: {
        _12: click(diag.setAngleMarks, [diag, 12], colors.angles),
        _20: click(diag.setAngleMarks, [diag, 20], colors.angles),
        _50: click(diag.setAngleMarks, [diag, 50], colors.angles),
        _100: click(diag.setAngleMarks, [diag, 100], colors.angles),
      },
      show: [
        circle._line1, circle._line2, circle._angle, circle._marks12,
        circle._angleText,
      ],
      setSteadyState: () => {
        diag.setAngleMarks(12);
        circle._angleText.setScenario('bottomRight');
      },
    });

    this.addSection({
      setContent: centerV([
        'So how many portions should we use?',
        'There are two common practices. The first is dividing into |360| portions',
        'Each portion is usually called a degree and is represented by the symbol |º|.',
      ]),
    });

    this.addSection({
      setContent: centerV([
        'The word |degree| comes from the Latin words |de| (meaning |down|) and |gradus| (meaning |step|).',
        'So 360 degrees (360º) is the same as saying there are 360 smaller steps or pieces.',
      ]),
    });

    this.addSection({
      setContent: centerV([
        '|Why choose 360?|',
        'If you were defining it today, you could choose anything!',
        'But angle is a concept people have worked on and understood for thousands of years.',
        'For instance, Babylonians divided the circle into 360 pieces |over 3000 years ago|.',
      ]),
    });

    this.addSection({
      setContent: centerV([
        'So, |why did they| choose 360?',
        'Its not known, '
        '',
      ]),
    });

    // this.addSection(common, {
    //   title: '',
    //   setContent: centerV([
    //     '|tester|',
    //   ]),
    //   modifiers: {
    //     tester: click(diag.bendRadius, [diag], colors.radius),
    //   },
    //   setSteadyState: () => {
    //     circle._line1.setRotation(1);
    //     diag.updateAngle();
    //     diag.bend(0.5);
    //   },
    //   show: [circle],
    // });
  }
}

export default Content;
