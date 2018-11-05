import { connect } from 'react-redux';
import SignUp from './SignUp';

function mapStoreToProps(store){
    return {
      firstName: store.SignUp.speakerFirstname,
      lastName: store.SignUp.speakerLastname,
      email: store.SignUp.speakerEmail,
      phone: store.SignUp.speakerPhone,
      organization: store.SignUp.speakerCompany,
      github: store.SignUp.speakerGithub,
      website: store.SignUp.speakerWebsite,
      linkedin: store.SignUp.speakerLinkedin
        
    };
}

export default connect(mapStoreToProps)(SignUp);