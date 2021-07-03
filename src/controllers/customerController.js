const customerModal = require('../models/customerModal');
const nodeMailer = require('nodemailer');

const getCustomer = async (req, res) => {
	try {
		const customer = await customerModal.find().sort({ createdAt: -1 });
		res.status(200).send(customer);
	} catch (error) {
		res.status(500).send(error);
	}
};

const createCustomer = async (req, res) => {
	try {
		await customerModal.create(req.body, (err, data) => {
			if (err) {
				throw err;
			}
			const transporter = nodeMailer.createTransport({
				host: 'smtpout.secureserver.net',
				secure: true,
				secureConnection: false, // TLS requires secureConnection to be false
				requireTLS: true,
				port: 465,
				auth: {
					user: process.env.emailId,
					pass: process.env.password,
				},
			});
			const mailOptions = {
				from: process.env.emailId, //replace with your email
				to: process.env.emailId, //replace with your email
				subject: `New Inquery for Supports360 `,
				html: `<h1>Contact details</h1>
                       <h2> name:${req.body.fullName}</h2><br>
                       <h2> email:${req.body.email}</h2><br>
                       <h2> phonenumber:${req.body.phoneNumber}</h2><br>
                       <h2> message:This is Trial Message</h2>
                       <br>`,
			};
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					// console.log(error, '<>', info);
					throw error; // if error occurs send error as response to client
				}
			});
			res.status(201).send(data);
		});
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = { createCustomer, getCustomer };
