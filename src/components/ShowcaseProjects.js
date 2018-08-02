import React from 'react';
import {Row, Col, Card, CardTitle} from 'react-materialize';
import { Link } from 'react-router';

const ShowcaseProjects = () => (
	<div className="project-container">
		<div>
			<h3>Projects</h3>
		</div>
		<div>
			<div className='project__row'>
				<a href='#' className='project__item exp project__box '>
					<div>
						<p className='project-overlay'>Expensify</p>
					</div>
				</a>
				<a href='#' className='project__item omni project__box '>
					<div>
						<p className='project-overlay'>OmniFood</p>
					</div>
				</a>
				<a href='#' className='project__item troll project__box '>
					<div>
						<p className='project-overlay'>Wack A Troll</p>
					</div>
				</a>				
			</div>
			<div className='project__row'>
				<a href='#' className='project__item drum project__box '>
					<div>
						<p className='project-overlay'>Drop the Beat</p>
					</div>
				</a>
				<a href='#' className='project__item tic project__box '>
					<div>
						<p className='project-overlay'>Tic tac toe</p>
					</div>
				</a>
				<a href='#' className='project__item canvas project__box '>
					<div>
						<p className='project-overlay'>Canvs Drawing</p>
					</div>
				</a>				
			</div>
			<div className='project__box other-projects'>
				<a href='#'>Other Projects</a>
			</div>
		</div>
	</div>
);

export default ShowcaseProjects;
