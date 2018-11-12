const initialstate = {
    talkInfo: [],
    eventInfo: [],
}

export default function TalksReducer(state = initialstate, action) {
    const { payload, type } = action;

    switch (type) {
        case 'GET_TALK_DATA_FULFILLED': {
            return {
                ...state,
                talkInfo: payload.talkInfo
            }
        }
        case 'UPDATE_TALK_STATUS_IN_STORE': {
            const updatedTalkInfo = state.talkInfo.map((talk) => {
                if (talk.talkId == payload.talkId) {
                    return {
                        ...talk,
                        selectedStatus: payload.selectedStatus
                    }
                }
                else {
                    return talk
                }
            })
            return {
                ...state,
                talkInfo: updatedTalkInfo
            }
        }
        case 'UPDATE_TALK_OWNER_IN_STORE': {
            const updatedTalkInfo = state.talkInfo.map((talk) => {
                if (talk.talkId == payload.talkId) {
                    return {
                        ...talk,
                        selectedOwner: payload.selectedOwner
                    }
                }
                else {
                    return talk
                }
            })
            return {
                ...state,
                talkInfo: updatedTalkInfo
            }
        }
        case 'TOGGLE_STATUS_EDIT': {
            const updatedTalkInfo = state.talkInfo.map((talk) => {
                if (talk.talkId == payload.talkId) {
                    return {
                        ...talk,
                        toggleStatusEdit: !payload.toggle
                    }
                }
                else {
                    return talk
                }
            })
            return {
                ...state,
                talkInfo: updatedTalkInfo
            }
        }
        case 'CHANGE_TALK_STATUS_IN_DB_FULFILLED': {
            const updatedTalkInfo = state.talkInfo.map((talk) => {
                if (talk.talkId == payload.data.id) {
                    return {
                        ...talk,
                        currentStatus: payload.data.status,
                        toggleStatusEdit: payload.toggle
                    }
                }
                else {
                    return talk
                }
            })
            return {
                ...state,
                talkInfo: updatedTalkInfo
            }
        }
        case 'CHANGE_TALK_OWNER_IN_DB_FULFILLED': {
            const updatedTalkInfo = state.talkInfo.map((talk) => {
                console.log('payload', payload)
                if (talk.talkId == payload.data.id) {
                    return {
                        ...talk,
                        owner: payload.data.owner,
                        toggleOwnerEdit: payload.toggle
                    }
                }
                else {
                    return talk
                }
            })
            return {
                ...state,
                talkInfo: updatedTalkInfo
            }
        }
        case 'TOGGLE_OWNER_EDIT': {
            const updatedTalkInfo = state.talkInfo.map((talk) => {
                if (talk.talkId == payload.talkId) {
                    return {
                        ...talk,
                        toggleOwnerEdit: !payload.toggle
                    }
                }
                else {
                    return talk
                }
            })
            return {
                ...state,
                talkInfo: updatedTalkInfo
            }
        }
        case 'TOGGLE_SHOWMORE': {
            const updatedTalkInfo = state.talkInfo.map((talk) => {
                if (talk.talkId == payload.talkId) {
                    return {
                        ...talk,
                        toggleShowMore: !payload.toggle
                    }
                }
                else {
                    return talk
                }
            })
            return {
                ...state,
                talkInfo: updatedTalkInfo
            }
        }
        case 'TOGGLE_TALK_EDIT': {
            const updatedTalkInfo = state.talkInfo.map((talk) => {
                if (talk.talkId == payload.talkId) {
                    return {
                        ...talk,
                        toggleTalkEdit: !payload.toggle
                    }
                }
                else {
                    return talk
                }
            })
            return {
                ...state,
                talkInfo: updatedTalkInfo
            }
        }
        case 'DELETE_TALK_FULFILLED': {
            const deleteIndex = state.talkInfo.findIndex((talk) => talk.talkId == payload)
            const updatedTalkInfo = [...state.talkInfo]
            updatedTalkInfo.splice(deleteIndex, 1)
            return {
                ...state,
                talkInfo: updatedTalkInfo
            }
        }
        default: {
            return state
          }
    }
}

