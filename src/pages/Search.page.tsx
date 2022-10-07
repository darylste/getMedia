import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchPage: React.FC = () => {
	interface ICollection {
		artistName: string;
		artworkUrl100: string;
		collectionName: string;
		previewUrl: string;
		primaryGenreName: string;
		releaseDate: string;
		trackId: number;
	}
	const [results, setResults] = useState<ICollection[]>([]);

	const location = useLocation();
	const term = location.search.split('=')[1];

	useEffect(() => {
		axios
			.get(`https://itunes.apple.com/search?term=${term}&country=gb`)
			.then((res) => setResults(res.data.results))
			.catch((err) => console.log(err));
	}, [term]);
	console.log(results);
	return (
		<section>
			{results.map((collection: ICollection) => (
				<div key={collection.trackId} className='card'>
					<h4>{collection.artistName}</h4>
					<h5>{collection.collectionName}</h5>
					<p>
						Year: {collection.releaseDate} Genre: {collection.primaryGenreName}
					</p>
				</div>
			))}
		</section>
	);
};

export default SearchPage;
