import initialState from '../../initialState';

export default function SpeakerItemReducer(
  state = initialState.speakerItem,
  action
) {
  const {type, payload} = action;

  switch (type) {
    case 'GET_SPEAKER_ITEM_FULFILLED': {
      return {
        ...state,
        speakerDetails: payload,
      };
    }

    default: {
      return state;
    }
  }
}
