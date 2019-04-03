// @flow
import Fig from 'figureone';
import {
  PresentationLessonContent,
} from '../../../../../../js/Lesson/PresentationLessonContent';
import lessonLayout from './layout';
import imgLink from '../../tile.png';
import imgLinkGrey from '../../tile-grey.png';
import details from '../../details';
import CommonLessonDiagram from '../../../../../LessonsCommon/CommonLessonDiagram';
import DiagramCollection from './diagramCollection';
import Definition from '../../../../../LessonsCommon/tools/definition';

const {
  click,
  style,
  centerV,
  highlight,
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
    this.diagram.elements = new DiagramCollection(this.diagram);
  }

  addSections() {
    const diag = this.diagram.elements._collection;
    const circle = diag._circle;

    this.addSection({
      title: '',
      setContent: [
        style({ top: 7, right: 55 }, 'A |radian| is the |angle| where the |arc_length| equals the |radius|.'),
        style({ right: 55 }, 'Angle, arc length and radius are related by:'),
        style({ right: 55, top: 20 }, 'There are |2π| radians in a circle.'),
      ],
      modifiers: {
        radian: click(diag.bendRadius, [diag, null], colors.radianLines),
        arc_length: click(diag.pulseArc, [diag], colors.arc),
        radius: click(diag.pulseRadius, [diag], colors.lines),
        angle: click(diag.pulseAngle, [diag], colors.angles),
        _angle: highlight(colors.angles),
        _arc_length: highlight(colors.arc),
        _radius: highlight(colors.lines),
      },
      show: [
        circle._line1, circle._line2, circle._arc, circle._angle, circle._angleText],
      setSteadyState: () => {
        circle.setScenario('summary');
        circle._line1.setRotation(1.3);
        diag.setAngleMarks('radians');
        diag.updateAngle();
        diag._equation.showForm('arc');
        diag._equation.setScenario('summary');
        circle._angleText.setScenario('summary');
      },
    });
    this.addSection({
      setContent: [
        '|Radians| can be converted to |degrees| using:',
        style({ top: 30 }, '|Degrees| can be converted to |_radians| using:'),
      ],
      modifiers: {
        Radians: highlight(colors.radianLines),
        _radians: highlight(colors.radianLines),
        Degrees: highlight(colors.degrees),
        _degrees: highlight(colors.degrees),
      },
      setSteadyState: () => {
        diag._radDegEqn.setScenario('summary');
        diag._radDegEqn.showForm('6');
        diag._degRadEqn.setScenario('summary');
        diag._degRadEqn.showForm('0');
      },
    });
  }
}

export default Content;
