const initialstate = {
	date: '',
	description: '',
	phone: '',
	speakerEmail: '',
	speakerName: '',
	submitted: false,
	talkTopic: '',
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
