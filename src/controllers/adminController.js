const moment = require('moment');
const { format } = require('morgan');
const AdminModal = require('../models/admin');
const customerModal = require('../models/customerModal');

const logIn = async (req, res) => {
	try {
		const { userName, password } = req.body;

		const user = await AdminModal.findOne({ userName });
		if (!user) {
			throw { msg: 'No user found', status: 400 };
			// res.status(400).json({ msg: 'No user found', status: 400 });
		}
		const getPassword = await AdminModal.findOne({ password });
		if (!getPassword) {
			throw { msg: 'No user found', status: 400 };
		}
		res.status(200).json('login sucessFull');
		// }
	} catch (error) {
		res.status(400).send(error);
	}
};

const createUser = async (req, res) => {
	try {
		const user = req.body;
		await AdminModal.create(user, (err, data) => {
			if (err) {
				throw err;
			}
			res.status(201).send(data);
		});
	} catch (error) {
		res.status(500).send(data);
	}
};

const getDataWithDates = async (req, res) => {
	try {
		const { startDate, endDate } = req.params;
		const cust = await customerModal
			.find({
				createdAt: {
					$gte: startDate,
					$lte: endDate,
				},
			})
			.sort({ createdAt: -1 });
		res.status(200).send(cust);
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = { logIn, createUser, getDataWithDates };
