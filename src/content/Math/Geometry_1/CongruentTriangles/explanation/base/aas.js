// @flow
import Fig from 'figureone';
import CommonTopicDiagram from '../../../../../common/CommonTopicDiagram';
import CommonDiagramCollection from '../../../../../common/DiagramCollection';

const {
  // DiagramElementPrimitive,
  DiagramObjectAngle,
  DiagramObjectLine,
  // DiagramObjectPolyLine,
  // DiagramElementCollection,
  // DiagramObjectAngle, DiagramObjectLine,
  Transform,
  // Point,
  // Line,
} = Fig;

// const { rand } = Fig.tools.math;

// const { getPoint } = Fig.tools.g2;

export default class CommonCollectionAAS extends CommonDiagramCollection {
  _angle1: DiagramObjectAngle;
  _angle2: DiagramObjectAngle;
  _angle3: DiagramObjectAngle;
  _side: DiagramObjectLine;

  constructor(
    diagram: CommonTopicDiagram,
    layout: Object,
    transform: Transform = new Transform('Common').rotate(0).translate(0, 0),
  ) {
    super(diagram, layout, transform);
    this.diagram.addElements(this.layout.addElementsAAS, this);
    this.hasTouchableElements = true;
  }

  pulseAngle2(done: ?() => void = null) {
    this._angle2.pulseScaleNow(1, 1.5, 0, done);
    this.diagram.animateNextFrame();
  }
}
