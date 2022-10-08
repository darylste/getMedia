import React from 'react';
import './FormSection.styles.scss';

import Text from '../../atoms/text/Text.component';
import ContactForm from '../../molecules/contactForm/ContactForm.component';
import Spacer from '../../atoms/spacer/Spacer.component';

const FormSection: React.FC = () => {
	return (
		<div className='form-section'>
			<Spacer top='xs' left='md' right='md'>
				<Text varient='h1'>Get in Touch</Text>
			</Spacer>
			<ContactForm />
		</div>
	);
};

export default FormSection;
