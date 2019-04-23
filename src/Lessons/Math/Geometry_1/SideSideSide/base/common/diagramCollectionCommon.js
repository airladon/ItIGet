// @flow
import Fig from 'figureone';
import CommonLessonDiagram from '../../../../../LessonsCommon/CommonLessonDiagram';
import CommonDiagramCollection from '../../../../../LessonsCommon/DiagramCollection';

const {
  DiagramElementPrimative,
  DiagramObjectAngle,
  // DiagramElementCollection,
  Transform,
  DiagramObjectLine,
  DiagramElementCollection,
} = Fig;

export default class CommonCollection extends CommonDiagramCollection {
  _left: { _label: DiagramElementCollection } & DiagramObjectLine;
  _base: DiagramObjectLine;
  _right: { _label: DiagramElementCollection } & DiagramObjectLine;;
  _leftCircle: DiagramElementPrimative;
  _rightCircle: DiagramElementPrimative;
  _leftBottom: { _label: DiagramElementCollection } & DiagramObjectLine;
  _rightBottom: { _label: DiagramElementCollection } & DiagramObjectLine;
  _constructionLine: { _label: DiagramElementCollection } & DiagramObjectLine;
  _angleTopLeft: { _label: DiagramElementCollection } & DiagramObjectAngle;
  _angleBottomLeft: { _label: DiagramElementCollection } & DiagramObjectAngle;
  _angleTopRight: { _label: DiagramElementCollection } & DiagramObjectAngle;
  _angleBottomRight: { _label: DiagramElementCollection } & DiagramObjectAngle;
  location: 'top' | 'bottom';

  constructor(
    diagram: CommonLessonDiagram,
    layout: Object,
    transform: Transform = new Transform('Common').rotate(0).translate(0, 0),
  ) {
    super(diagram, layout, transform);
    this.setPosition(this.layout.position);
    this.diagram.addElements(this, this.layout.addElements);
    this.hasTouchableElements = true;
    this._left.makeTouchable();
    this._right.makeTouchable();
  }

  createConstructionLines(
    callback: ?() => void = null,
  ) {
    const leftRot = this._left.getRotation();
    const rightRot = this._right.getRotation();
    this._leftCircle.setRotation(leftRot);
    this._rightCircle.setRotation(rightRot);
    this._leftCircle.angleToDraw = 0;
    this._rightCircle.angleToDraw = 0;
    const createLeftCircle = (percent) => {
      this._leftCircle.angleToDraw = percent * Math.PI * 2;
      this._left.setRotation(percent * Math.PI * 2 + leftRot);
    };
    const createRightCircle = (percent) => {
      this._rightCircle.angleToDraw = percent * Math.PI * 2;
      this._right.setRotation(percent * Math.PI * 2 + rightRot);
    };
    this.animations.cancelAll();
    this.animations.new()
      .custom({ callback: createLeftCircle.bind(this), duration: 1 })
      .custom({ callback: createRightCircle.bind(this), duration: 1 })
      .whenFinished(callback)
      .start();
    this.diagram.animateNextFrame();
  }

  toggleIntersects(goTo: ?'top' | 'bottom', done: ?() => void = null) {
    let target = 'top';
    if (this.location === 'top') {
      target = 'bottom';
    }
    if (goTo != null) {
      target = goTo;
    }
    this.location = target;
    this.animations.cancelAll();
    this.animations.new()
      .scenarios({ target, duration: 0.5 })
      .whenFinished(done)
      .start();
    this.diagram.animateNextFrame();
  }

  updateLabels() {
    if (this._left.isShown) {
      this._left.updateLabel();
    }
    if (this._right.isShown) {
      this._right.updateLabel();
    }
    if (this._leftBottom.isShown) {
      this._leftBottom.updateLabel();
    }
    if (this._rightBottom.isShown) {
      this._rightBottom.updateLabel();
    }
    if (this._angleBottomLeft.isShown) {
      this._angleBottomLeft.updateLabel();
    }
    if (this._angleTopLeft.isShown) {
      this._angleTopLeft.updateLabel();
    }
    this.diagram.animateNextFrame();
  }

  pulseLeftLabels() {
    this._left.showAll();
    this._leftBottom.showAll();
    this._left._label.pulseScaleNow(1, 2);
    this._leftBottom._label.pulseScaleNow(1, 2);
    this.diagram.animateNextFrame();
  }

  pulseRightLabels() {
    this._right.showAll();
    this._rightBottom.showAll();
    this._right._label.pulseScaleNow(1, 2);
    this._rightBottom._label.pulseScaleNow(1, 2);
    this.diagram.animateNextFrame();
  }

  colorCircles(color: Array<number>) {
    this._leftCircle.setColor(color);
    this._rightCircle.setColor(color);
    this.diagram.animateNextFrame();
  }

  setDefaultColors() {
    this._left.setColor(this.layout.colors.sides);
    this._right.setColor(this.layout.colors.sides);
    this._leftBottom.setColor(this.layout.colors.sides);
    this._rightBottom.setColor(this.layout.colors.sides);
    this._constructionLine.setColor(this.layout.colors.sides);
    this._base.setColor(this.layout.colors.sides);
    this._angleTopLeft.setColor(this.layout.colors.angles);
    this._angleBottomLeft.setColor(this.layout.colors.angles);
    this._angleTopRight.setColor(this.layout.colors.angles);
    this._angleBottomRight.setColor(this.layout.colors.angles);
    this.diagram.animateNextFrame();
  }

  colorRightIsosceles() {
    this.setDefaultColors();
    this._left.setColor(this.layout.colors.disabled);
    this._leftBottom.setColor(this.layout.colors.disabled);
    this._base.setColor(this.layout.colors.disabled);
    this._angleTopLeft.setColor(this.layout.colors.disabled);
    this._angleBottomLeft.setColor(this.layout.colors.disabled);
    this.diagram.animateNextFrame();
  }

  colorLeftIsosceles() {
    this.setDefaultColors();
    this._right.setColor(this.layout.colors.disabled);
    this._rightBottom.setColor(this.layout.colors.disabled);
    this._base.setColor(this.layout.colors.disabled);
    this._angleTopRight.setColor(this.layout.colors.disabled);
    this._angleBottomRight.setColor(this.layout.colors.disabled);
    this.diagram.animateNextFrame();
  }

  pulseLeftIsosceles() {
    this.colorLeftIsosceles();
    this._left.pulseWidth();
    this._leftBottom.pulseWidth();
    this._constructionLine.pulseWidth();
    this.diagram.animateNextFrame();
  }

  pulseLeftIsoscelesAngles() {
    this.colorLeftIsosceles();
    this._angleTopLeft.pulseScaleNow(1, 1.3);
    this._angleBottomLeft.pulseScaleNow(1, 1.3);
    this.diagram.animateNextFrame();
  }

  pulseRightIsoscelesAngles() {
    this.colorRightIsosceles();
    this._angleTopRight.pulseScaleNow(1, 1.3);
    this._angleBottomRight.pulseScaleNow(1, 1.3);
    this.diagram.animateNextFrame();
  }
}
