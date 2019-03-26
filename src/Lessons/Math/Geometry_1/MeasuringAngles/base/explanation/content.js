// @flow
import Fig from 'figureone';
import {
  PresentationLessonContent,
  // interactiveItem,
} from '../../../../../../js/Lesson/PresentationLessonContent';
import Definition from '../../../../../LessonsCommon/tools/definition';
import lessonLayout from '../common/layout';
import imgLink from '../../tile.png';
import imgLinkGrey from '../../tile-grey.png';
import details from '../../details';
import CommonCollection from '../common/diagramCollectionCommon';
import CommonLessonDiagram from '../../../../../LessonsCommon/CommonLessonDiagram';

const {
  click,
  centerVH, centerV,
  highlightWord,
  actionWord,
  clickWord,
  onClickId,
} = Fig.tools.html;

const { rand } = Fig.tools.math;

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
    const equation = diag._equation;

    let common = {
      setContent: [],
      show: [],
      modifiers: {},
      transitionFromAny: (done) => {
        diag.setLineRotation(null, true, done);
      },
      setSteadyState: () => {
        circle.setScenario('center');
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
        rotation: click(diag.pushLine, [diag, null, 0, 1, null], colors.lines),
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
        rotation: click(diag.pushLine, [diag, null, 0, 1, null], colors.lines),
        angle: click(diag.pulseAngle, [diag], colors.angles),
        no_rotation: click(diag.pushLine, [diag, 0, -1, 2, null], colors.lines),
        full_rotation: click(diag.pushLine, [diag, Math.PI * 1.999, 1, 2, null], colors.lines),
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
        circle._angleText.setScenario('bottom');
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
        circle._angleText.setScenario('bottom');
      },
    });

    this.addSection({
      setContent: centerV([
        'So how many portions should we use?',
        'There are two common practices. The first is dividing into |360| portions.',
        'Each portion is usually called a degree and is represented by the symbol |º|.',
      ]),
    });

    this.addSection({
      setContent: centerV([
        'The word |degree| comes from the Latin words |de| (meaning |down|) and |gradus| (meaning |step|).',
        'So 360 degrees (360º) is the same as saying there are 360 |smaller steps| or pieces.',
      ]),
    });

    this.addSection({
      setContent: centerV([
        '|Why choose 360?|',
        'If you were defining it today, you could choose anything!',
        'But angle is a concept people have worked on and understood for thousands of years.',
        'For instance, Babylonians used 360 |over 3000 years ago|.',
      ]),
    });

    this.addSection({
      setContent: centerV([
        'So, |why did they| choose 360?',
        'It\'s not known, but one reason might be |360 is an easy number to work with| when you don\'t have a calculator.',
        '360 has a lot of numbers that can divide into it without a remainder:',
        '<ul style="list-style-type:none;"><li>|_factors|</li></ul>',
      ]),
      modifiers: {
        _factors: highlightWord('1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60, 72, 90, 120, 180, 360', 'lesson__diagram_text_small'),
      },
    });

    const row = (portion: string, angle: number) => `<tr><td>${portion}</td><td>|_${angle}deg|</td></tr>`;

    const rowClick = (angle: number) => clickWord(`${angle}&deg;`, `id_${angle}`, diag.pushLine, [diag, angle / 180 * Math.PI, 0, 1, null], colors.diagram.text.keyword);

    this.addSection(common, {
      setContent: () => `
          <p>This means it's easy to work with fractions of a full rotation. Some example fractions are shown, but |many| are possible.</p>
          <table class="in_lesson__fraction_table">
            <tr>
              <th> Fraction </th>
              <th> Angle </th>
            </tr>
            ${row(String.fromCharCode(190), 270)}
            ${row(String.fromCharCode(8532), 240)}
            ${row(String.fromCharCode(189), 180)}
            ${row(String.fromCharCode(8531), 120)}
            ${row(String.fromCharCode(188), 90)}
            ${row(String.fromCharCode(8533), 72)}
            ${row(String.fromCharCode(8537), 60)}
          </table>
        `,
      modifiers: {
        _270deg: rowClick(270),
        _240deg: rowClick(240),
        _180deg: rowClick(180),
        _120deg: rowClick(120),
        _90deg: rowClick(90),
        _72deg: rowClick(72),
        _60deg: rowClick(60),
      },
      show: [
        circle._line1, circle._line2, circle._angle, circle._degrees,
        circle._angleText,
      ],
      setSteadyState: () => {
        diag.setAngleMarks('degrees');
        circle._angleText.setScenario('bottomSlightRight');
        circle.setScenario('right');
        const bindArray = deg => [diag, deg / 180 * Math.PI, 0, 1, null];
        // onClickId('id_270', diag.pushLine, bindArray(270));
        onClickId('id_240', diag.pushLine, bindArray(240));
        onClickId('id_180', diag.pushLine, bindArray(180));
        onClickId('id_120', diag.pushLine, bindArray(120));
        onClickId('id_90', diag.pushLine, bindArray(90));
        onClickId('id_72', diag.pushLine, bindArray(72));
        onClickId('id_60', diag.pushLine, bindArray(60));
      },
    });

    this.addSection({
      title: 'Radians',
      setContent: centerV([
        'The second common way to measure angle is by relating it to the |properties of a circle|.',
      ]),
    });

    this.addSection(common, {
      setContent: [
        '|Angles and circles are closely related|. A circle can be created by rotating a line to |_360|.',
      ],
      modifiers: {
        _360: clickWord('360º', 'id_360', diag.showCircle, [diag], colors.arc),
      },
      show: [
        circle._line1, circle._line2,
        // circle._angle,
        circle._degrees,
        // circle._angleText,
        circle._arc,
      ],
      setSteadyState: () => {
        circle.setScenario('center');
        diag.setAngleMarks('degrees');
        // circle._angleText.setScenario('bottomLeft');
      },
    });

    this.addSection(common, {
      setContent: [
        'If however, the angle is |less| than 360º, then only a part of the circle is created. This part is called an |arc|.',
        `${new Definition('Arc', 'Latin', ['arcus', 'bow or arch']).html('id_lesson__isosceles_definition')}`,
      ],
      modifiers: {
        less: click(diag.pushLine, [diag, null, 0, 1 , null], colors.arc),
        arc: click(diag.pulseArc, [diag], colors.arc),
      },
      show: [
        circle._line1, circle._line2,
        circle._degrees,
        // circle._angleText,
        circle._arc,
      ],
      setSteadyState: () => {
        circle.setScenario('center');
        diag.setAngleMarks('degrees');
        // circle._angleText.setScenario('bottomLeft');
      },
    });

    this.addSection(common, {
      setContent: centerV([
        'Now, instead of measuring angle by dividing a full rotation into 360 equal pieces, we can relate it to the |radius| of a circle and |arc length|.',
      ]),
    });

    common.show = [
      circle._line1, circle._line2, circle._arc,
      // circle._angleText,
    ];
    common.setContent = [
      'To do this, we find the angle where the |arc_length| and |radius_length| are |equal|.',
    ];
    common.setSteadyState = () => {
      circle.setScenario('center');
      diag.updateAngle();
    };

    this.addSection(common, {
      modifiers: {
        arc_length: click(diag.pulseArc, [diag], colors.arc),
        radius_length: click(diag.pulseRadius, [diag], colors.lines),
        equal: click(this.next, [this], colors.radianLines),
      },
      setSteadyState: () => {
        circle.setScenario('center');
        diag.updateAngle();
      },
    });

    common.modifiers = {
      arc_length: click(diag.pulseArc, [diag], colors.arc),
      radius_length: click(diag.pulseRadius, [diag], colors.lines),
      equal: click(diag.bendRadius, [diag, null], colors.radianLines),
    };
    this.addSection(common, {
      transitionFromAny: (done) => {
        circle._bendLine.showAll();
        diag.bendRadius(done);
      },
      setSteadyState: () => {
        circle.setScenario('center');
        diag.updateAngle();
      },
    });

    common.modifiers = {
      radian: click(diag.goToOneRadian, [diag], colors.angles),
    };
    this.addSection(common, {
      setContent: [
        'This angle is called a |radian|, whose name comes from |radius|.',
      ],
      show: [
        circle._line1, circle._line2, circle._arc, circle._angle,
      ],
      setSteadyState: () => {
        circle.setScenario('center');
        circle._radianLines._line0.showAll();
        diag.bend(1);
        diag.updateAngle();
      },
    });

    common.setContent = ['We then use a |radian| as our portions to measure angle.'];
    common.setSteadyState();
    this.addSection(common, {
      show: [
        circle._line1, circle._line2, circle._angle,
        circle._arc,
        circle._radianLines._line0,
      ],
      setSteadyState: () => {
        circle.setScenario('center');
        diag.updateAngle();
      },
    });

    this.addSection(common, {
      show: [
        circle._line1, circle._line2, circle._angle,
        circle._arc,
        circle._radianLines,
        circle._angleText,
      ],
      setSteadyState: () => {
        circle.setScenario('center');
        diag.updateAngle();
        diag.setAngleMarks('radians');
        circle._angleText.setScenario('bottom');
        circle._radians.hide();
      },
    });


    common.show = [
      circle._arc, circle._angle, circle._line1, circle._line2,
      circle._angleText, circle._radianLines,
    ];
    common.setSteadyState = () => {
      circle.setScenario('center');
      diag.updateAngle();
      diag.setAngleMarks('radians');
      circle._angleText.setScenario('bottom');
      circle._radians.hide();
    };
    this.addSection(common, {
      setContent: [
        'Fractions of a circle are in radians are not as easy as degrees.',
      ],
    });
    this.addSection(common, {
      setContent: [
        'A |half_circle| has an angle of approximately |3.14 radians|, while a |full_circle| is approximately |6.28 radians|.',
      ],
      modifiers: {
        full_circle: click(diag.pushLine, [diag, Math.PI * 1.999, 1, 1.5, null], colors.angles),
        half_circle: click(diag.pushLine, [diag, Math.PI, 0, 1.5, null], colors.angles),
      },
    });

    this.addSection({
      setContent: centerV([
        'Saying there are |3.14| radians in half a circle is a |rough approximation|.',
        'Actually, the digits after the 3 go on forever.',
        'A more accurate |approximation| is |3.141593...|',
        'An even more accurate |approximation| is |3.14159265359...|',
      ]),
    });

    this.addSection({
      title: 'Why Use Radians?',
      setContent: centerV([
        '|So why use radians?|',
        'At first glance, dividing a circle into |6.283185...| portions isn\'t as convenient as dividing it into |360|.',
        'A radian is a big portion, and there are plenty of applications that will require a |fraction of a radian|.',
      ]),
    });
    this.addSection({
      setContent: centerV([
        'For example, if you want to use the angle of a |quarter circle|, instead of a simple calculation in degrees:',
        `<p style="text-align: center">|360 ${String.fromCharCode(247)} 4 = 90|</p>`,
        'you might need to use a calculator for radians:',
        `<p style="text-align: center">|6.283185... ${String.fromCharCode(247)} 4 = 1.570796...|</p>`,
      ]),
    });
    this.addSection({
      setContent: centerV([
        'In addition, a circle cannot be divided |evenly| in radians without a remainder.',
        '|6| radians go into a circle, but we are left with |0.283185... radians remaining|.',
      ]),
    });
    this.addSection({
      setContent: centerV([
        'But radians relate |angle|, |radius| and |arc length|.',
        'This means you can calculate one property from the other two.',
        'Thus, you only need to |measure the two easiest properties|, to have all three.',
      ]),
    });

    this.addSection({
      setContent: [
        'Lets see the relationship by looking at some examples.',
      ],
      show: [
        circle._arc, circle._radianLines, circle._angle,
        circle._line1, circle._line2, circle._angleText,
      ],
      setSteadyState: () => {
        circle.setScenario('center');
        diag.updateAngle();
        diag.setAngleMarks('radians');
        circle._angleText.setScenario('bottom');
        circle._radians.hide();
      },
    });

    common = {
      modifiers: {
        _1_radian: click(diag.pushLine, [diag, 1, 0, 1, null], colors.angles),
        _2_radians: click(diag.pushLine, [diag, 2, 0, 1, null], colors.angles),
        _3_radians: click(diag.pushLine, [diag, 3, 0, 1, null], colors.angles),
      },
      show: [
        circle._arc, circle._radianLines, circle._angle,
        circle._line1, circle._line2, circle._angleText,
        // equation,
      ],
      // transitionFromAny: (done) => {
      //   diag.setLineRotation(null, true, done);
      // },
    };
    const setup = () => {
      circle.setScenario('center');
      diag.updateAngle();
      diag.setAngleMarks('radians');
      circle._angleText.setScenario('bottom');
      circle._radians.hide();
      equation.setScenario('top');
    };
    this.addSection(common, {
      setContent: [
        'At an angle of |_1_radian|:',
      ],
      transitionFromPrev: (done) => {
        equation.showForm('1rad');
        diag.setLineRotation(1, true, done);
      },
      setSteadyState: () => {
        setup();
        equation.showForm('1rad');
        diag.setLineRotation(1, false);
      },
    });
    this.addSection(common, {
      setContent: [
        'At an angle of |_2_radians|:',
      ],
      transitionFromPrev: (done) => {
        equation.showForm('2rad');
        diag.setLineRotation(2, true, done);
      },
      setSteadyState: () => {
        setup();
        equation.showForm('2rad');
        diag.setLineRotation(2, false);
      },
    });
    this.addSection(common, {
      setContent: [
        'At an angle of |_3_radians|:',
      ],
      transitionFromPrev: (done) => {
        equation.showForm('3rad');
        diag.setLineRotation(3, true, done);
      },
      setSteadyState: () => {
        setup();
        equation.showForm('3rad');
        diag.setLineRotation(3, false);
      },
    });

    this.addSection(common, {
      setContent: [
        'Simplifying:',
      ],
      transitionFromPrev: (done) => {
        equation.showForm('3rad');
        equation.setCurrentForm('3rad');
        equation.animateToForm('3rad1', 2, 0, done);
        diag.setLineRotation(3, true);
      },
      setSteadyState: () => {
        setup();
        equation.showForm('3rad1');
        diag.setLineRotation(3, false);
      },
    });

    this.addSection(common, {
      setContent: [
        'Simplifying:',
      ],
      transitionFromPrev: (done) => {
        equation.showForm('3rad1');
        equation.setCurrentForm('3rad1');
        equation.animateToForm('general', 2, 0, done);
        diag.setLineRotation(3, true);
      },
      setSteadyState: () => {
        setup();
        equation.showForm('general');
        diag.setLineRotation(3, false);
      },
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
