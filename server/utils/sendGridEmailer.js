const app = require('../server');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

            
function sendEmailToSpeaker(adminEmail, approved, pending, speakerEmail, speakerName, meetupTitle, meetupDate) {
    console.log('this is meetupDate', meetupDate)
    return new Promise((resolve, reject) => {

        if (speakerEmail == undefined) {
            resolve('Bad Speaker Email1');
            return false;
        } 
        
        if(meetupTitle == undefined) {
            resolve('Bad Meetup Title1');
            return false;
        }

        if(meetupDate == undefined) {
            resolve('Bad Meetup Date1');
            return false;
        }

        if (approved && !pending) {
            var emailContent = `Congratulations! Your request to speak at ${meetupTitle} on ${meetupDate} has been approved.`
        }

        if (!approved && !pending) {
            var emailContent = `We're sorry your request to speak at ${meetupTitle} on ${meetupDate} has been denied.`
        }

        if (pending) {
            var emailContent = `Thank you for signing up to speak ${meetupTitle} on ${meetupDate}. You will be notified as soon as a SDJS admin reviews your request.`
            sendEmailToAdmin(adminEmail, meetupDate, meetupTitle, speakerEmail, speakerName);
        }
        
        const email = {
            to: `${speakerEmail}`,
            from: adminEmail,
            subject: 'SDJS Meetup Speaker Request',
            templateId: 'd-b593d56913f7494cb1faf97354fb475c',
            dynamic_template_data: {
                emailContent: `${emailContent}`,
            }
        }
        let currentDate = meetupDate;
		currentDate.setDay(currentDate.getDay() - 3);
        const emailReminder = {
            to: `${speakerEmail}`,
            from: adminEmail,
            subject: 'SDJS Meetup Speaker Request',
            send_at: `${reminderDate}`,
            templateId: 'd-f43daeeaef504760851f727007e0b5d0',
            dynamic_template_data: {
                meetupTitle: `${meetupTitle}`,
                meetupDate: `${meetupDate}`,
            }
        }
            sgMail.send(email);

            resolve({ email, emailReminder });
    })
}

function sendEmailToAdmin(adminEmail, meetupDate, meetupTitle, speakerEmail, speakerName ) {
    return new Promise((resolve, reject) =>{
        if (speakerEmail == undefined) {
            resolve('Bad Speaker Email');
            return false;
        } 
        
        if(meetupTitle == undefined) {
            resolve('Bad Meetup Title');
            return false;
        }

        if(meetupDate == undefined) {
            resolve('Bad Meetup Date');
            return false;
        }

        if(adminEmail == undefined) {
            resolve('Bad Meetup Title');
            return false;
        }

        if(speakerName == undefined) {
            resolve('Bad Meetup Date');
            return false;
        }

        const email = {
                to:         adminEmail,
                from:       adminEmail,
                subject:    'SDJS Meetup Speaker Request',
                text:       `You have a pending speaker request from ${speakerName} for ${meetupTitle} on ${meetupDate}. would you like to approve or deny them.`
        }
            sgMail.send(email);

            resolve(email); 
    })
}

module.exports = { sendEmailToSpeaker, sendEmailToAdmin } 

//teplate
//ID: d-227d9b43edf14c92964db9bd00fdf002



