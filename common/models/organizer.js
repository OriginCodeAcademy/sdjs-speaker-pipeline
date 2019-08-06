'use strict';

const { sendEmailToNewAdmin } = require('../../server/utils/sendGridEmailer');

module.exports = function(Organizer) {
  Organizer.afterRemote('create', function (ctx, modelInstance, next) {
    const username = ctx.result.username;
    const email = ctx.result.email;
    console.log('this is username: ' + username);
    console.log('this is email: ' + email);
    sendEmailToNewAdmin(username, email)
        .then(() => next())
        .catch(err => {
          next(new Error(err.message));
        });
  });
};
