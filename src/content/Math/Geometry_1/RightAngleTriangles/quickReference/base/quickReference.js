// @flow
import React from 'react';
import Fig from 'figureone';
import StaticQR from '../../../../../../js/components/staticQR';
import { attachQuickReference } from '../../../../../../js/tools/misc';
import diagramLayout from './layout';
import PopupBoxCollection from '../../../../../common/DiagramCollectionPopup';
import CommonCollection from './collection';
import details from '../../details';
import version from './version';
import area from './area.md';
import right from './right.md';
import pythagorus from './pythagorus.md';
import hypotenuse from './hypotenuse.md';

const topicUID = details.uid;
const versionUID = version.uid;

const { Transform, Rect } = Fig;
const {
  click,
//   highlight,
} = Fig.tools.html;

export class QRMain extends PopupBoxCollection {
  _collection: CommonCollection;

  constructor(
    diagram: Object,
    transform: Transform = new Transform().scale(1, 1).translate(0, 0),
  ) {
    super(diagram, diagramLayout(), transform, 'collection', CommonCollection);

    const coll = this._collection;
    const { colors } = this.layout;
    const modifiers = {
      longest_side: click(
        coll.pulseOpposite, [coll], colors.qrRightAngleTriangle_sides,
      ),
      right_angle: click(
        coll.pulseRightAngle, [coll], colors.qrRightAngleTriangle_rightAngle,
      ),
      equal: click(
        coll.pulseEquation, [coll], colors.qrRightAngleTriangle_sides,
      ),
    };
    this.setTitle('Right Angle Triangle');
    this.setDescription([
      'A |right angle triangle|, is a triangle that has a |right_angle|. The |longest_side| is opposite the right angle, and is called the |hypotenuse|.',
      'The square of the hypotenuse\'s length is |equal| to the sum of the square of the other two sides.',
    ], modifiers);
    this.setLink(`${details.path}/${details.uid}/explanation/base?page=1`);
  }

  show() {
    super.show();
    const coll = this._collection;
    coll._tri.showAll();
    coll._tri._angle0.hide();
    coll._tri._angle2.hide();
    coll._eqn.showForm('0');
    coll.setScenarios('qr');
    this.setDiagramSpace({ location: 'left', size: 0.5 });
    this.transformToQRWindow(coll, new Rect(-2, -1.5, 4, 3));
    this.diagram.animateNextFrame();
  }
}

export class QRPythagorus extends PopupBoxCollection {
  _collection: CommonCollection;

  constructor(
    diagram: Object,
    transform: Transform = new Transform().scale(1, 1).translate(0, 0),
  ) {
    super(diagram, diagramLayout(), transform, 'collection', CommonCollection);

    const coll = this._collection;
    const { colors } = this.layout;
    const modifiers = {
      hypotenuse: click(
        coll.pulseOpposite, [coll], colors.qrRightAngleTriangle_sides,
      ),
      two_side: click(
        coll.pulsePerpendicularSides, [coll], colors.qrRightAngleTriangle_sides,
      ),
      Pythagorean_Theorem: click(
        coll.pulseEquation, [coll], colors.qrRightAngleTriangle_sides,
      ),
    };
    this.setTitle('Pythagorean Theorem');
    this.setDescription([
      'The |Pythagorean_Theorem| relates the |side lengths| of a |right angle triangle|.',
      'For any right angle triangle, the |square| of the |hypotenuse| length is equal to the |sum of the squares| of the remaining |two_side| lengths.',
    ], modifiers);
    this.setLink(`${details.path}/${details.uid}/explanation/base?page=35`);
  }

  show() {
    super.show();
    const coll = this._collection;
    coll._tri.showAll();
    coll._tri._angle0.hide();
    coll._tri._angle2.hide();
    coll._eqn.showForm('0');
    coll.setScenarios('qr');
    this.setDiagramSpace({ location: 'left', size: 0.5 });
    this.transformToQRWindow(coll, new Rect(-2, -1.4, 4, 2.4));
    this.diagram.animateNextFrame();
  }
}

export class QRRightAngleTriangleArea extends PopupBoxCollection {
  _collection: CommonCollection;

  constructor(
    diagram: Object,
    transform: Transform = new Transform().scale(1, 1).translate(0, 0),
  ) {
    super(diagram, diagramLayout(), transform, 'collection', CommonCollection);
    const coll = this._collection;
    const { colors } = this.layout;
    const modifiers = {
      perpendicular_sides: click(
        coll.pulsePerpendicularSides, [coll], colors.qrRightAngleTriangle_sides,
      ),
    };
    this.setTitle('Area of Right Angle Triangle');
    this.setDescription([
      'The area of a |right angle triangle| is half the product of the |perpendicular_sides|.',
    ], modifiers);
    this.setLink(`${details.path}/${details.uid}/explanation/base?page=6`);
  }

  show() {
    super.show();
    const coll = this._collection;
    coll._tri.showAll();
    coll._tri._angle0.hide();
    coll._tri._angle2.hide();
    coll._tri._side20.hide();
    coll._eqn.showForm('area');
    coll.setScenarios('qr');
    this.setDiagramSpace({ location: 'left', size: 0.5 });
    this.transformToQRWindow(coll, new Rect(-2, -1.4, 4, 2.4));
    this.diagram.animateNextFrame();
  }
}

attachQuickReference(details.path, topicUID, versionUID, {
  DefinitionPres: QRMain,
  PythagorusPres: QRPythagorus,
  AreaPres: QRRightAngleTriangleArea,
  Area: <StaticQR
      title="Right Angle Triangle Area"
      content={area}
      link={`${details.path}/${details.uid}/summary/base?page=3`}
  />,
  Pythagorus: <StaticQR
      title="Pythagorean Theorem"
      content={pythagorus}
      link={`${details.path}/${details.uid}/summary/base?page=3`}
  />,
  Definition: <StaticQR
      title="Right Angle Triangle"
      content={right}
      link={`${details.path}/${details.uid}/summary/base?page=3`}
  />,
  Hypotenuse: <StaticQR
      title="Hypotenuse"
      content={hypotenuse}
      link={`${details.path}/${details.uid}/summary/base?page=3`}
  />,
});
