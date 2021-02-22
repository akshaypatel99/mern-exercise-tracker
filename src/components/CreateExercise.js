import { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';
import styled from 'styled-components';

const CreateExercise = () => {
	const [username, setUsername] = useState('test user');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);
	const [date, setDate] = useState(new Date());
	const [users, setUsers] = useState(['test user']);

	useEffect(() => {
		const fetchUsers = async () => {
			const response = await axios.get('http://localhost:5000/api/users/');
			console.log(response);
			if (response.data.length > 0) {
				setUsers(response.data.map((user) => user.username));
				setUsername(response.data[0].username);
			}
		};

		fetchUsers();
	}, []);

	const usernameHandler = (e) => {
		e.preventDefault();
		setUsername(e.target.value);
	};
	const descriptionHandler = (e) => {
		e.preventDefault();
		setDescription(e.target.value);
	};
	const durationHandler = (e) => {
		e.preventDefault();
		setDuration(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const exercise = {
			username,
			description,
			duration,
			date,
		};

		console.log(exercise);

		axios
			.post('http://localhost:5000/api/exercises/add', exercise)
			.then((res) => console.log(res.data));

		setUsername('');
		setDescription('');
		setDuration(0);
		setDate(new Date());
	};

	return (
		<ExerciseForm>
			<h3>Create New Exercise Log</h3>
			<form onSubmit={submitHandler}>
				<div className='form-group'>
					<label htmlFor='userInput'>Username: </label>
					<select
						name='userInput'
						required
						value={username}
						onSelect={usernameHandler}
						onChange={usernameHandler}
					>
						{users.map((user) => (
							<option key={user} value={user}>
								{user}
							</option>
						))}
					</select>
				</div>

				<div className='form-group'>
					<label htmlFor='description'>Description: </label>
					<input
						type='text'
						name='description'
						value={description}
						onChange={descriptionHandler}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='duration'>Duration (in minutes): </label>
					<input
						type='text'
						name='duration'
						value={duration}
						onChange={durationHandler}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='date'>Date: </label>
					<DatePicker name='date' value={date} onChange={setDate} />
				</div>
				<div className='form-group'>
					<button className='form-btn' type='submit'>
						Add exercise
					</button>
				</div>
			</form>
		</ExerciseForm>
	);
};

const ExerciseForm = styled.div`
	padding: 2rem 4rem;

	.react-date-picker {
		background: #fff;
		border-radius: 10px;
		border: none;
		outline: none;
		padding: 0.5rem 1rem;
	}
`;

export default CreateExercise;
