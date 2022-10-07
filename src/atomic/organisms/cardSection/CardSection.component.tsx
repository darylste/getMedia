import React from 'react';
import './CardSection.styles.scss';

interface ICardSectionProps {
	children: React.ReactNode;
}

const CardSection: React.FC<ICardSectionProps> = ({ children }) => {
	return <section className='card-section'>{children}</section>;
};

export default CardSection;
