import React from 'react';
import { IconContext, Provider } from "react-icons";
import { Icon } from 'react-icons-kit';
import {fire} from 'react-icons-kit/icomoon/fire';
import {alertCircled} from 'react-icons-kit/ionicons/alertCircled';
import {code} from 'react-icons-kit/feather/code';
import {ic_devices} from 'react-icons-kit/md/ic_devices'
import {Row, Col } from 'react-materialize';
import { FaHtml5, FaReact, FaCss3Alt, FaFire } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io";
import { TiPin } from "react-icons/ti";

const ListSkills = () => (

	<div className='skills'>
		<div className='skills__title'>
			<h3>Skills</h3>
		</div>

		<div className='skills-container'>
			<div className='b skills-item'>
			 	<FaReact />
			 	<p >React Js</p>
			 </div>
			<div className='t skills-item'>
				<FaHtml5 />
				<p>HTML</p>
			</div>
			<div className='o skills-item'>
				<FaCss3Alt />
				<p>CSS</p>
			</div>
			<div className='b skills-item'>
				<IoLogoJavascript />
				<p>Javascript</p>
			</div>
		</div>		
		<div className='skills-container'>
			<div  className='b skills-item'>
				<Icon size={32} icon={fire} />
				<p>Firebase</p>
			</div>
			<div className='o skills-item'>
				<img src='/images/redux.svg' />
				<p>Redux</p>
			</div>
			<div className='t skills-item'>
				<Icon size={32} icon={ic_devices} />
				<p>Yarn</p>
			</div>
			<div className='b skills-item'>
				<Icon size={32} icon={code} />
				<p>Webpack</p>
			</div>
		</div>
	</div>
);

export default ListSkills;

