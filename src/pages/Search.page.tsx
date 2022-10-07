import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ICollection } from '../types';
import axios from 'axios';

import Card from '../atomic/molecules/card/Card.component';
import CardSection from '../atomic/organisms/cardSection/CardSection.component';
import Text from '../atomic/atoms/text/Text.component';
import Spacer from '../atomic/atoms/spacer/Spacer.component';
import Loading from '../atomic/atoms/loading/Loading.component';

const SearchPage: React.FC = () => {
	const [results, setResults] = useState<ICollection[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [hasError, setHasError] = useState<boolean>(false);

	const location = useLocation();
	const term = location.search.split('=')[1];

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`https://itunes.apple.com/search?term=${term}&country=gb`)
			.then((res) => setResults(res.data.results))
			.catch(() => setHasError(true))
			.finally(() => setIsLoading(false));
	}, [term]);

	if (isLoading) {
		return <Loading />;
	}
	if (hasError || !results.length) {
		return <div>ERROR</div>;
	}

	return (
		<>
			<Spacer top='sm' right='md' bottom='sm' left='md'>
				<Text varient='h2'>Showing {results.length} results...</Text>
				<Spacer top='xs' />
				<CardSection>
					{results.map((collection: ICollection) => (
						<Card key={collection.trackId} collection={collection} />
					))}
				</CardSection>
			</Spacer>
		</>
	);
};

export default SearchPage;
