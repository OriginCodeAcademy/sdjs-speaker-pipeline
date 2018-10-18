//set initial sate here
const initialState = {
  adminLogin: {
    user: null,
    email: '',
    password: '',
  },
  adminDashboard: {
    allSpeakers: [],
    adminLogout: '',
  },
  speakerItem: {
    speakerDetails: [],
  },
  speakerData: {editSpeakerData: []},
};

export default initialState;
