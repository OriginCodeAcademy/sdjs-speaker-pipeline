import React from 'react';
import {
  updateEmailInput,
  updatePasswordInput,
  submitLogin,
} from './AdminLoginActions';
import {Redirect} from 'react-router-dom';

export default class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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

  handleLogin(e) {
    e.preventDefault();

    const {email, password, dispatch} = this.props;
    const loginObj = {
      email,
      password,
    };
    dispatch(submitLogin(loginObj));
    setTimeout(() => this.setState({isLoggedIn: true}), 1000);
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/admin" />;
    }
    return (
      <div className="Admin-bg">
        <div className="AdminLogin">
          <div id="admin-login-container" className="admin-box col-md-12">
            <div className="logo-holder">
              <img src="images/logo.png" />
            </div>
            <h2>
              SAN DIEGO JAVASCRIPT <br />
              ADMIN LOGIN
            </h2>
            <form onSubmit={this.handleLogin}>
              <div className="form-row l-input">
                <div className="form-group col-md-12">
                  <label>ENTER EMAIL: </label>
                  <input
                    id="admin-email"
                    type="text"
                    name="admin-email"
                    className="form-control"
                    placeholder="Email"
                    onChange={this.handleEmailChange}
                    required="required"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label>ENTER PASSWORD: </label>
                  <input
                    id="admin-password"
                    type="password"
                    name="adminPassword"
                    className="form-control"
                    placeholder="Password"
                    onChange={this.handlePasswordChange}
                    required="required"
                  />
                </div>
              </div>
              <div className="buttonholder">
                <button
                  type="submit"
                  id="admin-login-button"
                  className="button"
                  onClick={this.handleLogin}
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
