import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { handleQuery, handleConfrim, handlCancel } from '../ConfirmOrCancel/ConfirmOrCancelActions'

class ConfirmOrCancel extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props;
        const query = this.props.location.search;
        const urlParams = new URLSearchParams(window.location.search);
        console.log('this is query: ',query);
        console.log('this is urlParams: ',urlParams);

        console.log('this is t: ',urlParams.get('t'));
        console.log('this is id: ',urlParams.get('id'));
        dispatch(handleQuery(query))
    }

    handleSubmitStatus(e) {
        const { dispatch, talkInfo, accessToken } = this.props;
        const selectedTalk = talkInfo.find((talk) => talk.talkId === e.target.name);
        dispatch(changeTalkStatus(e.target.name, selectedTalk.selectedStatus, accessToken));
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
                        <button className='btn'name='confirmed' value='status' onClick={this.confirm}>
                            Confirm
                        </button>
                        <button className='btn' name='disengaged' value='status' onClick={this.cancel}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default ConfirmOrCancel;
