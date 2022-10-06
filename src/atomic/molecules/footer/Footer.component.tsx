import React from 'react';
import './Footer.styles.scss';

import Text from '../../atoms/text/Text.component';
import Spacer from '../../atoms/spacer/Spacer.component';

const Footer: React.FC = () => {
	return (
		<footer>
			<div className='footer-list-container'>
				<Text varient='h3'>About</Text>
				<ul className='footer-list'>
					<li>Our Story</li>
					<li>Our Team</li>
					<li>Careers</li>
				</ul>
			</div>
			<div className='footer-list-container'>
				<Text varient='h3'>Follow Us</Text>
				<ul className='footer-list'>
					<li>Facebook</li>
					<li>Instagram</li>
					<li>Twitter</li>
				</ul>
			</div>
			<div className='footer-list-container'>
				<Text varient='h3'>Legal</Text>
				<ul className='footer-list'>
					<li>Terms and conditions</li>
					<li>Privicy Policy</li>
					<li>Terms of Use</li>
				</ul>
			</div>
			<div className='footer-list-container'>
				<Text varient='h3'>Contact</Text>
				<ul className='footer-list'>
					<li>123 Main Street</li>
					<li>Glasgow</li>
					<li>G1 123</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
