import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    color: white;
    font-weight: bold;
  }
  
  h3 {
		font-size: 2rem;
	}
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: white;
  }
  input, select {
    font-weight: bold;
    font-size: 1rem;
    		padding: 0.5rem 2rem;
		border-radius: 10px;
  }
	label {
		font-size: 1.2rem;
		font-weight: bold;
		margin-right: 1rem;
	}

  .form-group {
		margin-bottom: 1rem;
	}

  .form-btn {
		border: none;
		cursor: pointer;
		font-size: 1.2rem;
		font-weight: bold;
		margin: 1rem 0;
		padding: 0.5rem 2rem;
		border-radius: 1rem;
		color: white;
		background: linear-gradient(45deg, #842ce9, #b231cc);
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

		:hover {
			opacity: 0.85;
		}
	}

  .react-date-picker {
		background: #fff;
		border-radius: 10px;
		border: none;
		outline: none;
		padding: 0.5rem 1rem;
	}
`;

export default GlobalStyles;
