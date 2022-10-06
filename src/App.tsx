import React from 'react';
import './styles/App.scss';

import Spacer from './atomic/atoms/spacer/Spacer.component';
import Logo from './atomic/atoms/logo/Logo.component';

function App() {
	return (
		<div className='App'>
			<Spacer top='md' left='lg' right='lg'>
				<Logo />
			</Spacer>
		</div>
	);
}

export default App;
