import React, { useState } from 'react';
import Submitted from '../submitted/Submitted.component';
import './ContactForm.styles.scss';

const ContactForm: React.FC = () => {
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitted(true);
	};

	if (isSubmitted) {
		return <Submitted />;
	}
	return (
		<form className='form' onSubmit={handleSubmit}>
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
			<button type='submit' className='form-btn'>
				Submit
			</button>
		</form>
	);
};

export default ContactForm;
