import React, { Component } from 'react';
import { getTalkData, handleSelectStatus, handleSelectOwner, changeTalkStatus, changeTalkOwner, toggleStatusEdit, toggleOwnerEdit } from './TalksActions';
import AdminNav from '../AdminNav/AdminNav';
const moment = require('moment');

const TableRow = ({ data, children }) => {
  return <td>
    {children
      ? children
      : Object.keys(data).map(key =>
        <div className={`table-${key}`}>{data[key]}</div>
      )
    }
  </td>
}

const EditStatusOptions = ({ talkId, handleSelectStatus, handleSubmitStatus, toggleStatusEditFunction, toggleStatusEditProp }) => {
  return (
    <div className='table-tableAction'>
      <div className='table-tableStatus'>
        <select name={talkId} onChange={handleSelectStatus}>
          <option value=''>Change Status</option>
          <option value='In Contact'>In Contact</option>
          <option value='Approve'>Approve</option>
          <option value='Deny'>Deny</option>
          <option value='Disengaged'>Disengaged</option>
        </select>
        <div className='side-by-side-btns'>
        <button className='btn' name={talkId} value={toggleStatusEditProp} onClick={handleSubmitStatus}>Save</button>
        <button className='btn' name={talkId} onClick={toggleStatusEditFunction}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

const EditOwnerOptions = ({ talkId, handleSelectOwner, handleSubmitOwner, toggleOwnerEditFunction, toggleOwnerEditProp }) => {
  return (
    <div className='table-tableAction'>
      <div className='table-tableStatus'>
        <select name={talkId} onChange={handleSelectOwner}>
          <option value=''>Change Owner</option>
          <option value='Owner 1'>Owner 1</option>
          <option value='Owner 2'>Owner 2</option>
          <option value='Owner 3'>Owner 3</option>
        </select>
        <div className='side-by-side-btns'>
        <button className='btn' name={talkId} value={toggleOwnerEditProp} onClick={handleSubmitOwner}>Save</button>
        <button className='btn' name={talkId} onClick={toggleOwnerEditFunction}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

class Talks extends Component {
  constructor(props) {
    super(props);
    this.handleSelectStatus = this.handleSelectStatus.bind(this)
    this.handleSelectOwner = this.handleSelectOwner.bind(this)
    this.handleSubmitStatus = this.handleSubmitStatus.bind(this)
    this.handleSubmitOwner = this.handleSubmitOwner.bind(this)
    this.toggleStatusEdit = this.toggleStatusEdit.bind(this)
    this.toggleOwnerEdit = this.toggleOwnerEdit.bind(this)
  }

  componentDidMount() {
    const { dispatch, accessToken } = this.props;
    dispatch(getTalkData(accessToken));
  }

  handleSelectStatus(e) {
    const { dispatch } = this.props;
    dispatch(handleSelectStatus(e.target.name, e.target.value));
  }

  handleSelectOwner(e) {
    const { dispatch } = this.props;
    dispatch(handleSelectOwner(e.target.name, e.target.value));
  }

  handleSubmitOwner(e) {
    const { dispatch, talkInfo, accessToken } = this.props;
    const selectedTalk = talkInfo.find((talk) => talk.talkId === e.target.name);
    console.log('handle submit args', e.target.name, selectedTalk.selectedOwner, e.target.value)
    dispatch(changeTalkOwner(e.target.name, selectedTalk.selectedOwner, e.target.value, accessToken));
  }

  handleSubmitStatus(e) {
    const { dispatch, talkInfo, accessToken } = this.props;
    const selectedTalk = talkInfo.find((talk) => talk.talkId === e.target.name);
    dispatch(changeTalkStatus(e.target.name, selectedTalk.selectedStatus, e.target.value, accessToken));
  }

  toggleStatusEdit(e) {
    const { dispatch } = this.props;
    dispatch(toggleStatusEdit(e.target.name, e.target.value));
  }

  toggleOwnerEdit(e) {
    const { dispatch } = this.props;
    dispatch(toggleOwnerEdit(e.target.name, e.target.value));
  }

  render() {
    const { talkInfo } = this.props;
    if (talkInfo[0]) {
      let talks = talkInfo;
      if (this.props.filter) {
        talks = talkInfo.filter(this.props.filter);
      }

      let headers = ['Speaker', 'Talk', 'Event', 'Status', 'Owner']
      if (this.props.include) {
        headers = headers.filter((header) => this.props.include.includes(header))
      }


      return (
        <div>
          <div className='admin-info'>
            <table className='table'>
              <tr>
                {
                  headers.map(header => (
                    <th>{header}</th>
                  ))}
              </tr>
              {
                talks.map((talk, i) => <tr key={i}>
                  {
                    headers.map(column => {
                      switch (column) {
                        case 'Speaker':
                          return <TableRow data={{ speaker: talk.speaker, speakerEmail: <a href={`mailto:${talk.speakerEmail}`} target="_top"><i className="far fa-envelope"></i>Send Email</a> }} />
                        case 'Talk':
                          return <TableRow data={{ topic: talk.topic, description: talk.description }} />
                        case 'Event':
                          return <TableRow data={{ eventName: talk.eventName, eventDate: moment(talk.eventDate).add(1, 'day').format('YYYY-MM-DD') }} />
                        case 'Status':
                          return <TableRow>
                            <div className='status'>
                              {talk.toggleStatusEdit ?
                                <EditStatusOptions
                                  talkId={talk.talkId}
                                  handleSelectStatus={this.handleSelectStatus}
                                  handleSubmitStatus={this.handleSubmitStatus}
                                  toggleStatusEditFunction={this.toggleStatusEdit}
                                  toggleStatusEditProp={talk.toggleStatusEdit}
                                />
                                :
                                <div className='table-flex-column-center'>
                                  {talk.currentStatus}
                                  <button className='btn' name={talk.talkId} value={talk.toggleStatusEdit} onClick={this.toggleStatusEdit}>Edit</button>
                                  {/* <i class="far fa-edit" name={talk.talkId} onClick={this.toggleStatusEdit}></i> */}
                                </div>
                              }
                            </div>
                          </TableRow>
                        case 'Owner':
                          return <TableRow>
                            <div className='owner'>
                              {talk.toggleOwnerEdit ?
                                <EditOwnerOptions
                                  talkId={talk.talkId}
                                  handleSelectOwner={this.handleSelectOwner}
                                  handleSubmitOwner={this.handleSubmitOwner}
                                  toggleOwnerEditFunction={this.toggleOwnerEdit}
                                  toggleOwnerEditProp={talk.toggleOwnerEdit}
                                />
                                :
                                <div className='table-flex-column-center'>
                                  {talk.owner}
                                  <button className='btn' name={talk.talkId} value={talk.toggleOwnerEdit} onClick={this.toggleOwnerEdit}>Edit</button>
                                  {/* <i class="far fa-edit" name={talk.talkId} onClick={this.toggleStatusEdit}></i> */}
                                </div>
                              }
                            </div>
                          </TableRow>
                        default:
                          return null;
                      }
                    })
                  }
                </tr>)
              }
            </table>
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
          <AdminNav />
          <div className='admin-banner'>
            <h1>Admin Dashboard</h1>
            <p>hello</p>
          </div>
          <div className='admin-info'>
            <h3>Pending Speakers</h3>
            <p>There are no pending speakers.</p>
          </div>
        </div>
      )
    }
  }
}

export default Talks;