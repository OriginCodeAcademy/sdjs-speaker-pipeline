const app = require('../server');
const moment = require('moment');

function pastTalks(){
    let counter = 0;
    let mappedTalks = [];
    let date = new Date()
    return new Promise((resolve, reject) => {
        const { Talk, Speaker, Event } = app.models;
        Talk.find({where: {status: 'Approve'}})
            .then(talks => {
                const approvedTalks = talks
                approvedTalks.map(approvedTalk => {
                    Event.findOne({where: {id: approvedTalk.eventId}})
                        .then(event => {
                            approvedTalk.__data.date = event.date
                            approvedTalk.__data.event = event.name
                            Speaker.findOne({ where: {id: approvedTalk.speakerId}})
                                .then(speaker => {
                                    approvedTalk.__data.speaker = speaker.speakerName
                                    let talkDate = moment(new Date(approvedTalk.__data.date)).format()
                                    if(date > talkDate){
                                        mappedTalks.push(approvedTalk)
                                    }
                                    Event.find({ where: {date: {lt: date}}})
                                        .then(response => {
                                            counter ++
                                            if(mappedTalks.length == counter){
                                                mappedTalks.sort(function(a, b) {
                                                    a = new Date(a.__data.date);
                                                    b = new Date(b.__data.date);
                                                    return a>b ? -1 : a<b ? 1 : 0;
                                                })
                                                resolve(mappedTalks);
                                            }
                                        })
                                        .catch(err => console.log(err))
                                })
                                .catch(err => console.log(err));
                        })
                        .catch(err => console.log(err))
                })
            })
            .catch(err => console.log(err))
    })
}

module.exports = { pastTalks };
