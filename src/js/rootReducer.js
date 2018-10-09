import {combineReducers} from 'redux';
import AdminLoginReducer from './components/AdminLogin/AdminLoginReducer';


const rootReducer = combineReducers({
  adminLogin: AdminLoginReducer,
});

export default rootReducer;
