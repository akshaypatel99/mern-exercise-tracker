import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';
import EditExercise from './components/EditExercise';
import ExercisesList from './components/ExercisesList';
import Navbar from './components/Navbar';
import GlobalStyles from './GlobalStyles';

const App = () => {
	return (
		<BrowserRouter>
			<StyledApp>
				<GlobalStyles />
				<div className='container'>
					<Navbar />

					<Route path='/' exact component={ExercisesList} />
					<Route path='/edit/:id' component={EditExercise} />
					<Route path='/create' component={CreateExercise} />
					<Route path='/user' component={CreateUser} />
				</div>
			</StyledApp>
		</BrowserRouter>
	);
};

const StyledApp = styled.div`
	height: 100vh;
	width: 100%;
	background: linear-gradient(45deg, #450bd8, #390ad1);
	display: flex;
	justify-content: center;
	align-items: center;

	.container {
		height: 90vh;
		width: 80%;
		border-radius: 2rem;
		background: linear-gradient(45deg, #531ef4, #3c12f5);
		box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
	}
`;

export default App;
