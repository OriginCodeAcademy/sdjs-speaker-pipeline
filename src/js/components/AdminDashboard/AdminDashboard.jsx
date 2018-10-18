<<<<<<< Updated upstream
import React, {Component} from 'react';
import {withRouter, Link, Redirect} from 'react-router-dom';
import {getSpeakers, submitLogout} from './AdminDashboardActions';
// import {showSpeakerItem} from '../SpeakerItem/SpeakerItemActions';
import {SpeakerItem} from '../SpeakerItem/SpeakerItem';
=======
import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import {
  getSpeakers,
} from "./AdminDashboardActions";
>>>>>>> Stashed changes

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    const {dispatch, user} = this.props;
    dispatch(getSpeakers(user));
  }

  handleLogout(e) {
    e.preventDefault();

    const {dispatch, user} = this.props;
    dispatch(submitLogout(user));
    this.setState({isLoggedIn: false});
  }

  render() {
    if (!this.state.isLoggedIn) {
      return <Redirect to="/login" />;
    }
    const {allSpeakers, user} = this.props;
    return (
<<<<<<< Updated upstream
      <div className="container-fluid dashboard col-md-10">
        <button className="btn-danger" onClick={this.handleLogout}>
          Logout
        </button>
=======
      <div className="dashboard-box">
        <div className="header-nav">
         <Link to="/login"><img src ="images/logo.png" className="header-logo"></img></Link>
            <div className="rnav">  
            <Link to="/login" className="header-link">
              <button className="blink">LOGOUT </button>
            </Link>  
          </div>
        </div>
      <div className="dash-pad">
      <h2 className="dash-title">SAN DIEGO JAVASCRIPT<br></br> ADMIN DASHBOARD</h2>
      <div className="container dashboard col-lg-10 col-md-10 col-sm-10">
      <div className="row" id="category">
      <h3 className= 'col-lg-2 d-categories'>FIRST NAME</h3>  
      <h3 className= 'col-lg-2 d-categories'>LAST NAME</h3>  
      <h3 className= 'col-lg-3 d-categories'>EMAIL</h3>  
      <h3 className= 'col-lg-3 d-categories'>DATE</h3>  
      <h3 className= 'col-lg-2 d-categories'>INFO</h3> 
      <h3 className= 'col-lg-12 n-categories'>SPEAKERS</h3> 
>>>>>>> Stashed changes

        <h2>
          SAN DIEGO JAVASCRIPT
          <br /> ADMIN DASHBOARD
        </h2>
        <div className="row" id="category">
          <h3 className="col-lg-12">SPEAKERS</h3>
        </div>
<<<<<<< Updated upstream
        {allSpeakers.map(speaker => {
          return (
            <div key={speaker.id} className="row" id="list">
              <br />
              <h3 className="col-lg-2">{speaker.firstName}</h3>
              <h3 className="col-lg-2">{speaker.lastName}</h3>
              <h3 className="col-lg-3">{speaker.email} </h3>
              <h3 className="col-lg-3">December 12 2018</h3>
              <div className="col-lg-2">
                <Link to={`/api/speakers/${speaker.id}`}>
                  <button className="more-info">info</button>
                </Link>
              </div>
              {/* <SpeakerItem
                // speaker={speaker.id}
                dispatch={this.props.dispatch}
              /> */}
            </div>
          );
        })}
      </div>
    );
  }
=======
        })
       }
    </div>
    </div>
    </div>
    
  )}
>>>>>>> Stashed changes
}

const AdminDashWithRouter = withRouter(AdminDashboard);
export default AdminDashWithRouter;
