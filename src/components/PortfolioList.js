import React, { useState, useContext } from 'react';
import { ProjectContext } from './contexts/ProjectContext';

const PortfolioList = () => {
	const project = useContext(ProjectContext);

	console.log(project);
	return (
		<div className='portfoliolist'>
			<ul className='project-list'>
				{project.projects.map((item) => (
					<li className='project-list__component' key={item.id}>
						Project
						<svg href={item.imgLink}></svg>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PortfolioList;
