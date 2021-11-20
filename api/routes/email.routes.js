'use strict';
module.exports = function(app) {
	var email = require('../controllers/email.controller');
	app.route('/api/sendEmail').post(email.send_email);
};