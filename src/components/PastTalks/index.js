import { connect } from 'react-redux';
import PastTalks from './PastTalks'

function mapStoreToProps(store){
    return {
        pastTalks: store.PastTalks.pastTalks
    };
}

export default connect(mapStoreToProps)(PastTalks);