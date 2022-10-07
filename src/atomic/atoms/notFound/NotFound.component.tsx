import React from 'react';
import './NotFound.styles.scss';

import Text from '../text/Text.component';

const NotFound: React.FC = () => {
	return (
		<div className='not-found-container'>
			<img
				className='not-found-img'
				src='./assets/not-found.svg'
				alt='not found svg'
			/>
			<Text varient='h2'>No results found</Text>
		</div>
	);
};

export default NotFound;
