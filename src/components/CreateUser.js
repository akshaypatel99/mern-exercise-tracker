import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CreateUser = () => {
	const [username, setUsername] = useState('');

	const usernameHandler = (e) => {
		e.preventDefault();
		setUsername(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const user = {
			username: username,
		};

		console.log(user);

		axios
			.post('http://localhost:5000/api/users/add', user)
			.then((res) => console.log(res.data));

		setUsername('');
	};
	return (
		<UserForm>
			<h3>Create New User </h3>
			<form onSubmit={submitHandler}>
				<div className='form-group'>
					<label htmlFor='username'>Enter Username: </label>
					<input
						type='text'
						required
						name='username'
						value={username}
						onChange={usernameHandler}
					/>
				</div>

				<div className='form-group'>
					<button className='form-btn' type='submit'>
						Add user
					</button>
				</div>
			</form>
		</UserForm>
	);
};

const UserForm = styled.div`
	padding: 2rem 4rem;

	h3 {
		font-size: 2rem;
	}
`;

export default CreateUser;
