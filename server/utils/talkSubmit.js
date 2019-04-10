const app = require('../server');
const { getMeetups } = require('./getMeetups');

function talkSubmit(speakerInfo, talkInfo, date) {
	return new Promise((resolve, reject) => {
		console.log('speakerInfo: ',speakerInfo, 'talkInfo: ',talkInfo, 'date :', date)
		const { Talk, Speaker, Event } = app.models;
		Speaker.create(speakerInfo)
			.then(response => {
				console.log('1')
				let speakerId = response.id
				getMeetups()
					.then(meetups => {
						console.log('2')
						const index = meetups.findIndex((item) => item.date == date);
						let name = meetups[index].name;
						let details = meetups[index].description;
						let meetupId = meetups[index].meetupId;
						console.log('index: ',index)
						console.log('name: ',name)
						console.log('details: ',details)
						console.log('meetupId: ',meetupId)
						if (index === -1 )
						return reject(new Error('NO meetup with that date found!'));
						return Event.findOrCreate({date, name, details, meetupId})
							.then(event => {
								console.log('am i failing here')
								let eventId = event[0].id
								Talk.create( { ...talkInfo, speakerId, eventId})
									.then(talk => resolve(talk))
									.catch(err => console.log(err))
							})
							.catch(err => reject(err))
					})
					.catch(err => reject(err))
			})
			.catch(err => reject(err))
	})
}

module.exports = { talkSubmit };
