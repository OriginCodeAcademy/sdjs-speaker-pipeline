import {combineReducers} from 'redux';
import AdminLoginReducer from './components/AdminLogin/AdminLoginReducer';
import AdminDashboardReducer from './components/AdminDashboard/AdminDashboardReducer';


const rootReducer = combineReducers({
  adminLogin: AdminLoginReducer,
  adminDashboard: AdminDashboardReducer
});

export default rootReducer;
