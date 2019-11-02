import React, { Component } from 'react';
import { Icon } from 'antd';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <nav className="xnav flex-center">
        <ul className="ul-nav">
          <li className="mr-auto">

          </li>
          <li>
            <Icon className="icon-size pointer text-white" type="menu" />
          </li>
        </ul>
      </nav>
    )
  }
}
