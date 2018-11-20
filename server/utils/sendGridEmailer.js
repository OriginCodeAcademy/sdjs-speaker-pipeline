const sgMail = require('@sendgrid/mail');
const moment = require('moment');
const ontime = require('ontime');
const { getTalkDetails } = require('./getTalkDetails');
const axios = require('axios');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function sendEmailToSpeaker(adminEmail, approved, pending, speakerEmail, speakerName, meetupTitle, meetupDate) {
    return new Promise((resolve, reject) => {
        if (speakerEmail == undefined) {
            reject({ message: 'Bad Speaker Email' });
            return false;
        }

        if (meetupTitle == undefined) {
            reject({ message: 'Bad Meetup Title' });
            return false;
        }

        if (meetupDate == undefined) {
            reject({ message: 'Bad Meetup Date' });
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
            sendEmailToAdmin(adminEmail, meetupDate, meetupTitle, speakerEmail, speakerName)
                .catch(err => console.log(err));
        }

        const email = {
            to: speakerEmail,
            from: adminEmail,
            subject: 'SDJS Meetup Speaker Request',
            templateId: 'd-b593d56913f7494cb1faf97354fb475c',
            dynamic_template_data: {
                emailContent: emailContent,
                sdjsBtn: false,
                title: 'SDJS Meetup Speaker Request'
            }
        }
        sgMail.send(email)
            .then(() => resolve({ email }))
            .catch(err => {
                console.log(err);
                reject(err);
            });
    })
}

function sendEmailToAdmin(adminEmail, meetupDate, meetupTitle, speakerEmail, speakerName) {
    return new Promise((resolve, reject) => {

        if (speakerEmail == undefined) {
            reject({ message: 'Bad Speaker Email' });
            return false;
        }

        if (meetupTitle == undefined) {

            reject({ message: 'Bad Meetup Title' });
            return false;
        }

        if (meetupDate == undefined) {

            reject({ message: 'Bad Meetup Date' });
            return false;
        }

        if (adminEmail == undefined) {

            reject({ message: 'Bad Meetup Title' });
            return false;
        }

        if (speakerName == undefined) {

            reject({ message: 'Bad Meetup Date' });
            return false;
        }

        let emailContent = `You have a pending speaker request from ${speakerName} for ${meetupTitle} on ${meetupDate}. would you like to approve or deny them.`
        const email = {
            to: adminEmail,
            from: adminEmail,
            subject: 'SDJS Meetup Speaker Request',
            templateId: 'd-b593d56913f7494cb1faf97354fb475c',
            dynamic_template_data: {
                emailContent: emailContent,
                sdjsBtn: false,
                title: 'SDJS Meetup Speaker Request'
            }
        }
        sgMail.send(email)
            .then(() => resolve({ email }))
            .catch(err => {
                console.log(err);
                reject(err);
            });
    })
}
function sendConfirmCancelToAdmin(confirm, meetupDate, meetupTitle, speakerName) {
    console.log('333');
    return new Promise((resolve, reject) => {
        console.log('444');
        if (confirm == undefined) {
            reject({ message: 'message is not confirmed or engaged' });
            return false;
        }

        if (meetupDate == undefined) {
            reject({ message: 'Bad Meetup Date' });
            return false;
        }
        if (meetupTitle == undefined) {

            reject({ message: 'Bad Meetup Title' });
            return false;
        }

        if (speakerName == undefined) {
            reject({ message: 'Bad Meetup Date' });
            return false;
        }
        console.log('555');

        let emailContent;
        let verb;
        if (confirm) {
            emailContent = `${speakerName} has confirmed thier talk on ${meetupDate} for ${meetupTitle}`
            verb = 'confirmed.'
            console.log('666');

        }
        if (!confirm) {
            emailContent = `${speakerName} has canceled thier talk on ${meetupDate} for ${meetupTitle}`
            verb = 'canceled.'
            console.log('777');

        }
        console.log('888');

        const email = {
            to: process.env.MAIN_ADMIN_EMAIL,
            from: process.env.MAIN_ADMIN_EMAIL,
            subject: 'SDJS Meetup Speaker Request',
            templateId: 'd-b593d56913f7494cb1faf97354fb475c',
            dynamic_template_data: {
                emailContent: emailContent,
                sdjsBtn: false,
                title: `SDJS Meetup Speaker ${verb}`
            }
        }
        console.log('999');

        sgMail.send(email)
            .then(() => {
                console.log('000')
                return resolve({ email })
            })

            .catch(err => {
                console.log(err);
                reject(err);
            });
    })
}

