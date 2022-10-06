import React from 'react';
import './Header.styles.scss';

import Logo from '../../atoms/logo/Logo.component';
import Nav from '../../atoms/nav/Nav.component';
import Spacer from '../../atoms/spacer/Spacer.component';

const Header: React.FC = () => {
	return (
		<Spacer top='md' left='md' right='md'>
			<header>
				<Logo />
				<Nav />
			</header>
		</Spacer>
	);
};

export default Header;
