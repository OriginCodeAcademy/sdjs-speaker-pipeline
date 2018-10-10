import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import AdminDashboardWithRouter from './components/AdminDashboard/index'
import AdminLogin from './components/AdminLogin/index';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
          <Route exact path='/'/>
          <Route path='/login' component={AdminLogin} />
          <Route path='/admin' component={AdminDashboardWithRouter} />
          </div>
        </Router>
      </div>
      );
  }
}

export default App;