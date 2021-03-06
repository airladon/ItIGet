// @flow

import * as React from 'react';
// import LoginTitle from './loginTitle';
// import LearningPathNavigator from './learningPathNavigator';
// import HomeBanner from './homeBanner';


type Props = {
  isLoggedIn: boolean;
  username: string;
  content: string;
};

export default class ViewAbout extends React.Component<Props> {
  // eslint-disable-next-line class-methods-use-this
  render() {
    // const props = Object.assign({}, this.props);
    // delete props.active;
    return <div>
      <main>
      <div className='policy_text_container'>
        { /* <LoginTitle title=''/> */ }
        { /* <div className='vertical_blank_space'/> */ }
        <div className="markdown" dangerouslySetInnerHTML={ { __html: this.props.content } }/>
      </div>
      <div className='vertical_blank_space'/>
      <div className='vertical_blank_space'/>
      </main>
    </div>;
  }
}
