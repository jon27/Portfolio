import React from 'react';
import { Icon } from 'react-icons-kit';
import {fire} from 'react-icons-kit/icomoon/fire';
import {alertCircled} from 'react-icons-kit/ionicons/alertCircled';
import {code} from 'react-icons-kit/feather/code';
import {ic_devices} from 'react-icons-kit/md/ic_devices'
import {Row, Col } from 'react-materialize';


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


		// 		<div className='skills-container'>
		// 	<div  className='b skills-item'>
		// 		<img src='/images/firebase.svg' />
		// 		<Icon size={32} icon={fire} />
		// 		<p>Firebase</p>
		// 	</div>
		// 	<div className='o skills-item'>
		// 		<img src='/images/redux.svg' />
		// 		<p>Redux</p>
		// 	</div>
		// 	<div className='t skills-item'>
		// 		<img src='/images/yarn.svg' />
		// 		<Icon size={32} icon={ic_devices} />
		// 		<p>Yarn</p>
		// 	</div>
		// 	<div className='b skills-item'>
		// 		<img src='/images/webpack-icon.svg' />
		// 		<Icon size={32} icon={code} />
		// 		<p>Webpack</p>
		// 	</div>
		// </div>