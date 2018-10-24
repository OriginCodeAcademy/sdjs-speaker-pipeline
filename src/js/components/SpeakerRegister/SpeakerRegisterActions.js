// actions for registration page
import axios from 'axios';

export function updateForm(
    speakerFirstName,
    speakerLastName,
    speakerEmail,
    speakerPhone,
    eventDate,
    speakerGithub,
    speakerLinkedin,
    speakerWebsite) {
  return {
    type: 'UPDATE',
    payload: {
        speakerFirstName,
        speakerLastName,
        speakerEmail,
        speakerPhone,
        eventDate,
        speakerGithub,
        speakerLinkedin,
        speakerWebsite
    },
  };
}

export function submitForm(
    speakerFirstName,
    speakerLastName,
    speakerEmail,
    speakerPhone,
    eventDate,
    speakerGithub,
    speakerLinkedin,
    speakerWebsite) {
  return  {
    type: 'SUBMIT',
    payload: {
        speakerFirstName,
        speakerLastName,
        speakerEmail,
        speakerPhone,
        eventDate,
        speakerGithub,
        speakerLinkedin,
        speakerWebsite
    },
  }
}