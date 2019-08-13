import axios from 'axios';
import moment from 'moment'

export const getTalkData = accessToken => {
    return {
        type: 'GET_TALK_DATA',
        payload: axios({
            method: 'get',
            url: 'api/talks/getTalkDetails',
            headers: {
                Authorization: accessToken
            }
        })
            .then(talkInfo => {
                const date = moment().subtract(1, 'day').format();
                const filtered = talkInfo.data.filter(talk => moment(talk.eventDate).format() > date);
                filtered.sort(function(a, b) {
                    a = moment(a.eventDate).format();
                    b = moment(b.eventDate).format();
                    return a<b ? -1 : a>b ? 1 : 0;
                })
                return axios({
                    method: 'get',
                    url: 'api/organizers',
                    headers: {
                        Authorization: accessToken
                    }
                })
                    .then((organizers) => {
                        return {
                            talkInfo: filtered,
                            organizers: organizers.data
                        }
                    })
            })
    }
};

export const handleSelectStatus = (talkId, selectedStatus) => {
    return {
        type: 'UPDATE_TALK_STATUS_IN_STORE',
        payload: {
            talkId,
            selectedStatus
        }
    }
};

export const handleSelectOwner = (talkId, selectedOwner) => {
    return {
        type: 'UPDATE_TALK_OWNER_IN_STORE',
        payload: {
            talkId,
            selectedOwner
        }
    }
};

export const changeTalkStatus = (talkId, selectedStatus, toggle, accessToken) => {
    return {
        type: 'CHANGE_TALK_STATUS_IN_DB',
        payload: axios({
            method: 'put',
            url: 'api/talks/changeTalkStatus',
            headers: {
                Authorization: accessToken
            },
            data: {
                talkId,
                selectedStatus
            }
        })
            .then((updatedTalk) => {
                return {
                    data: updatedTalk.data,
                    toggle: !toggle
                }
            })
    }
};

export const changeTalkOwner = (talkId, selectedOwner, toggle, accessToken) => {
    return {
        type: 'CHANGE_TALK_OWNER_IN_DB',
        payload: axios({
            method: 'put',
            url: 'api/talks/changeTalkOwner',
            headers: {
                Authorization: accessToken
            },
            data: {
                talkId,
                selectedOwner
            }
        })
            .then((updatedTalk) => {
                return {
                    data: updatedTalk.data,
                    toggle: !toggle
                }
            })
    }
};


export const toggleShowMore = (talkId, toggle) => {
    return {
        type: 'TOGGLE_SHOWMORE',
        payload: {
            talkId,
            toggle: !toggle
        }
    }
};

export const toggleTalkEdit = (talkId, toggle) => {
    return {
        type: 'TOGGLE_TALK_EDIT',
        payload: {
            talkId,
            toggle: !toggle,
        }
    }
};


export const deleteTalk = (talkId, accessToken) => {
    return {
        type: 'DELETE_TALK',
        payload: axios({
            method: 'delete',
            url: `/api/talks/${talkId}`,
            headers: {
                Authorization: accessToken
            }
        })
            .then(() => talkId)
    }
};

export const handleTalkChange = (talkId, value, type) => {
    return {
        type: 'HANDLE_TALK_CHANGE',
        payload: {
            talkId,
            value,
            type
        }
    }
};

export const updateTalkInfo = (talkId, newTopic, newDescription, newAdminNotes, toggle, accessToken) => {
    return {
        type: 'UPDATE_TALK_INFO',
        payload: axios({
            method: 'put',
            url: 'api/talks/changeTalkContent',
            headers: {
                Authorization: accessToken
            },
            data: {
                talkId,
                newTopic,
                newDescription,
                newAdminNotes
            }
        })
            .then((updatedTalk) => {
                return {
                    data: updatedTalk.data,
                    toggle: !toggle
                }
            })
    }
};
