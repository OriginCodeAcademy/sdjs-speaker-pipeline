import {combineReducers} from 'redux';
import AdminLoginReducer from './components/AdminLogin/AdminLoginReducer';
import AdminDashboardReducer from './components/AdminDashboard/AdminDashboardReducer';
import SpeakerItemReducer from './components/SpeakerItem/SpeakerItemReducer';
import EditSpeakerDataReducer from './components/EditSpeakerData/EditSpeakerDataReducer';
import SpeakerRegisterReducer from './components/SpeakerRegister/SpeakerRegisterReducer';

const rootReducer = combineReducers({
  adminLogin: AdminLoginReducer,
  adminDashboard: AdminDashboardReducer,
  speakerItem: SpeakerItemReducer,
  editSpeakerData: EditSpeakerDataReducer,
  speakerRegister: SpeakerRegisterReducer,
});

export default rootReducer;
