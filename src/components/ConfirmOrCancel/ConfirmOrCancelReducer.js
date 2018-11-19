const initialstate = {
    id          : '',
    speakerToken: ''
}
export default function OrganizersReducer(state = initialstate, action) {
	const { payload, type } = action;

	switch (type) {
        case 'HANDLE_SPEAKER_TOKEN': {
			return {
				...state,
				speakerToken: payload
			}
        }
        case 'HANDLE_TALK_ID': {
			return {
				...state,
				id: payload
			}
        }
        case 'SUBMIT_STATUS': {
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
		default: {
			return state
        }
        
	}
}
