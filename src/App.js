import { React, useContext } from 'react';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Video from './pages/Video';
import Account from './pages/Account';
import { Routes, Route, Navigate } from 'react-router-dom';
import authContext from './context/authContext';

const App = () => {
	const { token } = useContext(authContext);

	return (
		<>
			<Routes>
				{token ? (
					<>
						<Route path='/' element={<Home />} />
						<Route path='*' element={<Navigate to={'/'} />} />
						<Route path='/video/:id' element={<Video />} />
						<Route path='/profile/:id' element={<Account />} />
					</>
				) : (
					<>
						<Route path='/SignUp' element={<SignUp />} />
						<Route path='*' element={<Navigate to={'/SignUp'} />} />
					</>
				)}
			</Routes>
		</>
	);
};

export default App;
