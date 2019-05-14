// @flow
import Fig from 'figureone';
import { PresentationLessonContent } from '../../../../../../js/Lesson/PresentationLessonContent';
import lessonLayout from './layout';
import details from '../../details';
import version from './version';
import imgLink from '../../tile.png';
import imgLinkGrey from '../../tile-grey.png';
import CommonLessonDiagram from '../../../../../LessonsCommon/CommonLessonDiagram';

const { click } = Fig.tools.html;
const layout = lessonLayout();

const lessonUID = require.resolve('../../details').split('/').slice(-2, -1)[0];
const versionUID = require.resolve('./version').split('/').slice(-2, -1)[0];

const qrids = version.details.references;

class Content extends PresentationLessonContent {
  setTitle() {
    this.title = details.details.title;
    this.iconLink = imgLink;
    this.iconLinkGrey = imgLinkGrey;
  }

  setDiagram(htmlId: string = '') {
    this.diagram = new CommonLessonDiagram({ htmlId }, layout);
    this.loadQRs([
      `${lessonUID}/${versionUID}`,
    ]);
  }

  addSections() {
    this.addSection({
      title: 'QR Test',
      setContent: () => {
        let out = '<p>Quick Reference Popups</p><p></p>';
        qrids.forEach((qrid) => {
          out += `<p>|${qrid}|</p>`;
        });
        return out;
      },
      modifiers: () => {
        const out = {};
        qrids.forEach((qrid) => {
          out[qrid] = click(this.showQR, [this, lessonUID, qrid]);
        });
        return out;
      },
    });
  }
}

export default Content;