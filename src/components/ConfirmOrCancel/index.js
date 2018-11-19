import { connect } from 'react-redux';
import ConfirmOrCancel from './ConfirmOrCancel';

function mapStoreToProps(store){
    return {
        accessToken : store.AdminLogin.accessToken,
        talkInfo    : store.Talks.talkInfo,
        speakerToken: store.ConfirmOrCancel.speakerToken,
        id          : store.ConfirmOrCancel.id
    };
}

export default connect(mapStoreToProps)(ConfirmOrCancel);