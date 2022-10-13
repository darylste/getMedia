import React, { useState } from 'react';
import './VoucherSection.styles.scss';

import { ICartItem } from '../../../types';
import Cart from '../../molecules/cart/Cart.component';
import Spacer from '../../atoms/spacer/Spacer.component';
import Text from '../../atoms/text/Text.component';
import Voucher from '../../molecules/voucher/Voucher.component';

const VoucherSection: React.FC = () => {
	const [cart, setCart] = useState<ICartItem[]>([]);
	const [showCart, setShowCart] = useState<boolean>(false);

	const addToCart = (amount: number) => {
		const name = `£${amount} iTunes Voucher`;
		const isInBasket = cart.find((value) => value.name === name);
		if (isInBasket) {
			const item = isInBasket;
			item.quantity++;
			setCart([...cart]);
		} else {
			const newItem: ICartItem = { name, price: amount, quantity: 1 };
			const newItems = [...cart, newItem];
			setCart([...newItems]);
		}
		setShowCart(true);
	};

	const removeOneFromCart = (amount: number) => {
		const name = `£${amount} iTunes Voucher`;
		const item = cart.find((value) => value.name === name);
		if (item) {
			const updatedItem: ICartItem = {
				name,
				price: amount,
				quantity: item.quantity - 1,
			};
			const newItems = cart.filter((item) => item.name !== name);
			if (updatedItem.quantity > 0) {
				setCart([...newItems, updatedItem]);
			} else {
				setCart([...newItems]);
			}
		}
	};

	const hideCart = () => {
		setShowCart(false);
	};

	const clearCart = () => {
		setCart([]);
		hideCart();
	};

	if (showCart) {
		return (
			<>
				<div className='voucher-section'>
					<Text varient='h1'>Shop iTunes Vouchers</Text>
					<Spacer top='xs' />
					<div className='vouchers-container'>
						<Voucher addToCart={(amount) => addToCart(amount)} amount={5} />
						<Voucher addToCart={(amount) => addToCart(amount)} amount={10} />
						<Voucher addToCart={(amount) => addToCart(amount)} amount={15} />
						<Voucher addToCart={(amount) => addToCart(amount)} amount={20} />
						<Voucher addToCart={(amount) => addToCart(amount)} amount={25} />
					</div>
				</div>
				<Cart
					addToCart={(amount) => addToCart(amount)}
					removeOne={(amount) => removeOneFromCart(amount)}
					clearCart={() => clearCart()}
					hideCart={() => hideCart()}
					items={cart}
				/>
			</>
		);
	}

	return (
		<>
			<div className='voucher-section'>
				<Text varient='h1'>Shop iTunes Vouchers</Text>
				<Spacer top='xs' />
				<div className='vouchers-container'>
					<Voucher addToCart={(amount) => addToCart(amount)} amount={5} />
					<Voucher addToCart={(amount) => addToCart(amount)} amount={10} />
					<Voucher addToCart={(amount) => addToCart(amount)} amount={15} />
					<Voucher addToCart={(amount) => addToCart(amount)} amount={20} />
					<Voucher addToCart={(amount) => addToCart(amount)} amount={25} />
				</div>
			</div>
		</>
	);
};

export default VoucherSection;
