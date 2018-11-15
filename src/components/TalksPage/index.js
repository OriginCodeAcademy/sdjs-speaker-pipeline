import { connect } from 'react-redux';
import TalksPage from './TalksPage';

function mapStoreToProps(store){
    return {
        selectedOwner: store.TalksPage.selectedOwner
    };
}

export default connect(mapStoreToProps)(TalksPage);