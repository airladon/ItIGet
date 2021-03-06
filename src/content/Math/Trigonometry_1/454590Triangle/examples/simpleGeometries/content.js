// @flow
// import Fig from 'figureone';
import * as React from 'react';
import SimpleFormatContent from '../../../../../../js/TopicFormat/SimpleFormatContent';
// import imgLink from '../../tile.png';
// import imgLinkGrey from '../../tile-grey.png';
import details from '../../details';
// $FlowFixMe
import content from './content.md';

class Content extends SimpleFormatContent {
  setTitle() {
    this.title = details.title;
    //  this.iconLink = imgLink;
    //  this.iconLinkGrey = imgLinkGrey;
    this.loadQRs([
      'Math/Geometry_1/Isosceles/base/',
      'Math/Geometry_1/Equilateral/base/',
      'Math/Geometry_1/RightAngleTriangles/base/',
      'Math/Geometry_1/Triangles/base',
      'Math/Geometry_1/AreaTriangle/base/',
      'Math/Geometry_1/AngleTypes/base/',
      // 'Math/Geometry_1/CongruentTriangles/base/',
      'Math/Geometry_1/Quadrangles/base/',
      'Math/Geometry_1/RectanglesAndSquares/base/',
    ]);
  }

  setContent() {
    this.sections = [
      <div key={0}>
      <div className="markdown" dangerouslySetInnerHTML={ { __html: content } }/>
      </div>,
    ];
  }
}

export default Content;
