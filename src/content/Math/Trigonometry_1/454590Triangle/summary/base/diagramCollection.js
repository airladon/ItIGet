// @flow
import Fig from 'figureone';

import diagramLayout from './layout';
import CommonTopicDiagram from '../../../../../common/CommonTopicDiagram';
import CommonDiagramCollection from '../../../../../common/DiagramCollection';

const {
  DiagramObjectAngle,
  DiagramObjectLine,
  DiagramElementCollection,
  DiagramObjectPolyLine,
  Equation,
  Transform,
} = Fig;

export default class DiagramCollection extends CommonDiagramCollection {
  _tri: {
    _A1: { _label: Equation } & DiagramObjectLine;
    _A2: { _label: Equation } & DiagramObjectLine;
    _Ar2: { _label: Equation } & DiagramObjectLine;
    _1: { _label: Equation } & DiagramObjectLine;
    _2: { _label: Equation } & DiagramObjectLine;
    _r2: { _label: Equation } & DiagramObjectLine;
    _451: DiagramObjectAngle;
    _452: DiagramObjectAngle;
    _right: DiagramObjectAngle;
    _line: DiagramObjectPolyLine;
  } & DiagramElementCollection;

  constructor(
    diagram: CommonTopicDiagram,
    transform: Transform = new Transform(),
  ) {
    const layout = diagramLayout();
    super(diagram, layout, transform);

    this.diagram.addElements(this.layout.addElements, this);
    // this.hasTouchableElements = true;
  }
}
