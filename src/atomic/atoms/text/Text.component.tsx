import React from 'react';
import './Text.styles.scss';

type IVarient = 'body' | 'h1' | 'h2' | 'h3';

interface ITextProps {
	varient: IVarient;
	children: React.ReactNode;
}

export const Text: React.FC<ITextProps> = ({ varient, children }) => {
	switch (varient) {
		case 'body':
			return <p>{children}</p>;
		case 'h1':
			return <h1>{children}</h1>;
		case 'h2':
			return <h2>{children}</h2>;
		case 'h3':
			return <h3>{children}</h3>;
		default:
			return null;
	}
};
