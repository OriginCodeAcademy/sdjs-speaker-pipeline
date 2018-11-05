'use strict';

const { getMeetups } = require('../../server/utils/getMeetups');

module.exports = function (Talk) {
	Talk.getMeetups = function (cb) {
		getMeetups()
			.then(meetups => cb(null, meetups))
			.catch(err => cb(err))
	}

	Talk.remoteMethod('getMeetups', {
		description: 'Gets all SDJS meetups for the next 3 months.',
		http: {
			path: '/getMeetups',
			verb: 'get'
		},
		returns: {
			arg: 'data',
			type: 'array',
			root: true
		}
	})
const { sendEmailToSpeaker } = require('../../server/utils/sendGridEmailer');
module.exports = function(Talk) {
    Talk.sendEmailToSpeaker = function(speakerEmail, meetupTitle, meetupDate, cb) {
        sendEmailToSpeaker(speakerEmail, meetupTitle, meetupDate)
            .then ((email) => cb(null, email))
            .catch(err => cb(err))
    }

    Talk.remoteMethod('sendEmailToSpeaker', {
        description: 'Email speaker',
        accepts: [{
            arg: 'speakerEmail',
            type: 'string'
        },
        {
            arg: 'meetupTitle',
            type: 'string'
        },
        {
            arg: 'meetupDate',
            type: 'string'
        }],
        http: {
            path: '/sendEmailToSpeaker',
            veb: 'get'
        },
        returns: {
            arg: 'data',
            type: 'array',
            root: true
        }
    })

    Talk.sendEmailToAdmin = function(speakerEmail, adminEmail, speakerName, meetupTitle, meetupDate, cb) {
        sendEmailToAdmin(speakerEmail, adminEmail, speakerName, meetupTitle, meetupDate)
            .then ((email) => cb(null, email))
            .catch(err => cb(err))
    }

    Talk.remoteMethod('sendEmailToAdmin', {
        description: 'Email admin',
        accepts: [{
            arg: 'speakerEmail',
            type: 'string'
        },
        {
            arg: 'meetupTitle',
            type: 'string'
        },
        {
            arg: 'meetupDate',
            type: 'string'
        },
        {
            arg: 'speakerName',
            type: 'string'
        }],
        http: {
            path: '/sendEmailToAdmin',
            veb: 'get'
        },
        returns: {
            arg: 'data',
            type: 'array',
            root: true
        }
    })
};
