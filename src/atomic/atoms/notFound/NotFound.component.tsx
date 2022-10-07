import React from 'react';
import './NotFound.styles.scss';

import Text from '../text/Text.component';
import Spacer from '../spacer/Spacer.component';

const NotFound: React.FC = () => {
	return (
		<div className='not-found-container'>
			<img
				className='not-found-img'
				src='./assets/not-found.svg'
				alt='not found svg'
			/>
			<Spacer top='xs' bottom='xs'>
				<Text varient='h2'>No results found</Text>
			</Spacer>
			<Spacer left='md' right='md' bottom='xs'>
				<Text varient='body'>
					Whoops! We havent found any results that match your search. Please go
					back to the home page and try a different search.
				</Text>
			</Spacer>
		</div>
	);
};

export default NotFound;
