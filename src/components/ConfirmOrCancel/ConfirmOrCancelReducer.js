
export default function OrganizersReducer(state = initialstate, action) {
	const { payload, type } = action;

	switch (type) {
        case 'HANDLE_QUERY': {
			return {
				...state,
				accessToken: payload
			}
        }
		default: {
			return state
		}
	}
}
