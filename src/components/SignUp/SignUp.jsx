import React, { Component } from 'react';
import { Field } from 'react-redux-form';
import { connect } from 'react-redux';
import {
	onChange,
	talkSubmit,
	getDates,
} from './SignUpActions'
import Navbar from '../Navbar/Navbar';
import moment from 'moment';


class SignUp extends Component {
	constructor(props) {
		super(props);

		this.handleChange 	= this.handleChange.bind(this);
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(getDates());
	}

	handleChange(e) {
        console.log('handle change fired')
        const { dispatch } = this.props;
        dispatch(onChange(e.target.name, e.target.value))
    }

	submitSpeaker(e) {
		e.preventDefault();
		const { dispatch, speakerName, speakerEmail, date, topic, phone, description } = this.props;
		let zone = "America/Los_Angeles"
		dispatch(talkSubmit({ speakerName, speakerEmail, phone, speakerEmail },
			 {
				topic, description
			},
			date,
		));

	}

	render() {
		const { events, phone, speakerEmail, speakerName } = this.props;
			return (
				<div>
					<Navbar />
					<div className='signUp-container'>
						<div className='form-container'>
							<form onSubmit={this.submitSpeaker}>
								<h3>Speaker Registration</h3>
								<Field model='user.name'>
									<label htmlFor='speaker-name'>Name: </label>
									<input name='speakerName' placeholder='John Smith' id='speaker-firstname' value={speakerName} type='text'  onChange={this.handleChange} required />
								</Field >
								<Field model='user.speaker-email'>
									<label htmlFor='speaker-email'>Email: </label>
									<input type="email" placeholder='iamJohnSmith@email.com' name="speakerEmail" value={speakerEmail} required onChange={this.handleChange} />
								</Field>
								<Field model='user.phone'>
									<label htmlFor='speaker-phone'>Phone Number: </label>
									{console.log('this is phone', phone)}
									<input type="tel" name="phone" placeholder='123-456-7890' required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phone.replace(/(\d{3})\-?(\d{3})\-?(\d{4})/,'$1-$2-$3')}format="### ### ####" onChange={this.handleChange} />
								</Field>
								<div>
									<label htmlFor='event-date'>Date Requested: </label>
									<select name='date' id='event-date' type='select' required onChange={this.handleChange}>
										<option>Select a Date</option>
										{events && events.map(event => (
											<option key={event.date} name='date' value={event.date}>{event.date}</option>
										))}
									</select>
								</div>
								<Field model='user.topic'>
									<label htmlFor='topic'>Topic:</label>
									<input name='topic' id='topic' type='text' required onChange={this.handleTopic} />
								</Field>
								<Field model='user.description'>
									<label htmlFor='description'>Description: </label>
									<textarea name='description' id='description' type='text' required onChange={this.handleDescription} />
								</Field>
								<div>
									<button className='btn' id='speaker-submit'>Submit!</button>
								</div>
							</form>
						</div>
					</div>
				</div>

			)
	}
}

const selector = (state) => ({ user: state.user });
export default connect(selector)(SignUp);
