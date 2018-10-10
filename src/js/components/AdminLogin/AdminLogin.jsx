import React from 'react';
import { Redirect } from 'react-router';
import {
  updateEmailInput,
  updatePasswordInput,
  submitLogin,
} from './AdminLoginActions';

export default class AdminLogin extends React.Component {
  constructor(props) {
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(e) {
    const {dispatch} = this.props;
    const {value} = e.target;
    dispatch(updateEmailInput(value));
  }

  handlePasswordChange(e) {
    const {dispatch} = this.props;
    const {value} = e.target;
    dispatch(updatePasswordInput(value));
  }

  handleSubmit(e) {
    e.preventDefault();

    const {email, password, dispatch} = this.props;
    const loginObj = {
      email,
      password,
    };
    dispatch(submitLogin(loginObj));
  }

  render() {
    if (this.props.user) {
      return <Redirect push to='/admin' />
    }
    return (
      <div
        id='admin-login-container'
        className='container-fluid admin-login template-style col-md-6'>
        <h1>SDJS ADMIN LOGIN</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-row' >
          <div className='col-md-3' > </div>
          <div className='form-group col-md-3'>
            <label>Enter Email: </label>
            <input
              id='admin-email'
              type='text'
              name='admin-email'
              className='form-control'
              placeholder='Email'
              onChange={this.handleEmailChange}
              required='required'
            />
          </div>
          <div className='form-group col-md-3'>
            <label>Enter Password: </label>
            <input
              id='admin-password'
              type='password'
              name='adminPassword'
              className='form-control'
              placeholder='Password'
              onChange={this.handlePasswordChange}
              required='required'
            />
          </div>
          </div>
          <button
            type='submit'
            id='admin-login-button'
            className='btn btn-info'
            onClick={this.handleSubmit}
          >Login</button>
        </form>
      </div>
    );
  }
}
