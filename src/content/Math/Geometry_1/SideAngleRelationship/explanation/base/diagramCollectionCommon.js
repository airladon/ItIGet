// @flow
import Fig from 'figureone';
import CommonTopicDiagram from '../../../../../common/CommonTopicDiagram';
import CommonDiagramCollection from '../../../../../common/DiagramCollection';

const {
  DiagramElementPrimitive,
  DiagramObjectAngle,
  DiagramObjectLine,
  DiagramElementCollection,
  DiagramObjectPolyLine,
  Equation,
  Transform,
} = Fig;

type TypeFullPolyLine = {
  _angle0: DiagramObjectAngle;
  _angle1: DiagramObjectAngle;
  _angle2: DiagramObjectAngle;
  _side01: { _label: DiagramElementPrimitive } & DiagramObjectLine;
  _side12: { _label: DiagramElementPrimitive } & DiagramObjectLine;
  _side20: { _label: DiagramElementPrimitive } & DiagramObjectLine;
  _line: DiagramElementPrimitive;
} & DiagramObjectPolyLine;

export default class CommonCollection extends CommonDiagramCollection {
  _shortestExample: TypeFullPolyLine;
  _longestExample: TypeFullPolyLine;
  _0Eqn: Equation;
  _1Eqn: Equation;
  _2Eqn: Equation;
  _3Eqn: Equation;
  _4Eqn: Equation;
  _5Eqn: Equation;
  _fig: {
    _tri: TypeFullPolyLine;
    _isosceles: TypeFullPolyLine;
    _lowerAngle: DiagramObjectAngle;
    _lowerTriangle: DiagramElementPrimitive;
  } & DiagramElementCollection;

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

  pulseSmallestAngle() {
    this._shortestExample._angle2.pulseScaleNow(1, 1.4);
    this.diagram.animateNextFrame();
  }

  pulseShortestSide() {
    this._shortestExample._side01._label.pulseScaleNow(1, 2.5);
    this.diagram.animateNextFrame();
  }

  pulseSideB() {
    this._fig._tri._side12._label.pulseScaleNow(1, 2.5);
    this.diagram.animateNextFrame();
  }

  pulseSideA() {
    this._fig._tri._side01._label.pulseScaleNow(1, 2.5);
    this.diagram.animateNextFrame();
  }

  pulseLargestAngle() {
    this._longestExample._angle1.pulseScaleNow(1, 1.5);
    this.diagram.animateNextFrame();
  }

  pulseLongestSide() {
    this._longestExample._side20._label.pulseScaleNow(1, 2.5);
    this.diagram.animateNextFrame();
  }

  pulseIsoscelesTriangle(done: ?() => void = null) {
    this._fig._isosceles.pulseScaleNow(1, 1.2, 0, done);
    this.diagram.animateNextFrame();
  }

  pulseOppositeAngles(done: ?() => void = null) {
    this._fig._tri._angle0.pulseScaleNow(1, 1.5);
    this._fig._tri._angle2.pulseScaleNow(1, 1.5, 0, done);
    this.diagram.animateNextFrame();
  }

  pulseNewAngles(done: ?() => void = null) {
    this._fig._isosceles._angle0.pulseScaleNow(1, 1.5, 0, done);
    this._fig._isosceles._angle2.pulseScaleNow(1, 1.5);
    this._fig._lowerAngle.pulseScaleNow(1, 1.5);
    this.diagram.animateNextFrame();
  }

  toggleLowerTriangle() {
    if (this._fig._lowerTriangle.isShown) {
      this._fig._lowerTriangle.hide();
    } else {
      this._fig._lowerTriangle.show();
    }
    this.diagram.animateNextFrame();
  }

  pulseAngleN() {
    this._fig._isosceles._angle2.pulseScaleNow(1, 1.5);
    this.diagram.animateNextFrame();
  }

  pulseAngleO() {
    this._fig._lowerAngle.pulseScaleNow(1, 1.5);
    this.diagram.animateNextFrame();
  }

  pulseAngleM() {
    this._fig._isosceles._angle0.pulseScaleNow(1, 1.5);
    this.diagram.animateNextFrame();
  }

  pulseAngleA() {
    this._fig._tri._angle2.pulseScaleNow(1, 1.5);
    this.diagram.animateNextFrame();
  }

  pulseAngleB() {
    this._fig._tri._angle0.pulseScaleNow(1, 1.5);
    this.diagram.animateNextFrame();
  }

  pulseAnglesMO() {
    this.pulseAngleM();
    this.pulseAngleO();
  }

  pulseEqn0() {
    this._0Eqn.pulseScaleNow(1, 1.5);
    this.diagram.animateNextFrame();
  }

  pulseEqn1() {
    this._1Eqn.pulseScaleNow(1, 1.5);
    this.diagram.animateNextFrame();
  }

  pulseEqn2() {
    this._2Eqn.pulseScaleNow(1, 1.5);
    this.diagram.animateNextFrame();
  }

  pulseEqn3() {
    this._3Eqn.pulseScaleNow(1, 1.5);
    this.diagram.animateNextFrame();
  }

  pulseLargestSideAngle() {
    this.pulseAngleB();
    this.pulseSideB();
  }

  pulseSmallestSideAngle() {
    this.pulseAngleA();
    this.pulseSideA();
  }
}
