import initialState from '../../initialState';

export default function EditSpeakerDataReducer(
  state = initialState.editSpeakerData,
  action
) {
  const {type, payload} = action;

  switch (type) {
    case 'EDIT_SPEAKER_DATA_FULFILLED': {
      return {
        ...state,
        editSpeakerData: payload,
      };
    }

    default: {
      return state;
    }
  }
}
