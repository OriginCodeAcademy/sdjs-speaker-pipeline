const axios = require('axios');

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
                const talkIds = talkInfo.data.map(talk => talk.talkId)
                return {
                    talkInfo: talkInfo.data,
                    talkIds: talkIds
                }
            })
    }
}

export const handleSelectStatus = (talkId, selectedStatus) => {
    return {
        type: 'UPDATE_TALK_STATUS_IN_STORE',
        payload: {
            talkId,
            selectedStatus
        }
    }
}

export const handleSelectOwner = (talkId, selectedOwner) => {
    return {
        type: 'UPDATE_TALK_OWNER_IN_STORE',
        payload: {
            talkId,
            selectedOwner
        }
    }
}

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
}

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
                console.log(updatedTalk)
                return {
                    data: updatedTalk.data,
                    toggle: !toggle
                }
            })
    }
}

export const toggleStatusEdit = (talkId, toggle) => {
    return {
        type: 'TOGGLE_STATUS_EDIT',
        payload: {
            talkId,
            toggle: !toggle
        }
    }
}

export const toggleOwnerEdit = (talkId, toggle) => {
    return {
        type: 'TOGGLE_OWNER_EDIT',
        payload: {
            talkId,
            toggle: !toggle
        }
    }
}
