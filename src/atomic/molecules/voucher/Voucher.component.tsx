import React from 'react';
import './Voucher.styles.scss';

import Text from '../../atoms/text/Text.component';

interface iVoucherProps {
	amount: 5 | 10 | 15 | 20 | 25;
}

const Voucher: React.FC<iVoucherProps> = ({ amount }) => {
	return (
		<div className='voucher-container'>
			<div className='voucher'>
				<img
					className='apple-icon'
					src='./assets/apple-icon.svg'
					alt='apple icon'
				/>
				<Text varient='body' color='white'>
					£{amount} iTunes Voucher
				</Text>
			</div>
			<button className='voucher-btn'>Add to cart</button>
		</div>
	);
};

export default Voucher;
