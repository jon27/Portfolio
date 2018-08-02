import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Contact = () => (
	<div className='content-container contact__container'>
		<div>
			<h1>Contact me</h1>
		</div>
		<div className='contact__content'>
			
			<SocialIcon className='social' url='http://plus.google.com/+joncabre/' network='google' />
			<SocialIcon className='social' url='http://twitter.com/joncabre' network='twitter' />
		</div>
	</div>
);

export default Contact;
