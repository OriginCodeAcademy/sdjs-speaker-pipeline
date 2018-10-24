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
  editSpeakerData: {
    editSpeakerData: [],
  },
  speakerRegister: {
    speakerFirstName: '',
    speakerLastName: '',
    speakerEmail: '',
    speakerPhone: '',
    eventDate: '',
    speakerGithub: '',
    speakerLinkedin: '',
    speakerWebsite: '',
  }
};

export default initialState;
