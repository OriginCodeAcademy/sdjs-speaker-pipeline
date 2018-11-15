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
		case 'UPDATE_NAME': {
			return {
				...state,
				speakerName: payload
			}
		}
		case 'UPDATE_EMAIL': {
			return {
				...state,
				speakerEmail: payload
			}
		}
		case 'UPDATE_DATE': {
			return {
				...state,
				date: payload
			}
		}
		case 'UPDATE_PHONE': {
			return {
				...state,
				phone: payload
			}
		}
		case 'UPDATE_TOPIC': {
			return {
				...state,
				talkTopic: payload
			}
		}
		case 'UPDATE_DESCRIPTION': {
			return {
				...state,
				description: payload
			}
		}
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
		case 'TALK_SUBMIT_FULFILLED': {
			return {
				...state,
				submitted: true,
			}
		}
		default: {
			return state
		}
	}
}
