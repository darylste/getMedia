import React from 'react';
import './Search.styles.scss';

import Spacer from '../spacer/Spacer.component';

const Search: React.FC = () => {
	return (
		<Spacer top='md'>
			<form className='search'>
				<input
					type='text'
					className='search-input'
					placeholder='Start your search...'
				/>
				<button className='search-btn'>Search</button>
			</form>
		</Spacer>
	);
};

export default Search;
