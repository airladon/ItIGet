// @flow
import Fig from 'figureone';
import CommonTopicDiagram from '../../../../../common/CommonTopicDiagram';
import CommonDiagramCollection from '../../../../../common/DiagramCollection';

const {
  // DiagramElementPrimitive,
  DiagramObjectAngle,
  DiagramObjectLine,
  DiagramElementCollection,
  DiagramObjectPolyLine,
  Equation,
  Transform,
} = Fig;

export default class CommonCollection extends CommonDiagramCollection {
  _square: {
    _A1: { _label: Equation } & DiagramObjectLine;
    _A2: { _label: Equation } & DiagramObjectLine;
    _D: DiagramObjectLine;
    _451: DiagramObjectAngle;
    _452: DiagramObjectAngle;
    _right: DiagramObjectAngle;
    _square: DiagramObjectPolyLine;
    _split: DiagramObjectLine;
    _tri: DiagramObjectPolyLine;
  } & DiagramElementCollection;

  _eqn: Equation;

  constructor(
    diagram: CommonTopicDiagram,
    layout: Object,
    transform: Transform = new Transform('Common').rotate(0).translate(0, 0),
  ) {
    super(diagram, layout, transform);
    this.setPosition(this.layout.position);
    this.diagram.addElements(this.layout.addElements, this);
    // this.hasTouchableElements = true;
    this._square.setTransformCallback = this.updateSquareRotation.bind(this);
  }

  updateSquareRotation() {
    const r = this._square.getRotation();
    this._square.exec(['updateLabel', r], ['A1', 'A2', '451', '452', 'D']);
    this.diagram.animateNextFrame();
  }

  setTriEqnForms(form: string) {
    if (this._square._A1.isShown) {
      this._square._A1._label.showForm(form);
    }
    if (this._square._A2.isShown) {
      this._square._A2._label.showForm(form);
    }

    if (this._square._D.isShown) {
      this._square._D._label.showForm(form);
    }
    if (this._square._451.isShown) {
      this._square._451._label.showForm(form);
    }
    if (this._square._452.isShown) {
      this._square._452._label.showForm(form);
    }
  }

  goToTriEqnForms(form: string, done: ?() => void = null) {
    let allDoneCount = 0;
    const allDone = () => {
      allDoneCount += 1;
      if (allDoneCount === 3 && done != null) {
        done();
      }
    };
    this._square._A1._label.goToForm({
      name: form, duration: 1, animate: 'move', callback: allDone,
    });
    this._square._A2._label.goToForm({
      name: form, duration: 1, animate: 'move', callback: allDone,
    });
    this._square._D._label.goToForm({
      name: form, duration: 1, animate: 'move', callback: allDone,
    });
  }
}
