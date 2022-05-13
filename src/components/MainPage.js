import React, { useState } from 'react';
import DisplayLoggedInUsers from './DisplayLoggedInUsers';

const MainPage = ({ handleLogout }) => {
	// get username from localStorage
	const getUserName = JSON.parse(
		localStorage.getItem('user_login_users') || [],
	);
	const [userList, setUserList] = useState(getUserName);

	// check id and remove user from the localstorage when the user clicks
	const logoutActiveUser = (userid) => {
		console.log(userid);
		const newList = userList.filter((item) => item.id !== userid);
		setUserList(newList);
		newList.splice(newList.indexOf(userid), 1);
		localStorage.setItem('user_login_users', JSON.stringify(newList));
	};

	return (
		<div>
			<nav>
				<div className='btn_wrapper1'>
					<button className='logout_btn' onClick={handleLogout}>
						Logout
					</button>
				</div>
			</nav>
			<div className='container'>
				<h1> Welcome {getUserName[0].name}</h1>
				<h2>List of all active users</h2>
				<DisplayLoggedInUsers
					users={userList}
					logoutActiveUser={logoutActiveUser}
				/>
			</div>
		</div>
	);
};

export default MainPage;
