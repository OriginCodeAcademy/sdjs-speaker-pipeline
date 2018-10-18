import intialState from '../../initialState';

export default function EditSpeakerDataReducer(
  state = intialState.speakerData,
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
