import axios from 'axios';

export function showSpeakerItem(speaker) {
  return {
    type: 'GET_SPEAKER_ITEM',
    payload: axios
      .get(`/api/speakers/${speaker.id}`)
      .then(res => console.log('data', res.data))
      // .then(res => res.redirect(`/api/speakers/${speaker}`))
      .catch(err => {
        console.log('Error: ', err);
        return err;
      }),
  };
}
