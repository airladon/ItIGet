// @flow
import Fig from 'figureone';
import CommonTopicDiagram from '../../../../../common/CommonTopicDiagram';
import CommonDiagramCollection from '../../../../../common/DiagramCollection';

const {
  // DiagramElementPrimitive, DiagramObjectAngle,
  // DiagramObjectLine,
  DiagramObjectPolyLine,
  // DiagramElementCollection,
  Transform,
} = Fig;

export default class CommonCollection extends CommonDiagramCollection {
  // _line1: DiagramObjectLine;
  // _line2: DiagramObjectLine;
  // _line3: DiagramObjectLine;
  _quad1: DiagramObjectPolyLine;
  _quad2: DiagramObjectPolyLine;
  _quad3: DiagramObjectPolyLine;

  constructor(
    diagram: CommonTopicDiagram,
    layout: Object,
    transform: Transform = new Transform('Common').rotate(0).translate(0, 0),
  ) {
    super(diagram, layout, transform);
    this.setPosition(this.layout.position);
    this.diagram.addElements(this.layout.addElements, this);
    this.hasTouchableElements = true;
  }

  // drawLines(done: ?() => void) {
  //   this._line1.grow(0, 0.8, true, null);
  //   this._line2.grow(0, 0.8, true, null);
  //   this._line3.grow(0, 0.8, true, done);
  //   this.diagram.animateNextFrame();
  // }
}
