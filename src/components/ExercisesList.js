import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const ExercisesList = () => {
	const [exercises, setExercises] = useState([]);

	useEffect(() => {
		const fetchExercises = async () => {
			const response = await axios.get('http://localhost:5000/api/exercises');
			setExercises(response.data);
		};
		fetchExercises();
	}, []);

	const deleteExercise = (id) => {
		axios
			.delete('http://localhost:5000/api/exercises/' + id)
			.then((res) => console.log(res.data));

		setExercises(exercises.filter((el) => el._id !== id));
	};

	const exerciseList = () => {
		return exercises.map((currentExercise) => {
			return (
				<Exercise
					exercise={currentExercise}
					deleteExercise={deleteExercise}
					key={currentExercise._id}
				/>
			);
		});
	};

	return (
		<StyledExerciseList>
			<h3>Logged Exercises</h3>
			<table className='table'>
				<thead className='thead-light'>
					<tr>
						<th>Username</th>
						<th>Description</th>
						<th>Duration</th>
						<th>Date</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>{exerciseList()}</tbody>
			</table>
		</StyledExerciseList>
	);
};

const Exercise = ({ exercise, deleteExercise }) => (
	<tr>
		<td>{exercise.username}</td>
		<td>{exercise.description}</td>
		<td>{exercise.duration}</td>
		<td>{exercise.date.substring(0, 10)}</td>
		<td>
			<Link to={'/edit/' + exercise._id}>Edit</Link> |{' '}
			<button
				onClick={() => {
					deleteExercise(exercise._id);
				}}
			>
				Delete
			</button>
		</td>
	</tr>
);

const StyledExerciseList = styled.div`
	padding: 2rem 4rem;

	a {
		padding: 1px 6px;
	}

	button {
		border: none;
		outline: none;
		background: transparent;
		font-weight: bold;
		color: #fff;
		font-size: 1rem;
		cursor: pointer;
	}

	table {
		table-layout: fixed;
		width: 50%;
	}

	td,
	th {
		width: 10rem;
		height: 2rem;
		text-align: center;
	}
	th {
		background: #b231cc;
	}
`;

export default ExercisesList;
