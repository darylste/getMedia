import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.scss';

import Contact from './pages/Contact.page';
import Footer from './atomic/molecules/footer/Footer.component';
import Header from './atomic/molecules/header/Header.component';
import Home from './pages/Home.page';
import Shop from './pages/Shop.page';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/shop' element={<Shop />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
