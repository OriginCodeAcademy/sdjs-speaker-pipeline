const initialstate = {
	speakerName: '',
	speakerEmail: '',
	date: '',
	topic: '',
	description: '',
	submitted: 'false',
	phone: '',
}
export default function SignUpReducer(state = initialstate, action) {
	const { payload, type } = action;

	switch (type) {
		case 'TALK_SUBMIT_FULFILLED': {
			return {
				...state,
				submitted: true
			}
		}
		case 'GET_DATES_FULFILLED': {
			return {
				...state,
				events: payload
			}
		}
		default: {
			return state
		}
	}
}
