import React from 'react';
import './Cart.styles.scss';

import Text from '../../atoms/text/Text.component';
import Spacer from '../../atoms/spacer/Spacer.component';
import { ICartItem } from '../../../types';

interface ICartProps {
	items: ICartItem[];
	addToCart: (amount: number) => void;
	removeOne: (amount: number) => void;
	clearCart: () => void;
}
const Cart: React.FC<ICartProps> = ({
	items = [],
	addToCart,
	removeOne,
	clearCart,
}) => {
	let cartValue = 0;

	// prevent cart items from being resorted when quantity ajusted
	const sortedItems = items.sort((a, b) => (a.price > b.price ? 1 : -1));

	sortedItems.map((item) => {
		cartValue += item.price * item.quantity;
	});

	return (
		<div className='cart'>
			<Text varient='h3'>Your basket</Text>
			<img src='./assets/exit.svg' alt='exit icon' className='exit-icon' />
			{items.map((item) => (
				<React.Fragment key={item.name}>
					<Spacer top='xs' />
					<div className='cart-field'>
						<Text varient='body'>{item.name}</Text>
						<img
							onClick={() => removeOne(item.price)}
							className='cart-quantity-icon'
							src='./assets/minus.svg'
							alt='minus icon'
						/>
						<p className='cart-quantity'>{item.quantity}</p>
						<img
							onClick={() => addToCart(item.price)}
							className='cart-quantity-icon'
							src='./assets/plus.svg'
							alt='plus icon'
						/>
						<Text varient='h4'>£{item.price * item.quantity}</Text>
					</div>
				</React.Fragment>
			))}
			<Spacer bottom='md' />
			<p onClick={() => clearCart()} className='cart-clear'>
				clear cart
			</p>
			<div className='cart-total'>
				<p className='cart-total-text'>Total</p>
				<p className='cart-total-value'>£{cartValue}</p>
			</div>
			<button className='cart-btn'>checkout</button>
		</div>
	);
};

export default Cart;
