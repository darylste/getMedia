import React from 'react';
import './styles/App.scss';

import Banner from './atomic/molecules/banner/Banner.component';
import Header from './atomic/molecules/header/Header.component';
import Hero from './atomic/molecules/hero/Hero.component';
import Footer from './atomic/molecules/footer/Footer.component';

function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<Banner />
			<Footer />
		</div>
	);
}

export default App;
