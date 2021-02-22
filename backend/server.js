const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

app.get('/', (req, res) => {
	res.send('Server is running.');
});

const exerciseRouter = require('./routes/exercise.routes');
const userRouter = require('./routes/user.routes');

app.use('/api/exercises', exerciseRouter);
app.use('/api/users', userRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
