import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      
      <div className="card text-center">
      <div className="card-header text-left" id="logo">
      <a className="navbar-brand" href="#" ><img src="js.png" /></a>
     
      </div>
      <div className="card-body" id="welcome" class="tint">
        <h2>welcome to sdjs</h2>
        <p className="card-text text-center">Have you been learning JavaScript and want to spend 5 or less minutes sharing something you learned?
         Did you find a library or discover a JS feature you'd like to share? Have an interesting method
         for learning or teaching JavaScript?</p>
        <button type="button" className="btn btn-primary">Give a talk</button>
      </div>
      <div className="card-footer text-dark text-center">
      <a href="#" className="text-dark"><h4>Code of conduct</h4></a>
      </div>
</div>
    );
  }
}