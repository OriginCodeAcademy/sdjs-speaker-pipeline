import React, { Component } from 'react';
import { getPastTalks } from './PastTalksActions'

class PastTalks extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(getPastTalks());
    }

    render(){
        const { pastTalks } = this.props;
        return(
            
            <div>
                <div>
                    <h1>Past Talks: </h1>
                </div>
                <div>
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Event</th>
                            <th>Speaker</th>
                        </tr>
                        {pastTalks.map(talk => (
                            <tr>
                                <td>{talk.date}</td>
                                <td>{talk.event}</td>
                                <td>{talk.speaker}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        )
    }
}

export default PastTalks