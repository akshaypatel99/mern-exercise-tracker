import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-date-picker';
import styled from 'styled-components';

const EditExercise = () => {
	const [username, setUsername] = useState('test user');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);
	const [date, setDate] = useState(new Date());
	const [users, setUsers] = useState(['test user']);

	const { id } = useParams();

	useEffect(() => {
		const fetchExercise = async () => {
			const response = await axios.get(
				`http://localhost:5000/api/exercises/${id}`
			);
			console.log(response);
			setUsername(response.data.username);
			setDescription(response.data.description);
			setDuration(response.data.duration);
			setDate(new Date(response.data.date));
		};

		const fetchUsers = async () => {
			const response = await axios.get('http://localhost:5000/api/users/');
			console.log(response);
			if (response.data.length > 0) {
				setUsers(response.data.map((user) => user.username));
			}
		};

		fetchUsers();
		fetchExercise();
	}, [id]);

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
			.put(`http://localhost:5000/api/exercises/${id}`, exercise)
			.then((res) => console.log(res.data));
	};

	return (
		<EditExerciseForm>
			<h3>Edit Exercise</h3>
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
						Edit exercise
					</button>
				</div>
			</form>
		</EditExerciseForm>
	);
};

const EditExerciseForm = styled.div`
	padding: 2rem 4rem;

	.react-date-picker {
		background: #fff;
		border-radius: 10px;
		border: none;
		outline: none;
		padding: 0.5rem 1rem;
	}
`;

export default EditExercise;
