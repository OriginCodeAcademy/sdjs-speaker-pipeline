import initialState from '../../initialState';

export default function SpeakerRegisterReducer(state = initialState.speaker, action) {
  const { type, payload } = action;

    switch (type) {
      case 'UPDATE': {
        const {
            speakerFirstName,
            speakerLastName,
            speakerEmail,
            speakerPhone,
            eventDate,
            speakerGithub,
            speakerLinkedin,
            speakerWebsite} = action.payload
        return {
          ...state,
            speakerFirstName,
            speakerLastName,
            speakerEmail,
            speakerPhone,
            eventDate,
            speakerGithub,
            speakerLinkedin,
            speakerWebsite
        };
      }

      case 'SUBMIT': {
        const {
            speakerFirstName,
            speakerLastName,
            speakerEmail,
            speakerPhone,
            eventDate,
            speakerGithub,
            speakerLinkedin,
            speakerWebsite} = action.payload
        return {
          ...state,
            speakerFirstName,
            speakerLastName,
            speakerEmail,
            speakerPhone,
            eventDate,
            speakerGithub,
            speakerLinkedin,
            speakerWebsite
        };
      }

        default:
        {
          return state;
        }
    }
}