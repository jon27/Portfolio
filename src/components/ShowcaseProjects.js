import React from 'react';

const ShowcaseProjects = () => (
	<div id='projects' className="project-container">
		<div>
			<h3 className='project__title'>Projects</h3>
		</div>
		<div>
			<div className='project__row'>
				<a href='https://expensify-app-jon.herokuapp.com/' target="_blank" className='project__item exp project__box '>
					<div>
						<p className='project-overlay'>Expensify</p>
					</div>
				</a>
				<a href='http://react-weather-app-jon.herokuapp.com/#/?_k=3qtqvl' target="_blank" className='project__item tic project__box '>
					<div>
						<p className='project-overlay'>Weather App</p>
					</div>
				</a>P
				<a href='https://whack-a-troll.herokuapp.com/' target="_blank" className='project__item troll project__box '>
					<div>
						<p className='project-overlay'>Wack A Troll</p>
					</div>
				</a>				
			</div>
			<div className='project__row'>
				<a href='https://drop-the-beat.herokuapp.com/' target="_blank" className='project__item drum project__box '>
					<div>
						<p className='project-overlay'>Drop the Beat</p>
					</div>
				</a>
				<a href='https://omnifood-.herokuapp.com/' target="_blank" className='project__item omni project__box '>
					<div>
						<p className='project-overlay'>OmniFood</p>
					</div>
				</a>
				<a href='https://picaso.herokuapp.com/' target="_blank" className='project__item canvas project__box '>
					<div>
						<p className='project-overlay'>Canvas Drawing</p>
					</div>
				</a>				
			</div>
			<div className='other-projects-box'>
				<a className='other-projects' href='#' target="_blank">Other Projects</a>
			</div>
		</div>
	</div>
);

export default ShowcaseProjects;
