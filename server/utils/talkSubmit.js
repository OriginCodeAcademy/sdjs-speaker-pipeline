const app = require('../server');
const { getMeetups } = require('./getMeetups');

function talkSubmit(speakerInfo, talkInfo, date) {
	return new Promise((resolve, reject) => {
		const { Talk, Speaker, Event } = app.models;
		Speaker.create(speakerInfo)
			.then(response => {
				let speakerId = response.id
				getMeetups()
					.then(response2 => {
						const index = response2.findIndex((item) => {
							return item.date == date
						})
						let name = response2[index].name;
						let details = response2[index].description;
						let meetupId = response2[index].meetupId;
						Event.findOrCreate({date, name, details, meetupId})
							.then(response3 => {
								let eventId = response3[0].id
								Talk.create( { ...talkInfo, speakerId, eventId})
									.then(response4 => {
										return resolve(response4)
									})
									.catch(err => reject(err))
							})
							.catch(err => reject(err))
					})
					.catch(err => reject(err))
			})
			.catch(err => reject(err))
	})
}

module.exports = { talkSubmit };
