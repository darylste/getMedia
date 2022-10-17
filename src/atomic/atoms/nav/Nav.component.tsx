import React, { useState } from 'react';
import './Nav.styles.scss';

import { Link } from 'react-router-dom';
import Spacer from '../spacer/Spacer.component';
import Text from '../text/Text.component';

const Nav: React.FC = () => {
	const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

	if (showMobileNav) {
		return (
			<>
				<Spacer top='md' left='md' right='md'>
					<div className='nav-mobile'>
						<img
							onClick={() => setShowMobileNav(false)}
							className='nav-exit-icon'
							src='./assets/exit.svg'
							alt='exit icon'
						/>
						<a href='/' onClick={() => setShowMobileNav(false)}>
							<Text varient='mobile-nav'>Home</Text>
						</a>
						<Spacer top='lg' />
						<a href='/contact'>
							<Text varient='mobile-nav'>Get in Touch</Text>
						</a>
						<Spacer top='lg' />
						<a href='/shop'>
							<Text varient='mobile-nav'>Vouchers</Text>
						</a>
					</div>
				</Spacer>
			</>
		);
	} else {
		return (
			<>
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
				<img
					src='./assets/hamburger.svg'
					alt='hamburger icon'
					className='hamburger-icon'
					onClick={() => setShowMobileNav(true)}
				/>
			</>
		);
	}
};

export default Nav;
