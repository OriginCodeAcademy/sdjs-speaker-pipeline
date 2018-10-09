import initialState from '../../initialState';

export default function AdminLoginReducer(state = initialState.adminLogin, action) {
  const {type, payload} = action;
  switch (type) {
    case 'UPDATE_EMAIL_INPUT': {
      return {
        ...state,
        email: payload,
      };
    }

    case 'UPDATE_PASSWORD_INPUT': {
      return {
        ...state,
        password: payload,
      };
    }

    case 'SUBMIT_LOGIN_FULFILLED': {
      return {
        ...state,
        user: payload,
      };
    }

    case 'SUBMIT_LOGIN_FAILURE': {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
}
