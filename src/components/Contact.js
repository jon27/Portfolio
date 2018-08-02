import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Contact = () => (
	<div className='content-container contact__container'>
		<div>
			<h1>Want to reach me?</h1>
		</div>
		<div className='contact__content'>
			<SocialIcon network="email" url='' />
			<SocialIcon url='' network='google' />
			<SocialIcon url='#' network='twitter' />
		</div>
	</div>
);

export default Contact;
