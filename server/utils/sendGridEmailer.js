const app = require('../server');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

            
function sendEmailToSpeaker(speakerEmail, meetupTitle, meetupDate) {
    return new Promise((resolve, reject) => {
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

        // if (status) {
            var emailContent = `Congratulations! Your request to speak at ${meetupTitle} on ${meetupDate} has been approved.`
        // }

        // if (!status) {
        //     var emailContent = `We're sorry your request to speak at ${meetupTitle} on ${meetupDate} has been denied.`
        // }
        const email = {
                to: `${speakerEmail}`,
                from: `seahorse8789@gmail.com`,
                subject: 'SDJS Meetup Speaker Request',
                text: `${emailContent}`
        }
            sgMail.send(email);

            resolve(email);

        Talk.afterRemote('sendEmailToSpeaker', function(context, remoteMethodOutput, next) {
            console.log('after remote method hit.');
            next();
            }); 
    })
}

    function sendEmailToAdmin(approved, adminEmail, meetupDate, meetupTitle, speakerEmail, speakerName, status ) {
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

        })
    }
  
   
   
   
   
   
   
   
   
   
   
    // var emailContent = `You have a pending speaker request from ${speakerName} for ${meetupTitle} on ${meetupDate}. would you like to approve or deny them.`
    
    // const email = {
    //     to: `${speakerEmail}`,
    //     from: `${adminEmail}`,
    //     subject: 'SDJS Meetup Speaker Request',
    //     text: `${emailContent}`
    // }
    // sgMail.send(email);






module.exports = { sendEmailToSpeaker, sendEmailToAdmin } 

