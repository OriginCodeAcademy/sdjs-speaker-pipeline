export const changeTalkStatus = (talkId, selectedStatus, speakerToken) => {
    return {
        type: 'SUBMIT_STATUS',
        payload: axios({
            method: 'put',
            url: 'api/talks/changeTalkStatus',
            headers: {
                Authorization: speakerToken
            },
            data: {
                talkId,
                selectedStatus
            }
        })
    }
}

export const handleSpeakerToken = (t) => {
	return {
		type: 'HANDLE_SPEAKER_TOKEN',
		payload: t
	}
}

export const handleTalkId = (id) => {
	return {
		type: 'HANDLE_TALK_ID',
		payload: id
	}
}
