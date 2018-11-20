import { connect } from 'react-redux';
import TalksPage from './TalksPage';

function mapStoreToProps(store){
    return {
        selectedOwner: store.TalksPage.selectedOwner,
        accessToken: store.AdminLogin.accessToken,
        adminList: store.Organizers.adminList
    };
}

export default connect(mapStoreToProps)(TalksPage);
