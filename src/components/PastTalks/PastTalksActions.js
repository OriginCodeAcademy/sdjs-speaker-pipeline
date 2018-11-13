const axios = require('axios')

export const getPastTalks = () => ({
	type: 'GET_PAST_TALKS',
	payload: axios.get('api/talks/pastTalks')
		.then(response => {
			console.log('response: ', response.data)
			return response.data
		})
})