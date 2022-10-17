import React from 'react';
import './Text.styles.scss';

type Varient =
	| 'body'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'nav'
	| 'mobile-nav'
	| 'footer-item';
type Color = 'black' | 'white';

interface ITextProps {
	varient: Varient;
	color?: Color;
	children: React.ReactNode;
}

const Text: React.FC<ITextProps> = ({ varient, color = 'black', children }) => {
	switch (varient) {
		case 'body':
			return <p className={`color-${color} body-text`}>{children}</p>;
		case 'h1':
			return <h1 className={`color-${color}`}>{children}</h1>;
		case 'h2':
			return <h2 className={`color-${color}`}>{children}</h2>;
		case 'h3':
			return <h3 className={`color-${color}`}>{children}</h3>;
		case 'h4':
			return <h4 className={`color-${color}`}>{children}</h4>;
		case 'nav':
			return <p className={`color-${color} nav-text`}>{children}</p>;
		case 'mobile-nav':
			return <h2 className={`color-${color} mobile-nav-text`}>{children}</h2>;
		case 'footer-item':
			return <p className={`color-${color} footer-item`}>{children}</p>;
		default:
			return null;
	}
};

export default Text;
