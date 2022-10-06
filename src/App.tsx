import React from 'react';
import './styles/App.scss';

import Spacer from './atomic/atoms/spacer/Spacer.component';
import Header from './atomic/molecules/header/Header.component';

function App() {
	return (
		<div className='App'>
			<Spacer top='md' left='lg' right='lg'>
				<Header />
			</Spacer>
		</div>
	);
}

export default App;
