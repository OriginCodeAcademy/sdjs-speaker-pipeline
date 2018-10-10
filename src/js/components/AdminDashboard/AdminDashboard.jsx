import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {
  getSpeakers,
} from "./AdminDashboardActions";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, user } = this.props;
    dispatch(getSpeakers(user));
  }

  render() {
    const { allSpeakers } = this.props;
    return (
    <div>
      <h1>DASHBOARD</h1>
      <div className='table-body'>
        { allSpeakers.map((speaker) => {
          return <div key={speaker.id} className='table-row'><h5>{speaker.firstName}</h5></div>
        }) }
      </div>
    </div>
  )}
}

const AdminDashWithRouter = withRouter(AdminDashboard);
export default AdminDashWithRouter;