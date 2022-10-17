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
				<label className='label' htmlFor='name'>
					Full Name
				</label>
				<input name='name' required className='input' type='text' />
			</div>
			<div className='form-group'>
				<label htmlFor='email address' className='label'>
					Email Address
				</label>
				<input name='email address' required className='input' type='email' />
			</div>
			<div className='form-group'>
				<label className='label' htmlFor='reason'>
					Reason for contact
				</label>
				<input name='reason' required className='input' type='text' />
			</div>
			<div className='form-group'>
				<label htmlFor='comment' className='label'>
					Comment
				</label>
				<textarea name='comment' required className='input'></textarea>
			</div>
			<div className='btn-container form-group'>
				<button type='submit' className='form-btn'>
					Submit
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
