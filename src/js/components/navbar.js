// @flow

import * as React from 'react';
import Button from './button';
// import '../../css/style.scss';
// import DropDownButton from './dropDownButton';

type Props = {
  active?: string;
};

type State = {
  loginLink: string;
  loginText: string;
};

export default class Navbar extends React.Component
                                    <Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      // isLoggedIn: false,
      loginText: 'Login',
      loginLink: '/login',
    };

    // const request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    // request.open('GET', '/isloggedin', true);

    fetch('/isloggedin')
    .then(data => data.json())
    .then(res => this.setLogin(res))
    // .then(response => this.setLogin(response));
    // request.onload = function onload() {
    //   if (this.response === '0') {
    //     this.setState({
    //       loginText: 'Login',
    //       loginLink: '/login',
    //     });
    //   } else {
    //     this.setState({
    //       loginText: 'Logout',
    //       loginLink: '/logout',
    //     });
    //   }
    // };

    // request.send();
  }

  componentDidMount() {
    fetch('/isloggedin')
    .then(data => data.json())
    .then(res => this.setLogin(res))
  }

  setLogin(login: string) {
    console.log('response', login)
    if (login === 'true') {
      this.setState({
        loginText: 'Logout',
        loginLink: '/logout',
      });
    } else {
      this.setState({
        loginText: 'Login',
        loginLink: '/login',
      });
    }
  }

  render() {
    const props = Object.assign({}, this.props);
    delete props.active;

    const body =
    <div>
      <div className="navbar-container">
        <a className="navbar-icon-container"
           href="/">
          <img className="navbar-icon"
               src="/static/icon-lg.png"/>
        </a>
        <div className="navbar-text navbar-left login_button">
          <a href={this.state.loginLink}>{this.state.loginText}</a>
        </div>
        {/*
        <div className="navbar-text navbar-left">
          Plus
        </div>
        <div className="navbar-text navbar-left">
         <DropDownButton
          className="navbar_lessons_dropdown"
          label="lessons"
          direction="down"
          xAlign="left"
          list={[
            { label: 'item 1', link: '/' },
            { label: 'item 2', link: '/' },
            { label: 'item 3', link: '/' },
          ]}/>
        </div>
      */}
      </div>
    </div>;
    return <div>
      {body}
    </div>;
  }
}
