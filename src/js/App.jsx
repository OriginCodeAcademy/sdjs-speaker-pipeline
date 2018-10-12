<<<<<<< HEAD
import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import AdminDashboardWithRouter from './components/AdminDashboard/index'
import AdminLogin from './components/AdminLogin/index';
=======
import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import AdminDashboardWithRouter from './components/AdminDashboard/index';
import AdminLogin from './components/AdminLogin/index';
import EditSpeakerData from './components/EditSpeakerData/EditSpeakerData';
>>>>>>> b079517be8b716667fc82837939e00670fc75220

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
<<<<<<< HEAD
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
=======
            <Route exact path="/" />
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
>>>>>>> b079517be8b716667fc82837939e00670fc75220
