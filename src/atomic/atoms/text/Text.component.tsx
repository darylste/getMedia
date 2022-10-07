import React from 'react';
import './Text.styles.scss';

type Varient = 'body' | 'h1' | 'h2' | 'h3' | 'h4' | 'nav' | 'footer-item';

interface ITextProps {
	varient: Varient;
	children: React.ReactNode;
}

const Text: React.FC<ITextProps> = ({ varient, children }) => {
	switch (varient) {
		case 'body':
			return <p className='body-text'>{children}</p>;
		case 'h1':
			return <h1>{children}</h1>;
		case 'h2':
			return <h2>{children}</h2>;
		case 'h3':
			return <h3>{children}</h3>;
		case 'h4':
			return <h4>{children}</h4>;
		case 'nav':
			return <p className='nav-text'>{children}</p>;
		case 'footer-item':
			return <p className='footer-item'>{children}</p>;
		default:
			return null;
	}
};

export default Text;
