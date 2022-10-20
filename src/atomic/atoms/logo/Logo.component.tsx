import React from 'react';
import './Logo.styles.scss';

const Logo: React.FC = () => {
	return (
		<a href='/'>
			<img className='logo' src='/assets/logo.svg' alt='GetMedia Logo' />
		</a>
	);
};

export default Logo;
