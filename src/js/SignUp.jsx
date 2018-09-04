import React, { Component } from 'react';
import {Link} from "react-router-dom";


export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
          
        }

    }

    render(){
    return(
      
      <div className="container col-sm-5">
      <form>
        <h3 class="speak">Request to speak</h3>
     <div className="form-group text-white">
        <label for="InputName">your full name: *</label>
        <input type="letters" className="form-control" id="InputName" aria-describedby="nameHelp" placeholder="Enter your name" />
      </div>
    
      <div className="form-group text-white">
        <label for="exampleInputEmail1">Email address: *</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address" />
      </div>
    
    <div className="form-group text-white">
        <label for="InputTwitter">Twitter handle: *</label>
        <input type="twitter" className="form-control" id="InputTwitter" aria-describedby="twitterHelp" placeholder="Enter your twitter handle" />
      </div>
    
    <div className="form-group text-white">
        <label for="InputTalk">Talk title: *</label>
        <input type="title" className="form-control" id="InputTitle" aria-describedby="titleHelp" placeholder="Enter your talk title" />
      </div>
    
      <div className="form-group text-white">
        <label for="InputMeetup">Meetup date: *</label>
        <p>Our meetup is on the first Tuesday of every month. Which month(s) would you prefer to give your talk?</p>
        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter a future date" />
      </div>
    
        <div class="form-group text-white">
        <label for="exampleFormControlTextarea1">Additional comments:</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Enter your comments here"></textarea>
      </div>
    <br />
    
      <div>
      <Link to="/thankyou" class="signup">Submit</Link>

      </div>
    </form>
</div>





      );
     }
    }