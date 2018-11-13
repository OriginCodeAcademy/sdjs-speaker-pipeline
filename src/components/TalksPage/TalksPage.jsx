import React, { Component } from 'react';
import Talks from '../Talks';
import PastTalks from '../PastTalks'

class TalksPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='talks-container'>
                <h1>All Talks</h1>
                <Talks 
                // filter={(talk) => talk.currentStatus === 'Pending'} 
                // include = {['Speaker', 'Talk', 'Current Status']}
                />
                <PastTalks />
            </div>
        )
    }
}

export default TalksPage;