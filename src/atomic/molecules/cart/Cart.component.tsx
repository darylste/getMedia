import React from 'react';
import './Cart.styles.scss';

import Text from '../../atoms/text/Text.component';
import Spacer from '../../atoms/spacer/Spacer.component';

const Cart: React.FC = () => {
	return (
		<div className='cart'>
			<Text varient='h3'>Your basket</Text>
			<img src='./assets/exit.svg' alt='exit icon' className='exit-icon' />
			<Spacer top='xs' />
			<div className='cart-field'>
				<Text varient='body'>Item number one</Text>
				<input className='cart-quantity' type='number' />
				<Text varient='h4'>£15</Text>
			</div>
			<Spacer top='xs' />
			<div className='cart-field'>
				<Text varient='body'>Item number two</Text>
				<input className='cart-quantity' type='number' />
				<Text varient='h4'>£15</Text>
			</div>
			<p className='cart-clear'>clear cart</p>
			<div className='cart-total'>
				<p className='cart-total-text'>Total</p>
				<p className='cart-total-value'>£30</p>
			</div>
			<button className='cart-btn'>checkout</button>
		</div>
	);
};

export default Cart;
