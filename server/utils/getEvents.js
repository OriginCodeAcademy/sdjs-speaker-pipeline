const app = require('../server');
const { getMeetups } = require('./getMeetups')
const { getPendingTalkDetails } = require('./getPendingTalkDetails')
const moment = require('moment');
moment().format()

function getEvents() {
	return new Promise((resolve, reject) => {
		const { Talk, Speaker, Event } = app.models;
		let mappedEvents = [];
		let counter = 0;
		getMeetups()
			.then(MeetupEvents =>{
				const allMeetupEvents = MeetupEvents
				Event.find({})
					.then(SpeakerEvents => {
						const allSpeakerEvents = SpeakerEvents
						// console.log('allMeetupEvents: ', allMeetupEvents)
						// console.log('allSpeakerEvents: ', allSpeakerEvents)
						const speakerDates = allSpeakerEvents.map(event => moment(event.date).format('YYYY-MM-DD'))
						console.log('speakerDates: ', speakerDates)
						const meetupDates = allMeetupEvents.map(event => moment(event.date).format('YYYY-MM-DD'))
						console.log('meetUpDates: ', meetupDates)
						//console.log(moment(speakerDates[0]).format('YYYY-MM-DD'));
						allMeetupEvents.map(singleEvent => {
							if(speakerDates.includes(moment(singleEvent.date).format('YYYY-MM-DD'))){
								singleEvent.speakers = [];
								//console.log('single event: ', singleEvent)
								//console.log('hello')
								Event.find({ where: { date: `${singleEvent.date}T14:00:00.000Z` }})
									.then(response => {
										console.log(response)
										Talk.find({ where: {eventId: response[0].id}})
											.then(foundTalk => {
												console.log('foundTalk: ', foundTalk)
												Speaker.find({ where: {id: foundTalk[0].speakerId }})
												.then(foundSpeaker => {
													console.log('foundSpeaker: ', foundSpeaker)
													singleEvent.speakers.push(`${foundSpeaker[0].firstName} ${foundSpeaker[0].lastName}`)
													counter ++;
													singleEvent.topic = foundTalk[0].topic
													console.log('singleEvent: ', singleEvent);
													mappedEvents.push(singleEvent);
													if(counter == speakerDates.length){
														resolve(allMeetupEvents);
													}
												})
												.catch(err => console.log(err))
											})
									})
									.catch(err => console.log(err))
							}
						})
					})
			})
	})
	
}

module.exports = { getEvents };