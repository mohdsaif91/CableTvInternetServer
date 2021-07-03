const mongoose = require('mongoose');

const adminScheme = mongoose.Schema({
	userName: {
		require: true,
		type: String,
	},
	password: {
		require: true,
		type: String,
	},
});

const adminModal = mongoose.model('admin', adminScheme);

module.exports = adminModal;
