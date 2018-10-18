import {connect} from 'react-redux';
import SpeakerItem from './SpeakerItem';

function mapStoreToProps(store) {
  return {
    user: store.adminLogin.user,
    speakerDetails: store.speakerItem.speakerDetails,
  };
}

export default connect(mapStoreToProps)(SpeakerItem);
