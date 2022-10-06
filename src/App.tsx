import React from 'react';
import './styles/App.scss';

import { Text } from './atomic/atoms/text/Text.component';
import Spacer from './atomic/atoms/spacer/Spacer.component';

function App() {
	return (
		<div className='App'>
			<Text varient='h1'>Find your favourites with GetMedia</Text>
			<Text varient='h2'>Find your favourites with GetMedia</Text>
			<Text varient='h3'>Find your favourites with GetMedia</Text>
			<Text varient='body'>Hello World</Text>
		</div>
	);
}

export default App;
