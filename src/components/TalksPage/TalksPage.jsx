import React, { Component } from 'react';
import { handleOwnerFilter } from './TalksPageActions';
import Talks from '../Talks';
import PastTalks from '../PastTalks';
import AdminNav from '../AdminNav/AdminNav';

class TalksPage extends Component {
    constructor(props) {
        super(props);
        this.handleOwnerFilter = this.handleOwnerFilter.bind(this)
    }

    handleOwnerFilter(e) {
        const { dispatch } = this.props;
        dispatch(handleOwnerFilter(e.target.value));
    }

    render() {
        const { selectedOwner } = this.props;
        let filterProp = (talk) => talk
        if (selectedOwner !== '') {
            filterProp = (talk) => talk.owner == selectedOwner
        }

        return (
            <div className='top-div'>
                <AdminNav />
                <div className='talks-page-container'>
                    <div className='talks-allTalks'>
                        <h1>All Talks</h1>
                        <div className='talks-owner-filter'>
                            Filter by owner
                            <select onChange={this.handleOwnerFilter}>
                                <option value=''>All Owners</option>
                                <option value='Owner 1'>Owner 1</option>
                                <option value='Owner 2'>Owner 2</option>
                                <option value='Owner 3'>Owner 3</option>
                            </select>
                        </div>
                        <div className='talk-component-container'>
                            <Talks
                                styling='talk-component-on-talks-page'
                                filter={filterProp}
                            />
                        </div>
                    </div>
                </div>
                <div className='talks-pastTalks'>
                    <h1>Past Talks</h1>
                    <div className='talk-component-container'>
                        <PastTalks
                            styling='talk-component-on-talks-page'
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default TalksPage;