function sendEmailToNewAdmin(username, email) {
   

    return new Promise((resolve, reject) => {
       

        if (username == undefined) {
            reject({ message: 'Bad New Admin username' });
            return false;
        }

        if (email == undefined) {

            reject({ message: 'Bad New Admin Email' });
            return false;
        }

        let emailContent = `You have been made an admin on the SDJS Meetup website. 
                To login please go to http/localhost/3000/AdminLogin and enter your 
                email and your temporary password. To edit your user name, email, 
                password go to the Organizers tab and click on the edit button.`;
        const email = {
            to: email,
            from: process.env.MAIN_ADMIN_EMAIL,
            subject: 'SDJS Meetup Admin Appointment',
            templateId: 'd-b593d56913f7494cb1faf97354fb475c',
            dynamic_template_data: {
                emailContent: emailContent,
                sdjsBtn: false,
                title: 'SDJS Meetup Admin Appointment'
            }
        }
        sgMail.send(email)
            .then(() => resolve({ email }))
            .catch(err => {
                console.log(err);
                reject(err);
            });
    })
}

ontime({
    cycle: '8:00:00'
}, function (ot) {

    getTalkDetails()
        .then(res => {
            let date = new Date();
            let threeDaysFromNow = moment(date).add(3, 'day').format('YYYY-MM-DD');
            console.log('this is 3 days from now: ', threeDaysFromNow)
            console.log('this is res before filter: ', res)
            console.log('this is eventDate: ', moment(res[0].eventDate).add(1, 'day').format('YYYY-MM-DD'))
            res = res.filter(talk => talk.currentStatus === 'Approve' && moment(talk.eventDate).add(1, 'day').format('YYYY-MM-DD') === threeDaysFromNow)
            console.log('this is res after filter: ', res)
            if (
                res.length !== 0) {
                console.log('res.length is greater than one')

                axios.post('http://localhost:3000/api/organizers/login', { username: process.env.ADMIN_USERNAME, password: process.env.ADMIN_PASSWORD, ttl: 60 * 5 })
                    .then(response => {
                        console.log('inside the .then of api/organizers/login')
                        return response.data.id
                    }).then(accessToken => {
                        console.log('this is accesstoken: ', accessToken)
                        res.forEach(speaker => {
                            console.log('this is speaker: ', speaker)
                            console.log('inside the second .then')
                            return new Promise((resolve, reject) => {
                                console.log('inside the new promise')
                                if (
                                    accessToken == undefined) {
                                    reject({ message: 'Bad accessToken in reminder email' });
                                    return false;
                                }

                                if (
                                    speaker.speakerEmail == undefined) {
                                    console.log('this is speaker.speakerEmail: ', speaker.speakerEmail)
                                    reject({ message: 'Bad Speaker Email in reminder email' });
                                    return false;
                                }

                                if (
                                    speaker.eventName == undefined) {
                                    console.log('this is speaker.eventName: ', speaker.eventName)
                                    reject({ message: 'Bad event name in reminder email' });
                                    return false;
                                }

                                if (
                                    speaker.eventDate == undefined) {
                                    console.log('this is speaker.eventDate: ', speaker.eventDate)
                                    reject({ message: 'Bad Meetup Date in reminder email' });
                                    return false;
                                }

                                if (
                                    speaker.talkId == undefined) {
                                    console.log('this is speaker.eventId: ', speaker.talkId)
                                    reject({ message: 'Bad talkId in reminder email' });
                                    return false;
                                }
                                    
                                console.log('made it here')
                                axios({
                                    method: 'post',
                                    url: `http://localhost:3000/api/accessTokens`,
                                    headers: {
                                        Authorization: accessToken
                                    },
                                    data: {
                                        id: speaker.TalkId,
                                        ttl: 60 * 60 * 24 * 3
                                    }
                                }).then(response => {
                                    console.log('inside the .second axios: ',response.data.id)
                                    return response.data.id
                                }).then(speakerToken => {
                                    console.log('this is speakerToken: ',speakerToken)
                                    console.log('im here now')
                                    let emailContent = `SDJS would like to remind you that you have 
                        been approved to speeak at ${speaker.eventName} on ${speaker.eventDate.toDateString()}. 
                        Please click this button to visit out site to confirm or cancel your talk. `

                                    const url = 'http://localhost:3000/#/ConfirmOrCancel/?t=';
console.log('this is url: ',(url + speakerToken + '&eventId=' + speaker.talkId))
                                    const reminder = {
                                        to: speaker.speakerEmail,
                                        from: process.env.MAIN_ADMIN_EMAIL,
                                        subject: 'SDJS Meetup Speaker Reminder',
                                        templateId: 'd-227d9b43edf14c92964db9bd00fdf002',
                                        dynamic_template_data: {
                                            emailContent: emailContent,
                                            sdjsBtn: true,
                                            url: (url + speakerToken + '&eventId=' + speaker.talkId),
                                            title: 'SDJS Meetup Speaker Reminder'
                                        }
                                    }
                                    console.log('ok made it this far')
                                    sgMail.send(reminder)
                                        .then(() => {
                                            console.log('inside the sgmail .then')
                                            resolve({ reminder })
                                        })
                                        .catch(err => {
                                            console.log(err);
                                            reject(err);
                                        })
                                })
                            })
                        })
                    })
            }
        })

    ot.done()
    return
})

module.exports = { sendEmailToSpeaker, sendEmailToAdmin, sendEmailToNewAdmin, sendConfirmCancelToAdmin } 
