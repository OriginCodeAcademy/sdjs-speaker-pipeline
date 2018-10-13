import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import AdminDashboardWithRouter from './components/AdminDashboard/index';
import AdminLogin from './components/AdminLogin/index';
import EditSpeakerData from './components/EditSpeakerData/EditSpeakerData';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" />
            <Route exact path="/login" component={AdminLogin} />
            <Route exact path="/admin" component={AdminDashboardWithRouter} />
            <Route exact path="/edit" component={EditSpeakerData} />
            <Route exact path="/speakers/:id" component={SpeakerDetails} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
