import axios from 'axios';

export function updateEmailInput(input) {
  return {
    type: 'UPDATE_EMAIL_INPUT',
    payload: input,
  };
}

export function updatePasswordInput(input) {
  return {
    type: 'UPDATE_PASSWORD_INPUT',
    payload: input,
  };
}

export function submitLogin(credentials) {
  const {email, password} = credentials;
  return {
    type: 'SUBMIT_LOGIN',
    payload: axios
<<<<<<< Updated upstream
      .post('/api/Users/login', {email, password})
      // .post('/api/Users/login', {email: 'test@test.com', password: '1234'})
=======
      // .post('/api/Users/login', {email, password})
       .post('/api/Users/login', {email: 'now@now.com', password: '1234'})
>>>>>>> Stashed changes
      .then(res => res.data)
      .catch(err => {
        console.log('Post Error: ', err);
        return err;
      }),
  };
}
