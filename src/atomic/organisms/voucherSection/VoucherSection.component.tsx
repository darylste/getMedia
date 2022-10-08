import React from 'react';
import './VoucherSection.styles.scss';

import Spacer from '../../atoms/spacer/Spacer.component';
import Text from '../../atoms/text/Text.component';
import Voucher from '../../molecules/voucher/Voucher.component';

const VoucherSection: React.FC = () => {
	return (
		<div className='voucher-section'>
			<Text varient='h1'>Shop iTunes Vouchers</Text>
			<Spacer top='xs' />
			<div className='vouchers-container'>
				<Voucher amount={5} />
				<Voucher amount={10} />
				<Voucher amount={15} />
				<Voucher amount={20} />
				<Voucher amount={25} />
			</div>
		</div>
	);
};

export default VoucherSection;
