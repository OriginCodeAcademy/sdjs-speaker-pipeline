import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {getSpeakers} from './AdminDashboardActions';

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch, user} = this.props;
    dispatch(getSpeakers(user));
  }

  render() {
    const {allSpeakers} = this.props;
    return (
      <div className="container-fluid dashboard col-md-10">
        <h2>
          SAN DIEGO JAVASCRIPT
          <br /> ADMIN DASHBOARD
        </h2>
        <div className="row" id="category">
          <h3 className="col-lg-12">SPEAKER</h3>
        </div>
        {allSpeakers.map(speaker => {
          return (
            <div key={speaker.id} className="row" id="list">
              <br />
              <h3 className="col-lg-2">{speaker.firstName}</h3>
              <h3 className="col-lg-2">{speaker.lastName}</h3>
              <h3 className="col-lg-3">{speaker.email} </h3>
              <h3 className="col-lg-3">December 12 2018</h3>
              <div className="col-lg-2">
                <button className="more-info">info</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const AdminDashWithRouter = withRouter(AdminDashboard);
export default AdminDashWithRouter;
