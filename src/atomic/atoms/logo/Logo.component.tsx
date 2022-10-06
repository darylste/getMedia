import React from 'react';
import './Logo.styles.scss';

const Logo: React.FC = () => {
	return (
		<a href='/index.html'>
			<img className='logo' src='/logo.svg' alt='GetMedia Logo' />
		</a>
	);
};

export default Logo;
