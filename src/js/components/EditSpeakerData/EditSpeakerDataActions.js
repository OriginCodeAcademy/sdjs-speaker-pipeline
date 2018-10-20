import axios from 'axios';

export function getSpeakerDetails(credentials) {
  let speakerId = this.props.match.params.id;
  return {
    type: 'GET_SPEAKER_DETAILS',
    payload: axios
      .get(`/api/Speakers/${speakerId}`, { speakerId })
      .then(res => res.data)
      .catch(err => {
        console.log('Post Error: ', err);
        return err;
      }),
  };
}
