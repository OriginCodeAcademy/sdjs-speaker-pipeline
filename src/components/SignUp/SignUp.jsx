import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import { 
	updateFirstname,
	updateLastname,
	updateEmail,
	updatePhone,
	updateCompany,
	updateDate,
	updateGithub,
	updateWebsite,
  updateLinkedin,
  addSpeaker
 } from './SignUpActions'

class SignUp extends Component {
    constructor(props) {
				super(props);
				
				this.handleFirstname = this.handleFirstname.bind(this);
				this.handleLastname = this.handleLastname.bind(this);
				this.handleEmail = this.handleEmail.bind(this);
				this.handlePhone = this.handlePhone.bind(this);
				this.handleCompany = this.handleCompany.bind(this);
				this.handleDate = this.handleDate.bind(this);
				this.handleWebsite = this.handleWebsite.bind(this);
				this.handleGithub = this.handleGithub.bind(this);
        this.handleLinkedin = this.handleLinkedin.bind(this);
        this.submitSpeaker = this.submitSpeaker.bind(this);
		}
		
		handleFirstname(e){
			const { dispatch } = this.props;
			dispatch(updateFirstname(e.target.value));
		}

		handleLastname(e){
			const { dispatch } = this.props;
			dispatch(updateLastname(e.target.value))
		}

		handleEmail(e){
      const { dispatch } = this.props;
      dispatch(updateEmail(e.target.value));
    }
    
    handlePhone(e){
      const { dispatch } = this.props;
      dispatch(updatePhone(e.target.value));
    }

    handleCompany(e){
      const { dispatch } = this.props;
      dispatch(updateCompany(e.target.value));
    }

    handleDate(e){
      const { dispatch } = this.props;
      dispatch(updateDate(e.target.value));
    }

    handleGithub(e){
      const { dispatch } = this.props;
      dispatch(updateGithub(e.target.value));
    }

    handleWebsite(e){
      const { dispatch } = this.props;
      dispatch(updateWebsite(e.target.value));
    }

    handleLinkedin(e){
      const { dispatch } = this.props;
      dispatch(updateLinkedin(e.target.value));
    }

    submitSpeaker(e){
      e.preventDefault();
      console.log('hello');
      const { 
        dispatch, 
       firstName, 
       lastName, 
       email, 
       phone, 
       company, 
       github, 
       website, 
       linkedin } = this.props;

        dispatch(addSpeaker({
          firstName, 
          lastName, 
          email, 
          phone, 
          company,  
          github, 
          website, 
          linkedin}));
    }
    
	render() {
		
		return (
			<div>
				<h1>Javascript Meetup</h1>
				<br></br>
				<form onSubmit={this.submitSpeaker}>
				<h3>Speaker Registration</h3>
					<div>
						<label htlmFor='speaker-firstname'>First Name: </label>
						<input name='speaker-firstname' id='speaker-firstname' type='text' onChange={this.handleFirstname}/>
					</div>
					<div>
						<label htlFor='speaker-lastname'>Last Name: </label>
						<input name='speaker-lastname' id='speaker-lastname' type='text' onChange={this.handleLastname}/>
					</div>
					<div>
						<label htmlFor='speaker-email'>Email: </label>
						<input name='speaker-email' id='speaker-email' type='text'onChange={this.handleEmail}/>
					</div>
					<div>
						<label htmlFor='phone'>Phone Number: </label>
						<input name='phone' id='phone' type='text' onChange={this.handlePhone}/>
					</div>
					<div>
						<label htmlFor='company'>Company: </label>
						<input name='company' id='company' type='text' onChange={this.handleCompany}/>
					</div>
					<div>
						<label htmlFor='event-date'>Date Requested: </label>
						<select name='event-date' id='event-date' type='select' onChange={this.handleDate}>
							<option>December 4, 2018</option>
							<option>January 8, 2019</option>
							<option>February 5, 2019</option>
						</select>
					</div>
          <div>
            <label htmlFor='topic'>Topic:</label>
            <input name='topic' id='topic' type='text'/>
          </div>
          <div>
            <label htmlFor='description'>Description: </label>
            <textarea name='description' id='description' type='text'/>
          </div>
					<div>
						<label>Additional Links: </label>
						<br/>
						<input name='github-link' id='github-link' placeholder='Github' onChange={this.handleGithub}/>
						<br/>
						<input name='website-link' id='website-link' placeholder='Website' onChange={this.handleWebsite}/>
						<br/>
						<input name='linkedin-link' id='linkedin-link' placeholder='linkedin' onChange={this.handleLinkedin}/>
					</div>
					<div>
						<button id='speaker-submit'>Submit!</button>
					</div>
				</form>
			</div>
		)
	}
}

export default SignUp;