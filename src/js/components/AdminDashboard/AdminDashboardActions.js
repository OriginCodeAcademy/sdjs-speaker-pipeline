import axios from 'axios';

export function getSpeakers(User) {
  return {
    type: 'GET_SPEAKERS',
    payload: axios
      .get('/api/speakers/', {headers: {Authorization: User.id}})
      .then(res => res.data)
      .catch(err => {
        console.log('Error: ', err);
      }),
  };
}

export function submitLogout(user) {
  return {
    type: 'LOGOUT',
    payload: axios.post(`/api/Users/logout?access_token=${user.id}`, function(
      req,
      res,
      next
    ) {
      if (!req.accessToken) return res.sendStatus(401);
      User.logout(req.accessToken.id, function(err) {
        if (err) return next(err);
      });
    }),
  };
}
