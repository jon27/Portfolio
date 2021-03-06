import React from 'react';



const ListSkills = () => (

	<div id='skills' className='skills'>
		<div className='skills__title_container'>
			<h1 className='skills__title'>Skills</h1>
		</div>

		<div className='skills-container'>
			<div className='b skills-item'>
			 	<img src='/images/react.svg' />
			 	<p >React Js</p>
			 </div>
			<div className='t skills-item'>
				<img src='/images/html5.svg' />
				<p>HTML</p>
			</div>
			<div className='o skills-item'>
				<img src='/images/css-3.svg' />
				<p>CSS</p>
			</div>
			<div className='b skills-item'>
				<img src='/images/javascript.svg' />
				<p>Javascript</p>
			</div>
		</div>		
		<div className='skills-container'>
			<div  className='b skills-item'>
				<img src='/images/firebase-2.svg' />
				<p>Firebase</p>
			</div>
			<div className='o skills-item'>
				<img src='/images/redux.svg' />
				<p>Redux</p>
			</div>
			<div className='t skills-item'>
				<img src='/images/yarn.svg' />
				<p>Yarn</p>
			</div>
			<div className='b skills-item'>
				<img src='/images/webpack-icon.svg' />
				<p>Webpack</p>
			</div>
		</div>
	</div>
);

export default ListSkills;