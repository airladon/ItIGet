// @flow
import Fig from 'figureone';
import CommonLessonDiagram from '../../../../../LessonsCommon/CommonLessonDiagram';
import CommonDiagramCollection from '../../../../../LessonsCommon/DiagramCollection';

const {
  DiagramElementPrimative,
  DiagramObjectAngle,
  DiagramObjectLine,
  DiagramElementCollection,
  DiagramObjectPolyLine,
  // Equation,
  Transform,
} = Fig;

export default class CommonCollection extends CommonDiagramCollection {
  _fig: {
    _tri: DiagramObjectPolyLine;
    _rightAngle: DiagramObjectAngle;
    _split: DiagramObjectLine;
    _splitRightAngle: DiagramObjectAngle;
    _splitTri: DiagramObjectPolyLine;
    _labelM: DiagramObjectLine;
    _labelN: DiagramObjectLine;
    _area1: DiagramElementPrimative;
    _area2: DiagramElementPrimative;
    _area3: DiagramElementPrimative;
    _construction: DiagramObjectLine;
  } & DiagramElementCollection;

  _fig2: {
    _tri: DiagramObjectPolyLine;
    _topTri: DiagramObjectPolyLine;
    _hSplit: DiagramObjectLine;
    _vSplit: DiagramObjectLine;
    _rightAngle: DiagramObjectAngle;
    _splitRightAngle: DiagramObjectAngle;
    _labelM: DiagramObjectLine;
    _labelN: DiagramObjectLine;
    _labelB: {
      _label: DiagramElementPrimative;
    } & DiagramObjectLine;
    _B1: DiagramElementPrimative;
    _B2: DiagramElementPrimative;
    _rH: DiagramElementPrimative;
    _topLeftTri: {
      _side01: {
        _label: DiagramElementPrimative;
      } & DiagramObjectLine;
      _side20: {
        _label: DiagramElementPrimative;
      } & DiagramObjectLine;
    } & DiagramObjectPolyLine;
    _topRightTri: {
      _side12: {
        _label: DiagramElementPrimative;
      } & DiagramObjectLine;
      _side20: {
        _label: DiagramElementPrimative;
      } & DiagramObjectLine;
    } & DiagramObjectPolyLine;
  } & DiagramElementCollection;


  constructor(
    diagram: CommonLessonDiagram,
    layout: Object,
    transform: Transform = new Transform('Common').rotate(0).translate(0, 0),
  ) {
    super(diagram, layout, transform);
    this.setPosition(this.layout.position);
    this.diagram.addElements(this, this.layout.addElements);
    this.hasTouchableElements = true;
    this._1Eqn.eqn.formRestart = { pulse: { element: this._0Eqn, duration: 1, scale: 1.1 } };
    this._2Eqn.eqn.formRestart = { pulse: { element: this._1Eqn, duration: 1, scale: 1.1 } };
    // this._2Eqn.eqn.formRestart = { pulse: { element: this._1Eqn, duration: 1, scale: 1.1 } };
    // this._3Eqn.eqn.formRestart = { pulse: { element: this._2Eqn, duration: 1, scale: 1.1 } };
    // this.hasTouchableElements = true;
  }

  // pulseSplit(done: ?() => void = null) {
  //   this._fig._split.pulseWidth({ done });
  //   this.diagram.animateNextFrame();
  // }

  drawSplit(done: ?() => void = null) {
    this._fig._split.grow(0, 1.5, true, done);
    this.diagram.animateNextFrame();
  }

  pulseRightAngles(done: ?() => void = null) {
    this._fig._rightAngle.pulseScaleNow(1, 1.3);
    this._fig._splitRightAngle.pulseScaleNow(1, 1.3, 0, done);
    this.diagram.animateNextFrame();
  }

  pulseSplitTriangle(done: ?() => void = null) {
    this._fig._splitTri.pulseScaleNow(1, 1.1, 0, done);
    this.diagram.animateNextFrame();
  }

  pulseAreaLabels(done: ?() => void = null) {
    this._fig._area1.pulseScaleNow(1, 1.5, 0, done);
    this._fig._area2.pulseScaleNow(1, 1.5);
    this._fig._area3.pulseScaleNow(1, 1.5);
    this.diagram.animateNextFrame();
  }

  growFig2Split(done: ?() => void = null) {
    this._fig2._hSplit.grow(0, 1.5, true, done);
    this.diagram.animateNextFrame();
  }

  growFig2VSplit(done: ?() => void = null) {
    this._fig2._vSplit.stop(false, false);
    this._fig2._rightAngle.hide();
    this._fig2._splitRightAngle.hide();
    this._fig2._vSplit.grow(0.05, 1.5, true, () => {
      this._fig2._rightAngle.showAll();
      this._fig2._splitRightAngle.showAll();
      if (done != null) {
        done();
      }
    });
    this.diagram.animateNextFrame();
  }

  toggleOriginalTriangle() {
    if (this._fig2._labelM.isShown) {
      this._fig2._labelM.hide();
      this._fig2._labelN.hide();
      this._fig2._labelB.hide();
    } else {
      this._fig2._labelM.showAll();
      this._fig2._labelN.showAll();
      this._fig2._labelB.showAll();
    }
    this.diagram.animateNextFrame();
  }

  toggleSplitTriangle() {
    if (this._fig2._topTri.isShown) {
      this._fig2._topTri.hide();
    } else {
      this._fig2._topTri.showAll();
    }
    this.diagram.animateNextFrame();
  }

  pulseB1(done: ?() => void = null) {
    this._fig2._B1.pulseScaleNow(1, 2, 0, done);
    this.diagram.animateNextFrame();
  }

  pulseB2(done: ?() => void = null) {
    this._fig2._B2.pulseScaleNow(1, 2, 0, done);
    this.diagram.animateNextFrame();
  }

  pulseB(done: ?() => void = null) {
    this._fig2._labelB._label.pulseScaleNow(1, 2, 0, done);
    this.diagram.animateNextFrame();
  }

  pulseTopLeft(done: ?() => void = null) {
    this._fig2._topLeftTri._side01._label.pulseScaleNow(1, 2);
    this._fig2._topLeftTri._side20._label.pulseScaleNow(1, 2, 0, done);
    this._fig2._rH.pulseScaleNow(1, 2);
    this.diagram.animateNextFrame();
  }

  pulseTopRight(done: ?() => void = null) {
    this._fig2._topRightTri._side12._label.pulseScaleNow(1, 2);
    this._fig2._topRightTri._side20._label.pulseScaleNow(1, 2, 0, done);
    this._fig2._rH.pulseScaleNow(1, 2);
    this.diagram.animateNextFrame();
  }

  pulseEqn4() {
    this._4Eqn.pulseScaleNow(1, 1.3);
    this.diagram.animateNextFrame();
  }
}
