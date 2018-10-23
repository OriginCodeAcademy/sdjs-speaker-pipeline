import {connect} from 'react-redux';
import SpeakerRegister from './SpeakerRegister';

function mapStoreToProps(store) {
  return {
    speakerFirstName: store.speaker.speakerFirstName,
    speakerLastName: store.speaker.speakerLastName,
    speakerEmail: store.speaker.speakerEmail
  };
}

export default connect(mapStoreToProps)(SpeakerRegister);