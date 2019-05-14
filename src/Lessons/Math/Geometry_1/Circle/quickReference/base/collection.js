// @flow
import Fig from 'figureone';
import CommonLessonDiagram from '../../../../../LessonsCommon/CommonLessonDiagram';
import CommonDiagramCollection from '../../../../../LessonsCommon/DiagramCollection';

const {
  DiagramElementPrimative,
  DiagramObjectLine,
  DiagramElementCollection,
  Equation,
  // DiagramObjectAngle,
  Transform, Point,
} = Fig;

const { spaceToSpaceTransform } = Fig.tools.g2;
const { round } = Fig.tools.math;

type TypeEquationElements = {
  _diameter: DiagramElementPrimative;
  _equals: DiagramElementPrimative;
  __2: DiagramElementPrimative;
  _radius: DiagramElementPrimative;
  _pi: DiagramElementPrimative;
  _circumference: DiagramElementPrimative;
  _v: DiagramElementPrimative;
  _equals: DiagramElementPrimative;
} & Equation;

export default class CommonCollectionCircle extends CommonDiagramCollection {
  percentStraight: number;
  straightening: boolean;
  containToGrid: boolean;
  _locationText: DiagramElementPrimative;
  _circumferenceText: DiagramElementPrimative;
  _diameterText: DiagramElementPrimative;
  _radiusText: DiagramElementPrimative;
  _grid: DiagramElementPrimative;
  _circle: {
    _center: DiagramElementPrimative;
    _line: DiagramElementPrimative;
    _arc: DiagramElementPrimative;
    _diameter: DiagramObjectLine;
    _radius: DiagramObjectLine;
    _scale: DiagramElementPrimative;
    _translate: DiagramElementPrimative;
    _circumference: {
      _leftArc: DiagramElementPrimative;
      _rightArc: DiagramElementPrimative;
      _leftLine: DiagramObjectLine;
      _rightLine: DiagramObjectLine;
    } & DiagramElementCollection;
  } & DiagramElementCollection;

  _eqnDiameterRadius: TypeEquationElements;
  _eqnCircumferenceDiameter: TypeEquationElements;
  _eqnCircumferenceRadius: TypeEquationElements;
  _eqnDiameterCircumference: TypeEquationElements;
  _eqnRadiusDiameter: TypeEquationElements;
  _eqnRadiusCircumference: TypeEquationElements;

  _diameterLines: {
    _line0: DiagramObjectLine;
    _line1: DiagramObjectLine;
    _line2: DiagramObjectLine;
  } & DiagramElementCollection;

