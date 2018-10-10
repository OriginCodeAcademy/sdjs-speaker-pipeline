import axios from 'axios';

export function getSpeakers(User) {
  return {
    type: 'GET_SPEAKERS',
    payload: axios
      .get('/api/speakers/', { headers: { Authorization: User.id } })
      .then(res => res.data)
      .catch(err => {
        console.log('Error: ', err);
      })
  };
}