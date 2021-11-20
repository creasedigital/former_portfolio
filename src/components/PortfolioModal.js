import React, { useState, useContext } from 'react';
import { ProjectContext } from './contexts/ProjectContext';
import './Portfolio.css';

const PortfolioModal = () => {
	const {
		activeNextButton,
		activePreviousButton,
		modalOpen,
		setModalOpen,
		projects,
	} = useContext(ProjectContext);

	console.log(projects);

	return (
		<div className={`modal ${modalOpen && 'modal-active'}`}>
			<div className='modal__portfolio'>
				<div className='modal__closer' onClick={() => setModalOpen(false)}>
					X
				</div>
				{projects.map((project) => (
					<div className='modal__portfolio-list' key={project.id}>
						<div className='modal__left'>
							<img src={project.imgLink} alt='icon' />
						</div>
						<div className='modal__right'>
							<h3 className='modal__title'>{project.title}</h3>
							<h4 className='modal__stack'>{project.projectStack}</h4>
							<p className='modal__description'>{project.description}</p>
							<a href={project.link} className='modal__button'>
								VIEW PROJECT
							</a>
							<div className='modal__navigation'>
								<button
									className='prev'
									onClick={() => projects.length--}
									onblur={() => projects.length--}
								>
									&larr;
								</button>
								<button
									className='next'
									onClick={() => projects.length++}
									onblur={() => projects.length++}
								>
									&rarr;
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PortfolioModal;
