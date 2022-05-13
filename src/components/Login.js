import React from 'react';

const Login = ({ setUserName, handleSubmit }) => {
	return (
		<div className='wrapper'>
			<div className='outer'>
				<div className='inner'>
					<form onSubmit={handleSubmit}>
						<h2>Enter a username to Login</h2>
						<input
							type='text'
							placeholder='Enter Username'
							onChange={(e) => setUserName(e.target.value)}
						/>
						<div className='btn_wrapper'>
							<button className='btn'>Sign In</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
