// @flow
import Fig from 'figureone';
import lessonLayout from './layout';
import PopupBoxCollection from '../../../../../LessonsCommon/DiagramCollectionPopup';
import details from '../../details';
import version from '../version';
import QuadCollection from '../common/diagramCollectionQuad';
import RectCollection from '../common/diagramCollectionRect';
import SquareCollection from '../common/diagramCollectionSquare';

const { Transform, Rect } = Fig;

export class QRQuadrangle extends PopupBoxCollection {
  _quad: QuadCollection;

  constructor(
    diagram: Object,
    transform: Transform = new Transform().scale(1, 1).translate(0, 0),
  ) {
    const layout = lessonLayout();
    super(
      diagram,
      layout,
      transform,
      'quad',
      QuadCollection,
    );
    this.hasTouchableElements = true;

    const modifiers = {};

    this.setTitle('Quadrangle');
    this.setDescription('A |Quadrangle| is a shape with |four sides|, and |four angles|. All the angles within a quadrangle add up to |360º| (|2π radians|).', modifiers);
    this.setLink(details.details.uid);
  }

  show() {
    this.setDiagramSpace({ location: 'top', ySize: 0.7, xSize: 0.5 });
    super.show();
    const quad = this._quad;
    quad.show();
    quad._quad1.show();
    quad._quad2.show();
    quad._quad3.show();
    // quad.transform.updateScale(0.6, 0.6);
    quad.setPosition(this.layout.quadPosition);
    this.transformToQRWindow(quad, new Rect(-1.6, -1.2, 3.2, 2.4));
    this.diagram.animateNextFrame();
  }
}

export class QRRectangle extends PopupBoxCollection {
  _collection: RectCollection;

  constructor(
    diagram: Object,
    transform: Transform = new Transform().scale(1, 1).translate(0, 0),
  ) {
    const layout = lessonLayout();
    super(
      diagram,
      layout,
      transform,
      'collection',
      RectCollection,
    );
    this.hasTouchableElements = true;

    const modifiers = {};

    this.setTitle('Rectangle');
    this.setDescription('A |Rectangle| is a special type of quadrangle where all |angles are 90º| and |opposite sides are equal and parallel|.', modifiers);
    this.setLink(details.details.uid);
  }

  show() {
    this.setDiagramSpace({ location: 'top', ySize: 0.7, xSize: 0.5 });
    super.show();
    const collection = this._collection;
    collection.show();
    collection._rect.show();
    collection._rect._lineA.showLineOnly();
    // collection._rect._lineA._line.show();
    collection._rect._lineB.showLineOnly();
    // collection._rect._lineB._line.show();
    collection._rect._lineC.showLineOnly();
    // collection._rect._lineC._line.show();
    collection._rect._lineD.showLineOnly();
    // collection._rect._lineD._line.show();
    collection._rect._rightAngle1.showAll();
    collection._rect._rightAngle2.showAll();
    collection._rect._rightAngle3.showAll();
    collection._rect._rightAngle4.showAll();
    // collection.transform.updateScale(0.7, 0.7);
    collection.setPosition(this.layout.rectPosition);
    this.transformToQRWindow(collection, new Rect(-1.7, -1.2, 3.4, 2.4));
    this.diagram.animateNextFrame();
  }
}

export class QRSquare extends PopupBoxCollection {
  _collection: SquareCollection;

  constructor(
    diagram: Object,
    transform: Transform = new Transform().scale(1, 1).translate(0, 0),
  ) {
    const layout = lessonLayout();
    super(
      diagram,
      layout,
      transform,
      'collection',
      SquareCollection,
    );
    this.hasTouchableElements = true;

    const modifiers = {};

    this.setTitle('Square');
    this.setDescription('A |Square| is a special type of rectangle where all |angles are 90º|, all |sides have equal length|, and |opposite sides are parallel|.', modifiers);
    this.setLink(details.details.uid);
  }

  show() {
    this.setDiagramSpace({ location: 'auto', ySize: 0.7, xSize: 0.5 });
    super.show();
    const collection = this._collection;
    collection.show();
    collection._square.show();
    collection._square._lineA.showLineOnly();
    // collection._square._lineA._line.show();
    collection._square._lineB.showLineOnly();
    // collection._square._lineB._line.show();
    collection._square._lineC.showLineOnly();
    // collection._square._lineC._line.show();
    collection._square._lineD.showLineOnly();
    // collection._square._lineD._line.show();
    collection._square._rightAngle1.showAll();
    collection._square._rightAngle2.showAll();
    collection._square._rightAngle3.showAll();
    collection._square._rightAngle4.showAll();
    // collection.transform.updateScale(0.7, 0.7);
    collection.setPosition(this.layout.squarePosition);
    this.transformToQRWindow(collection, new Rect(-1.5, -1.4, 3, 2.4));
    this.diagram.animateNextFrame();
  }
}

function attachQuickReference1() {
  if (window.quickReference == null) {
    window.quickReference = {};
  }
  if (window.quickReference[details.details.uid] == null) {
    window.quickReference[details.details.uid] = {};
  }
  window.quickReference[details.details.uid][version.details.uid] = {
    Main: QRQuadrangle,
    Rectangle: QRRectangle,
    Square: QRSquare,
  };
}

attachQuickReference1();
