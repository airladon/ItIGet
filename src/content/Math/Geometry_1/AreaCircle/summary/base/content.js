// @flow
import Fig from 'figureone';
import {
  PresentationFormatContent,
} from '../../../../../../js/TopicFormat/PresentationFormatContent';
import diagramLayout from './layout';
// import imgLink from '../../tile.png';
// import imgLinkGrey from '../../tile-grey.png';
import details from '../../details';
import CommonTopicDiagram from '../../../../../common/CommonTopicDiagram';
import DiagramCollection from './diagramCollection';
// import Definition from '../../../../../common/tools/definition';

const {
  highlight,
//   click,
//   centerV,
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
  }

  addSections() {
    const diag = this.diagram.elements;
    const coll = diag._collection;
    const fig = coll._fig;
    const polyMost = fig._polyMost;
    const circle = fig._circle;
    const eqn = coll._eqn;

    this.addSection({
      setContent: '|Circle area| is the product of |π| and the |radius| squared.',
      modifiers: {
        radius: highlight(colors.radius),
      },
      show: [circle, polyMost._radius],
      setSteadyState: () => {
        fig.setScenario('left');
        eqn.setScenario('summary');
        eqn.showForm('14');
        polyMost._radius.setScenario('circle');
        polyMost._radius.updateLabel(polyMost._radius.getRotation() + polyMost.getRotation());
      },
    });
  }
}

export default Content;
