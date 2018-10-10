import initialState from '../../initialState';

export default function AdminDashboardReducer(state = initialState.adminDashboard, action) {
  const {type, payload} = action;

  switch(type) {
    case 'GET_SPEAKERS_FULFILLED': {
      return {
        ...state,
        allSpeakers: payload
      };
    }
    default: {
      return state;
    }
  }
}