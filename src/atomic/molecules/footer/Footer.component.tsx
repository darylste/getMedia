import React from 'react';
import './Footer.styles.scss';

import Text from '../../atoms/text/Text.component';

const Footer: React.FC = () => {
	return (
		<footer>
			<div className='footer-list-container'>
				<Text varient='h4'>About</Text>
				<ul className='footer-list'>
					<li>
						<Text varient='footer-item'>Our Story</Text>
					</li>
					<li>
						<Text varient='footer-item'>Our Team</Text>
					</li>
					<li>
						<Text varient='footer-item'>Careers</Text>
					</li>
				</ul>
			</div>
			<div className='footer-list-container'>
				<Text varient='h4'>Follow Us</Text>
				<ul className='footer-list'>
					<li>
						<Text varient='footer-item'>Facebook</Text>
					</li>
					<li>
						<Text varient='footer-item'>Instagram</Text>
					</li>
					<li>
						<Text varient='footer-item'>Twitter</Text>
					</li>
				</ul>
			</div>
			<div className='footer-list-container'>
				<Text varient='h4'>Legal</Text>
				<ul className='footer-list'>
					<li>
						<Text varient='footer-item'>Terms and Conditions</Text>
					</li>
					<li>
						<Text varient='footer-item'>Privicy Policy</Text>
					</li>
					<li>
						<Text varient='footer-item'>Terms of Use</Text>
					</li>
				</ul>
			</div>
			<div className='footer-list-container'>
				<Text varient='h4'>Contact</Text>
				<ul className='footer-list'>
					<li>
						<Text varient='footer-item'>123 Main Street</Text>
					</li>
					<li>
						<Text varient='footer-item'>Glasgow</Text>
					</li>
					<li>
						<Text varient='footer-item'>G1 123</Text>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
