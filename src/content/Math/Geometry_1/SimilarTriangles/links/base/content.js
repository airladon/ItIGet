// @flow
// import Fig from 'figureone';
import * as React from 'react';
import SimpleFormatContent from '../../../../../../js/TopicFormat/SimpleFormatContent';
// import imgLink from '../../tile.png';
// import imgLinkGrey from '../../tile-grey.png';
import details from '../../details';

import version from './version';

class Content extends SimpleFormatContent {
  setTitle() {
    this.title = details.title;
    // this.iconLink = imgLink;
    // this.iconLinkGrey = imgLinkGrey;
  }

  setContent() {
    this.sections = [
      <div key="0" className="approach__links_table__disclaimer">
        <p style={{ marginBottom: '3em' }}>
          {'These websites are not administered by This I Get. We don\'t control their availability, accuracy or policies.'}
        </p>
        <p>
        </p>
      </div>,
      { links: version.links },
      <div key="1" className="approach__links_table__disclaimer">
        <p style={{ marginTop: '3em' }}>
          {'If you visit a link, then you can rate the link for your own future reference, and for others that haven\'t yet visited it. If the link is broken or the content has changed and is no longer appropriate, then please let us know at '}
          <a
            href="mailto:feedback@thisiget.com?Subject=Feedback"
            className="approach__links_table__disclaimer_email"
            >
            feedback@thisiget.com
          </a>
          {'.'}
        </p>
      </div>,
    ];
  }
}

export default Content;
