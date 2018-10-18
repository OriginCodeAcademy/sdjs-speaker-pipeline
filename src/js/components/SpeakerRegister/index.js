import {connect} from 'react-redux';
import SpeakerItem from './RegisterSpeaker';

function mapStoreToProps(store) {
  return {
    user: store.adminLogin.user,
    speakerDetails: store.speakerRegister.speakerDetails,
  };
}

export default connect(mapStoreToProps)(SpeakerRegister);