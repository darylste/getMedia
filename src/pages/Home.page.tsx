import React from 'react';

import Banner from '../atomic/molecules/banner/Banner.component';
import Footer from '../atomic/molecules/footer/Footer.component';
import Header from '../atomic/molecules/header/Header.component';
import Hero from '../atomic/molecules/hero/Hero.component';

const Home: React.FC = () => {
	return (
		<>
			<Hero />
			<Banner />
		</>
	);
};

export default Home;
