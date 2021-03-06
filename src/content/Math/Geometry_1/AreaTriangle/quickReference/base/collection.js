// @flow
import Fig from 'figureone';
import CommonTopicDiagram from '../../../../../common/CommonTopicDiagram';
import CommonDiagramCollection from '../../../../../common/DiagramCollection';

const {
  // DiagramElementPrimitive,
  DiagramObjectAngle,
  DiagramObjectLine,
  // DiagramObjectPolyLine,
  DiagramElementCollection,
  Transform,
  // Point,
  Equation,
} = Fig;

// const { round, rand } = Fig.tools.math;

export default class CommonCollection extends CommonDiagramCollection {
  _height1: {
    _line: DiagramObjectLine;
    _angle: DiagramObjectAngle;
    _base: DiagramObjectLine;
  } & DiagramElementCollection;

  _height2: {
    _line: DiagramObjectLine;
    _angle: DiagramObjectAngle;
    _base: DiagramObjectLine;
    _baseExtension: DiagramObjectLine;
  } & DiagramElementCollection;

  _eqn: Equation;
  base: number;
  height: number;
  area: number;

  constructor(
    diagram: CommonTopicDiagram,
    layout: Object,
    transform: Transform = new Transform('Common').rotate(0).translate(0, 0),
  ) {
    super(diagram, layout, transform);
    this.setPosition(this.layout.position);
    this.diagram.addElements(this.layout.addElements, this);
  }
}
