import React, {Component} from 'react';
// import {Link, Redirect} from 'react-router-dom';
import {showSpeakerItem} from './SpeakerItemActions';

export class SpeakerItem extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isClicked: false,
    // };

    // this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps() {
    const {dispatch, user} = this.props;
    dispatch(showSpeakerItem(user));
  }

  // handleClick(e) {
  //   e.preventDefault();
  //   const {dispatch, speaker} = this.props;
  //   dispatch(showSpeakerItem(speaker));
  //   // setTimeout(() => this.setState({isClicked: true}), 1000);
  // }

  render() {
    // if (this.state.isClicked) {
    //   // return <Redirect to={`/api/speakers/${speaker}`} />;
    //   return;
    // }
    const {speakerDetails} = this.props;
    return (
      <div className="col-lg-2">
        {speakerDetails.map(speaker => {
          return (
            <div key={speaker.id} className="row" id="list">
              <br />
              <h3 className="col-lg-2">{speaker.firstName}</h3>
              <h3 className="col-lg-2">{speaker.lastName}</h3>
              <h3 className="col-lg-3">{speaker.email} </h3>
              <h3 className="col-lg-3">December 12 2018</h3>
            </div>
          );
        })}
      </div>
    );
  }
}
