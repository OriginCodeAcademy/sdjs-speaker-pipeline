const app = require('../server');
const { getMeetups } = require('./getMeetups')
const { getPendingTalkDetails } = require('./getPendingTalkDetails')

function getEvents() {
	return new Promise((resolve, reject) => {
		const { Talk, Speaker, Event } = app.models;
		Event.find({})
			.then(response => {
				console.log(response)
				const speakerDates = response.map(event => event.date)
				console.log('talk dates: ', speakerDates)
				getMeetups()
					.then(response2 => {
						const eventDates = response2.map(event => event.date)
						console.log('event dates: ', eventDates)
						
					})
			})
	})
	
}

module.exports = { getEvents };