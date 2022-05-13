import { useState, useEffect } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';

function App() {
	const [username, setUserName] = useState('');
	const [token, setToken] = useState(localStorage.getItem('token'));
	const [status, setStatus] = useState('active');
	// const localToken = localStorage.getItem('token');
	// console.log(localToken);

	useEffect(() => {
		if (localStorage.getItem('user_login_users') === null) {
			localStorage.setItem('user_login_users', JSON.stringify([]));
		}
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		sessionStorage.setItem(
			'user_login_users',
			JSON.stringify([
				{
					name: username,
				},
			]),
		);
		// checks if a user already exist

		const getActiveUsers = JSON.parse(
			localStorage.getItem('user_login_users') || [],
		);
		const active = getActiveUsers.some((user) => user.name === username);
		console.log(active);

		setUserName('');

		if (username === '') {
			console.log('input your username ');
		} else if (active === true) {
			console.log('user already exist');
		} else {
			setToken('true');
			addUser(username);

			// save user username to localStorage
			localStorage.setItem('token', JSON.stringify('true'));
		}
	};
	const handleLogout = () => {
		setToken('');
		setStatus('idle');
		console.log('logged out sucesssfully');
	};

	// add new user to login_users in localstorage
	const addUser = (username) => {
		const usersInLocalStorageAdd = JSON.parse(
			localStorage.getItem('user_login_users') || [],
		);
		usersInLocalStorageAdd.unshift({
			id: new Date().valueOf(),
			name: username,
			status: status,
		});
		localStorage.setItem(
			'user_login_users',
			JSON.stringify(usersInLocalStorageAdd),
		);
	};

	if (token !== 'true') {
		return <Login setUserName={setUserName} handleSubmit={handleSubmit} />;
	} else {
		return (
			<div className='App'>
				<BrowserRouter>
					<Routes>
						<Route
							path='/'
							element={<MainPage handleLogout={handleLogout} />}
						/>
						<Route path='/login' element={<Login />} />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
