// @flow
import Fig from 'figureone';
import {
  PresentationLessonContent,
} from '../../../../../../js/Lesson/PresentationLessonContent';
import lessonLayout from './layout';
// import imgLink from '../../tile.png';
// import imgLinkGrey from '../../tile-grey.png';
import details from '../../details';
import CommonLessonDiagram from '../../../../../LessonsCommon/CommonLessonDiagram';
import DiagramCollection from './diagramCollection';
// import Definition from '../../../../../LessonsCommon/tools/definition';

const {
  style,
  click,
//   clickW,
//   highlight,
//   centerV,
} = Fig.tools.html;

const layout = lessonLayout();
const { colors } = layout;

class Content extends PresentationLessonContent {
  setTitle() {
    this.title = details.title;
//    this.iconLink = imgLink;
//    this.iconLinkGrey = imgLinkGrey;
  }

  setDiagram(htmlId: string = '') {
    this.diagram = new CommonLessonDiagram({ htmlId }, layout);
    this.diagram.elements = new DiagramCollection(this.diagram);
  }

  addSections() {
    const diag = this.diagram.elements;
    const coll = diag._collection;
    const fig = coll._fig;
    const fig2 = coll._fig2;

    this.addSection({
      title: 'Triangle Split',
      setContent: style({ top: 0 }, [
        'Any |triangle| split with a line |parallel| to one of its sides will form a |smaller_triangle| whose sides all of the |same_proportion| of their corresponding sides on the |original_triangle|.',
      ]),
      modifiers: {
        triangle: click(coll.pulseTriangle, [coll], colors.sides),
        parallel: click(coll.pulseSplit, [coll], colors.highlight),
        smaller_triangle: click(coll.pulseSmallerTriangle, [coll], colors.highlight),
        same_proportion: click(coll.pulseEqn, [coll], colors.sides),
        original_triangle: click(coll.pulseTriangle, [coll], colors.sides),
      },
      show: [fig],
      setSteadyState: () => {
        coll.setScenarios('default');
        coll._eqn.showForm('0');
      }
    });

    this.addSection({
      title: 'Parallel Split',
      setContent: style({ }, [
        'Any |lines| between |parallel_lines| will be split in |equal_proportion| by a |third_parallel_line|.',
      ]),
      modifiers: {
        lines: click(coll.pulseLines, [coll], colors.sides),
        parallel_lines: click(coll.pulseFig2ParallelLines, [coll], colors.sides),
        third_parallel_line: click(coll.pulseFig2Split, [coll], colors.highlight),
        equal_proportion: click(coll.pulseEqn, [coll], colors.sides),
      },
      show: [fig2],
      setSteadyState: () => {
        coll._eqn.setScenario('top');
        coll._eqn.showForm('0');
      }
    });
  }
}

export default Content;