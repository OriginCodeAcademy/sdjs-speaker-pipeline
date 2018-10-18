import {connect} from 'react-redux';
import EditSpeakerData from './EditSpeakerData';

function mapStoreToProps(store) {
  return {
    user: store.adminLogin.user,
    editSpeakerData: store.speakerData.editSpeakerData,
  };
}

export default connect(mapStoreToProps)(EditSpeakerData);
