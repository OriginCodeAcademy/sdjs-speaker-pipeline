import initialState from '../../initialState';

export default function AdminDashboardReducer(
  state = initialState.adminDashboard,
  action
) {
  const {type, payload} = action;

  switch (type) {
    case 'GET_SPEAKERS_FULFILLED': {
      return {
        ...state,
        allSpeakers: payload,
      };
    }

    case 'SUBMIT_LOGOUT_FULFILLED': {
      return {
        ...state,
        adminLogout: payload,
      };
    }

    default: {
      return state;
    }
  }
}
