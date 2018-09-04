import React, { Component } from 'react';
import Home from './Home';
import SignUp from './SignUp'
import ThankYou from './ThankYou'
import {HashRouter as Router, Route} from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }


  render() {
    return (
         

    <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route  path="/signup" component={SignUp} />
      <Route  path="/thankyou" component={ThankYou} />
    </div>
  </Router>

    );
  }
}