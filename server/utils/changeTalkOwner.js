const app = require('../server');

function changeTalkOwner(talkId, selectedOwner) {
	return new Promise((resolve, reject) => {
		if (talkId == undefined) {
            reject({ message: 'Bad Talk Id' });
            return false;
        }

        if (selectedOwner == undefined) {
            reject({ message: 'No Owner Selected' });
            return false;
        }
		const { Talk, Organizer } = app.models;
		Talk.findById(talkId)
			.then((talk) => {
				let newTalk;
				if (selectedOwner == 'None') {
					newTalk = {
						"status": talk.status,
						"description": talk.description,
						"reminderSent": talk.reminderSent,
						"topic": talk.topic,
						"id": talk.id,
						"speakerId": talk.speakerId,
						"eventId": talk.eventId,
						"owner": selectedOwner,
						"adminNotes": talk.adminNotes
					}
				}
				else {
					Organizer.find({ where: {username: selectedOwner}})
					.then((organizer) => {
						console.log(organizer)
						newTalk = {
							"status": talk.status,
							"description": talk.description,
							"reminderSent": talk.reminderSent,
							"topic": talk.topic,
							"id": talk.id,
							"speakerId": talk.speakerId,
							"eventId": talk.eventId,
							"owner": selectedOwner,
							"adminNotes": talk.adminNotes,
							"organizerId": organizer[0].id
						}
					})
					.catch(err => reject({ error: 'Could not find organizer', err }))
				}
				Talk.replaceOrCreate(newTalk)
					.then(() => resolve(newTalk))
					.catch(err => reject(err));
			})
			.catch(err => reject({ error: 'Could not find talk', err }))
	})
}



module.exports = { changeTalkOwner };