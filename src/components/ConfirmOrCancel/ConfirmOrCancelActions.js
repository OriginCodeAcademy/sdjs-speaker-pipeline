export const handleQuery = (query) => {
	return {
		type: 'HANDLE_QUERY',
		payload: query
	}
}
export const handleCancel = (query) => {
	return {
		type: 'HANDLE_CANCEL',
		payload: query
	}
}

export const handleConfirm = (talkId, selectedStatus, accessToken) => {
    return {
        type: 'STATUS_CONFIRMED',
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
    }
}
