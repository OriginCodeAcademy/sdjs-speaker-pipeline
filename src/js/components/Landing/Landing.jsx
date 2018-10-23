import React from 'react';
import {Link} from 'react-router-dom';

export default class Landing extends React.Component {
  render() {
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
            <div className="form-row l-input">
              <div className="form-group col-md-12">
                <Link to="/login" className="header-link">
                  <div className="buttonholder">
                    <button
                      type="submit"
                      id="admin-login-button"
                      className="button"
                    >
                      TO ADMIN LOGIN
                    </button>
                  </div>
                </Link>

                <Link to="/register" className="header-link">
                  <div className="buttonholder">
                    <button
                      type="submit"
                      id='speaker-submit-button'
                      className="button"
                    >
                      TO SPEAKER REGISTER
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
