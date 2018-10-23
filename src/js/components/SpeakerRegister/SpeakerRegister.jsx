import React from 'react';

export default class SpeakerRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      speakerFirstName: '',
      speakerLastName: '',
      speakerEmail: '',
      eventDate: '',
      speakerGithub: '',
      speakerLinkedin: '',
      speakerWebsite: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleVerify = this.handleVerify.bind(this);
  };


  render() {
    if (!this.state.isLoggedIn) {
      return <Redirect to='/register' />;
    }
    const {allSpeakers, user} = this.props;
    return (
      <div
        id='admin-login-container'
        className='container-fluid admin-box col-md-6'>
        <div className="logo-holder">        
          <img src="images/logo.png" />
        </div>
        <h2>SAN DIEGO JAVASCRIPT<br />SPEAKER REGISTRATION</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='form-row' >
          <div className='col-md-3' > </div>
          
          <div className='form-group col-md-12'>
            <label>*FIRST NAME:  </label>
            <input
              id='speakerFirstName'
              type='text'
              name='speakerFirstName'
              className='form-control'
              placeholder='first name'
              onChange={this.handleFirstNameChange}
              required='required'
            />
          </div>

          <div className='form-group col-md-12'>
            <label>*LAST NAME:  </label>
            <input
              id='speakerLastName'
              type='text'
              name='speakerLastName'
              className='form-control'
              placeholder='last name'
              onChange={this.handleLastNameChange}
              required='required'
            />
          </div>
          
          <div className='form-group col-md-12'>
            <label>*EMAIL:  </label>
            <input
              id='speakerEmail'
              type='text'
              name='speakerEmail'
              className='form-control'
              placeholder='Email'
              onChange={this.handleEmailChange}
              required='required'
            />
          </div>

          <div className='form-group col-md-12'>
            <label>*PHONE:  </label>
            <input
              id='speakerPhone'
              type='text'
              name='speakerPhone'
              className='form-control'
              placeholder='Phone'
              onChange={this.handlePhoneChange}
              required='required'
            />
          </div>

          <div className='form-group col-md-12'>
            <label>DATE REQUESTED: </label>
            <select 
              id='eventDate'
              type='select'
              name='eventDate'
              className='form-control'>
                <option>Select</option>
                <option>December 4, 2018</option>
                <option>January 8, 2019</option>
                <option>February 5, 2019</option>
            </select>
          </div>

          <div className='form-group col-md-12'>
            <label>ADDITIONAL LINKS: </label>
            <input
              id='speakerGithub'
              type='text'
              name='speakerGithub'
              className='form-control'
              placeholder='github'
              onChange={this.handleGithubChange}
            /><br />
            <input
              id='speakerLinkedin'
              type='text'
              name='speakerLinkedin'
              className='form-control'
              placeholder='linkedin'
              onChange={this.handleLinkedinChange}
            /><br />
            <input
              id='speakerWebsite'
              type='text'
              name='speakerWebsite'
              className='form-control'
              placeholder='website'
              onChange={this.handleWebsiteChange}
            />
          </div>
          
          </div>
          <div className="buttonholder">
            <button
              type='submit'
              id='speakerSubmitButton'
              className='button'
              onClick={this.handleSubmit}
            >REGISTER</button>
          </div>
        </form>
      </div>
      
    );
  }
}
