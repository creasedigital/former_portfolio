import React, { useState, useContext } from 'react';
import { ProjectContext } from './contexts/ProjectContext';

const PortfolioModal = () => {
	const project = useContext(ProjectContext);

	return (
		<div className='modal'>
			<div className='modal__closer'>X</div>
			<ul className='modal__portfolio'>
				{project.projects.map((item, index) => (
					<li className='modal__portfolio-list' key={item.id}>
						<img src={item.imgLink} />
						<h3 className='modal__title'>item.title</h3>
						<h4 className='modal__stack'>item.projectStack</h4>
						<p className='modal__description'>item.description</p>
						<a href='item.link' className='modal__button'>
							VIEW PROJECT
						</a>
						<div className='modal__navigation'>
							<button
								className='prev'
								onClick={() => index--}
								onblur={() => index--}
							>
								&larr;
							</button>
							<button
								className='next'
								onClick={() => index++}
								onblur={() => index++}
							>
								&rarr;
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PortfolioModal;
