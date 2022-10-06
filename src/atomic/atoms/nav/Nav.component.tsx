import React from 'react';
import './Nav.styles.scss';

import Spacer from '../spacer/Spacer.component';
import { Text } from '../text/Text.component';

const Nav: React.FC = () => {
	return (
		<nav>
			<ul className='nav-list'>
				<li className='nav-item'>
					<Text varient='nav'>Home</Text>
				</li>
				<Spacer left='sm' />
				<li className='nav-item'>
					<Text varient='nav'>Get in Touch</Text>
				</li>
				<Spacer left='sm' />
				<li className='nav-item'>
					<Text varient='nav'>Vouchers</Text>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
