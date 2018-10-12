import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import axios from 'axios';
// import {getSpeakers} from './EditSpeakerDataActions';

export default class EditSpeakerData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      date: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    this.getSpeakerDetails();
  }

  getSpeakerDetails() {
    let speakerId = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/api/speakers/${speakerId}`)
      .then(response => {
        this.setState(
          {
            id: response.data.id,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email,
            date: response.data.date,
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }

  editSpeaker(newSpeaker) {
    axios
      .request({
        method: 'put',
        url: `http://localhost:3000/api/speakers/${this.state.id}`,
        data: newSpeaker,
      })
      .then(response => {
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  onSubmit(e) {
    const editSpeaker = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      email: this.refs.email.value,
      date: this.refs.date.value,
    };
    this.editSpeaker(newSpeaker);
    e.preventDefault();
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/admin">
          Back
        </Link>
        <h1>Edit Meetup</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              ref="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              ref="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="email"
              ref="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="date"
              ref="date"
              value={this.state.date}
              onChange={this.handleInputChange}
            />
            <label htmlFor="date">Date</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    );
  }
}
