import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.scss';

import Footer from './atomic/molecules/footer/Footer.component';
import Header from './atomic/molecules/header/Header.component';
import SearchPage from './pages/Search.page';
import HomePage from './pages/Home.page';
import ShopPage from './pages/Shop.page';
import ContactPage from './pages/Contact.page';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/search' element={<SearchPage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/shop' element={<ShopPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
