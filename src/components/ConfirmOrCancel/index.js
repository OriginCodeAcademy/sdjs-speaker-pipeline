import { connect } from 'react-redux';
import ConfirmOrCancel from './ConfirmOrCancel';

function mapStoreToProps(store){
    return {
        accessToken: store.AdminLogin.token,
        talkInfo: store.Talks.talkInfo,
    };
}

export default connect(mapStoreToProps)(ConfirmOrCancel);