import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { handleSpeakerToken, handleTalkId, changeTalkStatus } from '../ConfirmOrCancel/ConfirmOrCancelActions'

class ConfirmOrCancel extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props;
        const urlParams = new URLSearchParams(this.props.location.search);
        const t = urlParams.get('t');
        const id = urlParams.get('id');
        console.log('this is t: ',t)
        console.log('this is id: ',id)
        dispatch(handleSpeakerToken(t));
        dispatch(handleTalkId(id));
    }

    handleSubmitStatus(e) {
        const { dispatch, speakerToken } = this.props;
        dispatch(changeTalkStatus(id, e.target.name, speakerToken));
    }

    render() {
        return (
            <div>
                <Navbar />
                <div id='confirmation'>
                    <h1>Confirmation</h1>
                    <p>Thank you for visiting our Confirmation page. You have an upcoming event scheduled in three days.
                    Please confirm your Talk. Or for what ever reason you are no longer available to speak at your event,
                    please click the cancel button.
                    </p>
                    <div className='buttons'>
                        <button className='btn' name='Confirmed' onClick={this.handleSubmitStatus}>
                            Confirm
                        </button>
                        <button className='btn' name='Disengaged' onClick={this.handleSubmitStatus}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default ConfirmOrCancel;
