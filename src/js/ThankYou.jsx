import React, { Component } from 'react';

export default class ThankYou extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    return (
      <div className="card">
      <div className="card-header text-left" id="logo">
      <a className="navbar-brand" href="#" ><img src="js.png" /></a>
     </div>
     <div class="thankform">
        <h1 class="thankyou">Thank you for signing up</h1>

        <h3 id="moreinfo">for more info visit san diego.JS</h3>
     </div>
        <div className="card-footer text-dark text-center">
      <a className="text-dark" id="footer" href="#"><h6>Code of conduct</h6></a>
      </div>
      </div>
    );
  }
}