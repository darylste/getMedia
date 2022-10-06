import React from 'react';
import './Search.styles.scss';

const Search: React.FC = () => {
	return (
		<form className='search'>
			<input
				type='text'
				className='search-input'
				placeholder='Start your search...'
			/>
			<button className='search-btn'>Search</button>
		</form>
	);
};

export default Search;
