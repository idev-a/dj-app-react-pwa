import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../components/homepage';
import Reset from '../components/reset';
import Forgot from '../components/forgot';
import Auth from '../components/auth';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class AppRouter extends Component {
  componentWillMount() {
    AOS.init()
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact={true}/>
          <Route path="/auth" component={Auth} exact={true}/>
          <Route path="/forgot" component={Forgot} exact={true}/>
          <Route path="/reset" component={Reset} exact={true}/>
        </Switch>
      </div>
    )
  }
}
