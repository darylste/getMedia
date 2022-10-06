import React from 'react';
import './styles/App.scss';

import Banner from './atomic/molecules/banner/Banner.component';
import Spacer from './atomic/atoms/spacer/Spacer.component';
import Header from './atomic/molecules/header/Header.component';
import Hero from './atomic/molecules/hero/Hero.component';

function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<Banner />
		</div>
	);
}

export default App;
