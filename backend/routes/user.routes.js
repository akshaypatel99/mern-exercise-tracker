const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');

// GET /api/users/ - Get all users
router.get(
	'/',
	asyncHandler(async (req, res, next) => {
		const users = await User.find();

		res.json(users);
	})
);

// POST /api/users/add - Add a new User
router.post(
	'/add',
	asyncHandler(async (req, res, next) => {
		const username = req.body.username;

		const userExists = await User.findOne({ username });

		if (userExists) {
			res.status(400);
			throw new Error('User already exists');
		}

		const newUser = new User({ username });

		await newUser.save();
		res.status(201).json(newUser);
	})
);

module.exports = router;
