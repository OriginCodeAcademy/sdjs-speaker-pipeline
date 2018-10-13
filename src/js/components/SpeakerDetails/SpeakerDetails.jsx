import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class SpeakerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: '',
    };
  }
}


componentWillMount() {
  this.getSpeaker();
}

getSpeaker(){
  let speakerId = this.props.match.params.id;
  axios.get(`/api/speakers/${speakerId}`).then(res => {
    this.setState({details: res.data}, () => {
      console.log(this.state);
    })
  })
  .catch(err => console.log(err));
}

