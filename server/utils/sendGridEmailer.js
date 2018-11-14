const sgMail = require('@sendgrid/mail');
const moment = require('moment');
const ontime = require('ontime');
const { getTalkDetails } = require('./getTalkDetails');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

            
function sendEmailToSpeaker(adminEmail, approved, pending, speakerEmail, speakerName, meetupTitle, meetupDate) {
    console.log('this is meetupDate', meetupDate)
    console.log('this is this is speakerEmail', speakerEmail)

    return new Promise((resolve, reject) => {
        if (speakerEmail == undefined) {
            reject({message: 'Bad Speaker Email'});
            return false;
        } 
        
        if(meetupTitle == undefined) {
            reject({message: 'Bad Meetup Title'});
            return false;
        }

        if(meetupDate == undefined) {
            reject({message: 'Bad Meetup Date'});
            return false;
        }
        let emailContent;
        if (approved && !pending) {
            emailContent = `Congratulations! Your request to speak at ${meetupTitle} on ${meetupDate} has been approved.`
        }

        if (!approved && !pending) {
            emailContent = `We're sorry your request to speak at ${meetupTitle} on ${meetupDate} has been denied.`
        }

        if (pending) {
            emailContent = `Thank you for signing up to speak ${meetupTitle} on ${meetupDate}. You will be notified as soon as a SDJS admin reviews your request.`
            sendEmailToAdmin(adminEmail, meetupDate, meetupTitle, speakerEmail, speakerName);
        }
        
        const email = {
            to: speakerEmail,
            from: adminEmail,
            subject: 'SDJS Meetup Speaker Request',
            templateId: 'd-b593d56913f7494cb1faf97354fb475c',
            send_at: reminderDate,
            dynamic_template_data: {
                emailContent: emailContent,
            }
        }
      
            .then(() => resolve({ email }));
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

function sendEmailToNewAdmin(newAdminEmail, adminEmail, newAdminPhone, adminTempPw ) {

    return new Promise((resolve, reject) =>{

        if (newAdminEmail == undefined) {

            resolve('Bad New Admin Email');
            return false;
        } 

        if(adminEmail == undefined) {

            resolve('Bad Admin Email');
            return false;
        }
        if (adminTempPw == undefined) {

            resolve('Bad Admin Temp Pw');
            return false;
        } 

        if(newAdminPhone == undefined) {

            resolve('Bad New Admin Phone');
            return false;
        }

        const email = {
                to:         newAdminEmail,
                from:       adminEmail,
                subject:    'SDJS Meetup Admin Appointment',
                text:       `You have been made an admin on the SDJS Meetup website. 
                    To login please go to http/localhost/3000/AdminLogin and enter your 
                    email and your temporary password. To edit your user name, email, 
                    password go to the Organizers tab and click on the edit button.`
        }

            sgMail.send(email);

            resolve(email); 

    })
}


// ontime({
//     cycle: '12:00:00'
// }, function (ot) {
//     console.log('lunch time!')
//     ot.done()
//     return
// })


ontime({
    cycle: '11:38:00'
}, function (ot) {

getTalkDetails()
.then(res => {
    let threeDaysFromNow = new Date();
    threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 1);
    console.log('this is the date of three days from now: ', threeDaysFromNow)
    console.log('this is the origional res', res)
    approvedSpeakers = res.filter(talk => talk.currentStatus === 'Approve' && talk.eventDate === threeDaysFromNow)
    console.log('this is the approvedSpeakers 3 days from now', approvedSpeakers)

if (approvedSpeakers.length !== 0) {
    sendReminder
    console.log('this is meetupDate', approvedSpeakers.meetupDate)
    console.log('this is this is speakerEmail', approvedSpeakers.speakerEmail)

    return new Promise((resolve, reject) => {
        console.log(144)
        if (approvedSpeakers.speakerEmail == undefined) {
            console.log(244)
            resolve('Bad Speaker Email in reminder email');
            return false;
        } 
        
        if(approvedSpeakers.meetupTitle == undefined) {
            console.log(344)
            resolve('Bad Meetup Title in reminder email');
            return false;
        }

        if(approvedSpeakers.meetupDate == undefined) {
        console.log(444)
            resolve('Bad Meetup Date in reminder email');
            return false;
        }
       
        var emailContent = `SDJS would like to remind you that you have been approved to speeak at ${meetupTitle} on ${meetupDate}. Please click this button to visit out site to confirm or cancel your talk. `
        
        const reminder = {
            to: speakerEmail,
            from: adminEmail,
            subject: 'SDJS Meetup Speaker Reminder',
            templateId: 'd-b593d56913f7494cb1faf97354fb475c', //need to create a new template
            dynamic_template_data: {
                emailContent: `${emailContent}`,
            }
        }
        console.log(844, reminder)

            sgMail.send(reminder);
            console.log(944)

            resolve({ reminder });
            console.log(1044)
    })
    }
})

ot.done()
return
})


module.exports = { sendEmailToSpeaker, sendEmailToAdmin, sendEmailToNewAdmin } 
