// @flow
// import Fig from 'figureone';
import {
  PresentationFormatContent,
} from '../../../../../../js/TopicFormat/PresentationFormatContent';
import diagramLayout from './layout';
// import imgLink from '../../tile.png';
// import imgLinkGrey from '../../tile-grey.png';
import details from '../../details';
import CommonTopicDiagram from '../../../../../common/CommonTopicDiagram';
import DiagramCollection from './diagramCollection';
import Definition from '../../../../../common/tools/definition';

// const {
//   click,
//   centerV,
// } = Fig.tools.html;

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

    this.addSection({
      title: '',
      setContent: [
        'A |quadrangle|, or |quadrilateral| is a shape with |four sides| and |four angles|. A quadrangle\'s angles will always add to |360º|.',
        `${new Definition('Quadrangle', 'Latin', ['quattuor', 'four', 'angulus', 'angle, corner']).html({ classes: 'diagram__definition_high', color: colors.sides })}`,
        `${new Definition('Quadrilateral', 'Latin', ['quattuor', 'four', 'latus, later', 'side']).html(colors.sides)}`,
      ],
      show: [coll._quad1, coll._quad2, coll._quad3],
    });
  }
}

export default Content;
