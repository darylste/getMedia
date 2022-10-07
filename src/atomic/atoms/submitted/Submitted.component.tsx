import React from 'react';
import './Submitted.style.scss';

import Text from '../text/Text.component';
import Spacer from '../spacer/Spacer.component';

const Submitted: React.FC = () => {
	return (
		<div className='submitted-container'>
			<img
				src='./assets/thanks.svg'
				alt='thank you graphic'
				className='thanks-img'
			/>
			<Spacer top='xs' bottom='xs'>
				<Text varient='h2'>Thanks for the message!</Text>
			</Spacer>
			<Spacer left='md' right='md' bottom='xs'>
				<Text varient='body'>
					We have recieved your form and will get back to you via the email
					address provided as soon as possible.
				</Text>
			</Spacer>
		</div>
	);
};

export default Submitted;
