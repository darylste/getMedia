import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.styles.scss';

const Search: React.FC = () => {
	const [term, setTerm] = useState('');
	const navigate = useNavigate();

	// when form submits, stop form from reloading, use navigate from RRD to redirect to search page with search term as query parameter
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate(`/search?term=${term}`);
	};

	return (
		<form className='search' onSubmit={handleSubmit}>
			<input
				type='text'
				required
				className='search-input'
				placeholder='Start your search...'
				value={term}
				onChange={(e) => setTerm(e.target.value)}
			/>
			<button className='search-btn'>Search</button>
		</form>
	);
};

export default Search;
