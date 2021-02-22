import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<Nav>
			<Link to='/'>
				<h2>ExcerTracker</h2>
			</Link>
			<div className='list'>
				<ul>
					<li>
						<Link to='/'>Exercises</Link>
					</li>
					<li>
						<Link to='/create'>Create Exercise Log</Link>
					</li>
					<li>
						<Link to='/user'>Create User</Link>
					</li>
				</ul>
			</div>
		</Nav>
	);
};

const Nav = styled.nav`
	background: linear-gradient(90deg, #842ce9, #3c12f5);
	width: 100%;
	min-height: 8vh;
	border-radius: 2rem 2rem 0 0;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: space-between;

	h2 {
		font-size: 2.4rem;
		margin-left: 1.5rem;
	}
	.list {
		display: flex;
		justify-content: center;
		align-items: center;

		ul {
			margin-right: 1.5rem;
			padding: 1rem;
			display: flex;
			justify-content: space-evenly;
		}

		li {
			margin-left: 1.5rem;
		}

		a {
			font-size: 1.5rem;
			font-weight: bold;
		}
	}
`;

export default Navbar;
