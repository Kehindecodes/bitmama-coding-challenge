import React from 'react';

const DisplayLoggedInUsers = ({ users, logoutActiveUser }) => {
	return (
		<div>
			<ul>
				{users.map((user) => (
					<li key={user.id} className='li'>
						<span className='name'>{user.name}</span>
						<button className='btn2' onClick={() => logoutActiveUser(user.id)}>
							Logout
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default DisplayLoggedInUsers;
