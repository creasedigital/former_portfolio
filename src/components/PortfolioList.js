import React, { useState, useContext } from 'react';
import { ProjectContext } from './contexts/ProjectContext';

const PortfolioList = () => {
	const { projects, setModalOpen } = useContext(ProjectContext);

	return (
		<div className='portfolio-project'>
			<ul className='project-list'>
				{projects.map((item) => (
					<li
						className='project-list__component'
						onClick={() => setModalOpen(true)}
						key={item.id}
					>
						<img src={item.imgLink} alt='icon' />
					</li>
				))}
			</ul>
			<div className='mini-icons'>
				<img src='react.svg' alt='icon' className='figma' />
				<img src='react.svg' alt='icon' className='illustrator' />
				<img src='react.svg' alt='icon' className='photoshop' />
			</div>
		</div>
	);
};

export default PortfolioList;
