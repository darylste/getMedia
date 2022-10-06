import React from 'react';
import './Nav.styles.scss';

import { Link } from 'react-router-dom';
import Spacer from '../spacer/Spacer.component';
import Text from '../text/Text.component';

const Nav: React.FC = () => {
	return (
		<nav>
			<ul className='nav-list'>
				<li className='nav-item'>
					<Link to='/'>
						<Text varient='nav'>Home</Text>
					</Link>
				</li>
				<Spacer left='sm' />
				<li className='nav-item'>
					<Link to='/contact'>
						<Text varient='nav'>Get in Touch</Text>
					</Link>
				</li>
				<Spacer left='sm' />
				<li className='nav-item'>
					<Link to='/shop'>
						<Text varient='nav'>Vouchers</Text>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
