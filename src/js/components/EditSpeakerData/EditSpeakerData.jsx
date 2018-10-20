import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import { getSpeakerDetails } from './EditSpeakerDataActions';

export default class EditSpeakerData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      organization: '',
      github: '',
      twitter: '',
      website: '',
      linkedin: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    this.getSpeakerDetails();
  }

  handleGetSpeakerData(e) {
    e.preventDefault();
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
      <div className="dashboard-box">
        <div className="header-nav">
          <img src="images/logo.png" className="header-logo" />
          <div className="rnav">
            <Link to="/admin" className="header-link">
              <button className="blink">BACK</button>
            </Link>
          </div>
        </div>
        <div className="container-fluid admin-box col-md-10">
          <h2>Edit Speaker</h2>
          <form onSubmit={this.onSubmit.bind(this)}>
            <label htmlFor="firstName">First Name</label>
            <div className="input-field">
              <input
                type="text"
                name="firstName"
                ref="firstName"
                className="form-control"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
            </div>
            <label htmlFor="lastName">Last Name</label>
            <div className="input-field">
              <input
                type="text"
                name="lastName"
                ref="lastName"
                className="form-control"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
            </div>
            <label htmlFor="email">Email</label>
            <div className="input-field">
              <input
                type="text"
                name="email"
                ref="email"
                className="form-control"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
            <label htmlFor="date">Date</label>
            <div className="input-field">
              <input
                type="text"
                name="date"
                ref="date"
                className="form-control"
                value={this.state.date}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="buttonholder">
              <button type="submit" value="Save" className="button">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
