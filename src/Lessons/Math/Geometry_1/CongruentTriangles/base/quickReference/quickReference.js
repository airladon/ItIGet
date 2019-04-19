// @flow
import Fig from 'figureone';
import lessonLayout from './layout';
// import * as html from '../../../../../../js/tools/htmlGenerator';
import PopupBoxCollection from '../../../../../LessonsCommon/DiagramCollectionPopup';
import details from '../../details';
import version from '../version';
import CommonCollection from '../common/diagramCollectionCommon';

const { Transform, Rect } = Fig;
const {
  click,
  highlight,
//   clickWord,
} = Fig.tools.html;

export class QRCongruentTriangles extends PopupBoxCollection {
  _collection: CommonCollection;

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
      CommonCollection,
    );
    this.hasTouchableElements = true;

    const coll = this._collection;
    const { colors } = this.layout;
    const modifiers = {
      side_lengths: highlight(colors.sides),
      angles: highlight(colors.angles),
      rotated: click(coll.rotateTriangle, [coll, null, null], colors.diagram.action),
      flipped: click(coll.simpleFlip, [coll, 1, null], colors.diagram.action),
    };
    this.setTitle('Congruent Triangles');
    this.setDescription(['Shapes are |congruent| when they are the |same size and shape|. Triangles are congruent when they have the same set of |side_lengths| and |angles|. Shapes remain congruent even if they are |rotated| or |flipped|.',
    ], modifiers);
    this.setLink(details.details.uid);
  }

  show() {
    this.setDiagramSpace({ location: 'top', ySize: 0.7, xSize: 0.5 });
    super.show();
    const collection = this._collection;
    const congruent = collection._congruentTriangles;
    congruent.showAll();
    collection.resetTriangle();
    congruent.isFlipped = false;
    congruent._tri1.setScenario('qrLeft');
    congruent._tri2.setScenario('qrRight');
    congruent._tri2.makeTouchable();
    congruent._tri2.isMovable = true;
    congruent._tri2.touchInBoundingRect = true;
    congruent._tri2.move.type = 'rotation';
    this.transformToQRWindow(collection, new Rect(-2, -1.5, 4, 2.2));
    this.diagram.animateNextFrame();
  }
}

export class QRAaa extends PopupBoxCollection {
  _collection: CommonCollection;

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
      CommonCollection,
    );
    this.hasTouchableElements = true;

    const coll = this._collection;
    const { colors } = this.layout;
    const modifiers = {
      different_side_lengths: highlight(colors.sides),
      three_angles: highlight(colors.angles),
    };
    this.setTitle('Angle Angle Angle Triangle Congruency Test');
    this.setDescription(['Triangles with the same |three_angles| can have |different_side_lengths|. Therefore knowing two triangles have the same three angles is |not sufficient to determine if they are congruent|.',
    ], modifiers);
    this.setLink(details.details.uid);
  }

  show() {
    this.setDiagramSpace({ location: 'top', ySize: 0.7, xSize: 0.5 });
    super.show();
    const collection = this._collection;
    const congruent = collection._congruentTriangles;
    congruent.showAll();
    congruent._tri1._side01.hide();
    congruent._tri1._side12.hide();
    congruent._tri1._side20.hide();
    congruent._tri2._side01.hide();
    congruent._tri2._side12.hide();
    congruent._tri2._side20.hide();
    collection.resetTriangle();
    congruent._tri1.setScenario('qrLeftAaa');
    congruent._tri2.setScenario('qrRightAaa');
    this.transformToQRWindow(collection, new Rect(-2, -1.5, 4, 2.2));
    this.diagram.animateNextFrame();
  }
}

export class QRSas extends PopupBoxCollection {
  _collection: CommonCollection;

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
      CommonCollection,
    );
    this.hasTouchableElements = true;

    // const coll = this._collection;
    const { colors } = this.layout;
    const modifiers = {
      two_sides_of_the_same_length: highlight(colors.sides),
      three_angles: highlight(colors.angles),
    };
    this.setTitle('Side Angle Side Triangle Congruency Test');
    this.setDescription([
      'If two triangles share |two_sides_of_the_same_length|, and the |angle_between| those two sides is also the same on both triangles, then the triangles |are congruent|.',
      'This case is often called the |Side Angle Side| case.',
    ], modifiers);
    this.setLink(details.details.uid);
  }

  show() {
    this.setDiagramSpace({ location: 'top', ySize: 0.7, xSize: 0.5 });
    super.show();
    const collection = this._collection;
    const congruent = collection._congruentTriangles;
    congruent.showAll();
    collection.resetTriangle();
    congruent._tri1.setScenario('qrLeft');
    congruent._tri2.setScenario('qrRight');
    congruent._tri1._side01.hide();
    congruent._tri1._angle1.hide();
    congruent._tri1._angle0.hide();
    congruent._tri2._side01.hide();
    congruent._tri2._angle1.hide();
    congruent._tri2._angle0.hide();
    this.transformToQRWindow(collection, new Rect(-2, -1.5, 4, 2.2));
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
    CongruentTriangles: QRCongruentTriangles,
    Aaa: QRAaa,
    Sas: QRSas,
  };
}

attachQuickReference1();

