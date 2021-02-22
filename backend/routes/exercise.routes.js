const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const Exercise = require('../models/exercise.model');

// GET /api/exercises - Fetch all exercises
router.get(
	'/',
	asyncHandler(async (req, res, next) => {
		const exercises = await Exercise.find();

		res.json(exercises);
	})
);

// POST /api/exercises/add - Add new exercise
router.post(
	'/add',
	asyncHandler(async (req, res, next) => {
		const username = req.body.username;
		const description = req.body.description;
		const duration = Number(req.body.duration);
		const date = Date.parse(req.body.date);

		const newExercise = new Exercise({
			username,
			description,
			duration,
			date,
		});

		await newExercise.save();
		res.status(201).json(newExercise);
	})
);

// GET /api/exercises/:id - Get exercise by ID
router.get(
	'/:id',
	asyncHandler(async (req, res, next) => {
		const exercise = await Exercise.findById(req.params.id);

		if (exercise) {
			res.status(200).json(exercise);
		} else {
			res.status(404);
			throw new Error('Exercise not found');
		}
	})
);

// DELETE /api/exercises/:id - Delete exercise by ID
router.delete(
	'/:id',
	asyncHandler(async (req, res, next) => {
		const exercise = await Exercise.findById(req.params.id);

		if (exercise) {
			await exercise.delete();
			res.send('Exercise deleted');
		} else {
			res.status(404);
			throw new Error('Exercise not found');
		}
	})
);

// PUT /api/exercises/:id - Update exercise by ID
router.put(
	'/:id',
	asyncHandler(async (req, res, next) => {
		const exercise = await Exercise.findById(req.params.id);

		if (exercise) {
			exercise.username = req.body.username;
			exercise.description = req.body.description;
			exercise.duration = Number(req.body.duration);
			exercise.date = Date.parse(req.body.date);

			const updatedExercise = await exercise.save();
			res.status(200).json(updatedExercise);
		} else {
			res.status(404);
			throw new Error('Exercise not found');
		}
	})
);

module.exports = router;
