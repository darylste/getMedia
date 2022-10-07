import React from 'react';
import './Loading.style.scss';

import Text from '../text/Text.component';
import Spacer from '../spacer/Spacer.component';

const Loading: React.FC = () => {
	return (
		<div className='loading-container'>
			<div className='lds-roller'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<Spacer top='xs' />
			<Text varient='h2'>Loading</Text>
		</div>
	);
};
export default Loading;
