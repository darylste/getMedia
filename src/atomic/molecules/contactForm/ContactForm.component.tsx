import React from 'react';
import './ContactForm.styles.scss';

import Spacer from '../../atoms/spacer/Spacer.component';

const ContactForm: React.FC = () => {
	return (
		<form className='form'>
			<div className='form-group'>
				<label className='label'>Full Name</label>
				<input required className='input' type='text' />
			</div>
			<div className='form-group'>
				<label className='label'>Email Address</label>
				<input required className='input' type='email' />
			</div>
			<div className='form-group'>
				<label className='label'>Reason for contact</label>
				<input required className='input' type='text' />
			</div>
			<div className='form-group'>
				<label className='label'>Comment</label>
				<textarea required className='input'></textarea>
			</div>
			<button className='form-btn'>Submit</button>
		</form>
	);
};

export default ContactForm;
