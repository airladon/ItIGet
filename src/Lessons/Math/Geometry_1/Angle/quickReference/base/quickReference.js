// @flow
import Fig from 'figureone';
import lessonLayout from './layout';
// import * as html from '../../../../../../js/tools/htmlGenerator';
import PopupBoxCollection from '../../../../../LessonsCommon/DiagramCollectionPopup';

import CommonCollection from '../../explanation/base/diagramCollectionCommon';

const lessonUID = require.resolve('../../details').split('/').slice(-2, -1)[0];
const versionUID = require.resolve('./version').split('/').slice(-2, -1)[0];

const { Transform, Rect } = Fig;
const {
  click,
//   highlight,
//   clickWord,
} = Fig.tools.html;

export default class QRAngle extends PopupBoxCollection {
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

    const diag = this._collection;
    const { colors } = this.layout;
    const modifiers = {
      smaller: click(diag.rotateLine, [diag, 'small'], colors.lessSharp),
      larger: click(diag.rotateLine, [diag, 'large'], colors.moreSharp),
      Angle: click(diag.pulseFill, [diag], colors.angles),
      lines: click(diag.pulseLines, [diag], colors.lines),
    };
    this.setTitle('Angle');
    this.setDescription([
      '|Angle| is the corner formed by two lines. A |larger| angle is a |less sharp| corner, and a |smaller| angle is a |more sharp| corner.',
    ], modifiers);
    this.setLink(lessonUID);
  }

  show() {
    this.setDiagramSpace({ location: 'top', ySize: 0.7, xSize: 0.5 });
    super.show();
    const collection = this._collection;
    collection.show();
    const angle = collection._angle;
    angle._line1.showAll();
    angle._line2.showAll();
    angle._fill.show();
    angle._line1.setRotation(1);
    angle._line1.move.maxTransform.updateRotation(Math.PI * 0.95);
    angle._line1.move.minTransform.updateRotation(Math.PI * 0.05);
    angle._line1.makeTouchable();
    this.transformToQRWindow(collection, new Rect(-2, -0.8, 4, 2));
    this.diagram.animateNextFrame();
  }
}

function attachQuickReference1() {
  if (window.quickReference == null) {
    window.quickReference = {};
  }
  if (window.quickReference[lessonUID] == null) {
    window.quickReference[lessonUID] = {};
  }
  window.quickReference[lessonUID][versionUID] = {
    Main: QRAngle,
    // QR2: QRBoilerplate2,
  };
}

attachQuickReference1();
