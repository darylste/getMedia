import React from 'react';
import './Card.styles.scss';

import Text from '../../atoms/text/Text.component';
import { ICollection } from '../../../types';
import { formatDate } from '../../../utils/index';

interface ICardProps {
	collection: ICollection;
}

const Card: React.FC<ICardProps> = ({
	collection: {
		artistName,
		collectionName,
		artworkUrl100,
		previewUrl,
		releaseDate,
		primaryGenreName,
	},
}) => {
	const formatLongText = (string: string) => {
		if (string) {
			const splitText = string.split('');
			const shortText = [];

			for (let i = 0; i < 18; i++) {
				shortText.push(splitText[i]);
			}
			if (splitText.length > 19) {
				shortText.push(['.']);
				shortText.push(['.']);
				shortText.push(['.']);
			}
			return shortText.join('');
		}
	};
	return (
		<div className='card'>
			<img src={artworkUrl100} alt={collectionName} className='card-img' />
			<div className='card-text'>
				<Text varient='h3'>{artistName}</Text>
				<Text varient='body'>{formatLongText(collectionName)}</Text>
				<Text varient='body'>{formatDate(releaseDate)}</Text>
				<Text varient='body'>{primaryGenreName}</Text>
			</div>
			<a className='card-btn' href={previewUrl}>
				Preview
			</a>
		</div>
	);
};

export default Card;