  constructor(
    diagram: CommonLessonDiagram,
    layout: Object,
    transform: Transform = new Transform('Collection').rotate(0).translate(0, 0),
  ) {
    super(diagram, layout, transform);
    this.setPosition(this.layout.position);
    this.diagram.addElements(this, this.layout.addCircleElements);
    this.hasTouchableElements = true;
    this.scenarios = layout.circleScenarios;
    this.setScenario('center');
    // this._circle._radius.setTransformCallback = this.updateArc.bind(this);
    // this._circle.setTransformCallback = this.updateCircleLocation.bind(this);
    // this.percentStraight = 0;
    // this.straightening = true;
    // this._circle._scale.move.element = this._circle;
    // this._circle._translate.move.element = this._circle;
    // this._circumferenceText.onClick = this.straightenCircumference.bind(this, 4, null);
    // this._locationText.onClick = this.pulseCenter.bind(this);
    // this._radiusText.onClick = this.pulseRadius.bind(this);
    // this._diameterText.onClick = this.pulseDiameter.bind(this);
    // this.containToGrid = false;

  //   this._eqnDiameterRadius._radius.makeTouchable();
  //   this._eqnDiameterRadius._radius.onClick = this.pulseRadius.bind(this);
  //   this._eqnDiameterRadius._diameter.makeTouchable();
  //   this._eqnDiameterRadius._diameter.onClick = this.pulseDiameter.bind(this);
  //   this._eqnDiameterCircumference._circumference.makeTouchable();
  //   this._eqnDiameterCircumference._circumference.onClick = this.pulseCircle.bind(this);
  //   this._eqnDiameterCircumference._diameter.makeTouchable();
  //   this._eqnDiameterCircumference._diameter.onClick = this.pulseDiameter.bind(this);

  //   this._eqnCircumferenceDiameter._circumference.makeTouchable();
  //   this._eqnCircumferenceDiameter._circumference.onClick = this.pulseCircle.bind(this);
  //   this._eqnCircumferenceDiameter._diameter.makeTouchable();
  //   this._eqnCircumferenceDiameter._diameter.onClick = this.pulseDiameter.bind(this);
  //   this._eqnCircumferenceRadius._circumference.makeTouchable();
  //   this._eqnCircumferenceRadius._circumference.onClick = this.pulseCircle.bind(this);
  //   this._eqnCircumferenceRadius._radius.makeTouchable();
  //   this._eqnCircumferenceRadius._radius.onClick = this.pulseRadius.bind(this);

  //   this._eqnRadiusDiameter._diameter.makeTouchable();
  //   this._eqnRadiusDiameter._diameter.onClick = this.pulseDiameter.bind(this);
  //   this._eqnRadiusDiameter._radius.makeTouchable();
  //   this._eqnRadiusDiameter._radius.onClick = this.pulseRadius.bind(this);
  //   this._eqnRadiusCircumference._circumference.makeTouchable();
  //   this._eqnRadiusCircumference._circumference.onClick = this.pulseCircle.bind(this);
  //   this._eqnRadiusCircumference._radius.makeTouchable();
  //   this._eqnRadiusCircumference._radius.onClick = this.pulseRadius.bind(this);
  }

  // updateArc() {
  //   if (this._circle._arc.isShown) {
  //     let r = this._circle._radius.getRotation();
  //     while (r > Math.PI * 2) {
  //       r -= Math.PI * 2;
  //     }
  //     while (r < 0) {
  //       r += Math.PI * 2;
  //     }
  //     this._circle._arc.setAngleToDraw(r);
  //     this.diagram.animateNextFrame();
  //   }
  // }

  pushRadiusRandom() {
    const r = Math.random() * Math.PI + Math.PI / 2;
    this.pushRadius(this._circle._radius.getRotation() + r);
  }

  pushRadius(toAngle: ?number) {
    const r = this._circle._radius.getRotation();
    let target = r + 1;
    if (toAngle != null) {
      target = toAngle;
    }
    this.stop(true, false);
    this._circle._radius.animations.new()
      .rotation({ target, duration: 1, direction: 1 })
      .start();
    this.diagram.animateNextFrame();
  }

  pushDiameterRandom() {
    const r = Math.random() * Math.PI / 2 + Math.PI / 4;
    this.pushDiameter(this._circle._diameter.getRotation() + r);
  }

  pushDiameter(toAngle: ?number) {
    const r = this._circle._diameter.getRotation();
    let target = r + 1;
    if (toAngle != null) {
      target = toAngle;
    }
    this.stop(true, false);
    this._circle._diameter.animations.new()
      .rotation({ target, duration: 1, direction: 1 })
      .start();
    this.diagram.animateNextFrame();
  }

  pulseCenter() {
    this._circle._center.pulseScaleNow(1, 2);
    this.diagram.animateNextFrame();
  }

  pulseRadius() {
    this._circle._radius.pulseWidth();
    this.diagram.animateNextFrame();
  }

  pulseDiameter() {
    this._circle._diameter.pulseWidth();
    this.diagram.animateNextFrame();
  }

  pulseCircle() {
    this._circle._line.pulseThickNow(1, 1.04, 5);
    this.diagram.animateNextFrame();
  }

  resetDiameterAndRadius() {
    this._circle._radius.setRotation(0.5);
    this._circle._diameter.setRotation(0);
    this._circle._diameter.setPosition(0, 0);
    this.diagram.animateNextFrame();
  }
}
