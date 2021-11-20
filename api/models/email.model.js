'use strict';
var mongoose = require('mongoose');
var Email = mongoose.Schema;
var emailSchma = new Email({
	name: {
	    type: String
	},
	lastName: {
	    type: String
	},
	email: {
	    type: String
	},
	description: {
	    type: String
	},
	company: {
	    type: String
	},
	phone: {
	    type: String
	}
	
});
module.exports = mongoose.model('Email', emailSchma);