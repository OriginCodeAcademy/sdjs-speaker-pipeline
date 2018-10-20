import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import AdminDashboardWithRouter from './components/AdminDashboard/index';
import AdminLogin from './components/AdminLogin/index';
import EditSpeakerData from './components/EditSpeakerData/EditSpeakerData';
import Landing from './components/Landing/Landing';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={AdminLogin} />
            <Route path="/admin" component={AdminDashboardWithRouter} />
            <Route path="/edit" component={EditSpeakerData} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
