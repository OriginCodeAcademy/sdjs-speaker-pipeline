import {connect} from 'react-redux';
import AdminDashboardWithRouter from './AdminDashboard';

function mapStoreToProps(store) {
  return {
    user: store.adminLogin.user,
    allSpeakers: store.adminDashboard.allSpeakers
  };
};

export default connect(mapStoreToProps)(AdminDashboardWithRouter);