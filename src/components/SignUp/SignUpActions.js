const axios = require('axios');

export const talkSubmit = (speakerInfo, talkInfo, date) => ({
	type: 'TALK_SUBMIT',
	payload: axios.post('api/talks/talkSubmit', {speakerInfo: speakerInfo, talkInfo: talkInfo, date: date})
})

export const getDates = () => ({
	type: 'GET_DATES',
	payload: axios.get('api/talks/getMeetups')
		.then(response => {
			return response.data
		}) 
})
