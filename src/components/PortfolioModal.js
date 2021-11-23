import React, { useState, useContext } from 'react';
import { ProjectContext } from './contexts/ProjectContext';
import './Portfolio.css';

const PortfolioModal = () => {
	const { activeIndex, modalOpen, setModalOpen, projects, setActiveIndex } =
		useContext(ProjectContext);

	console.log(activeIndex);
	console.log(projects.length);

	return (
		<div className={`modal ${modalOpen && 'modal-active'}`}>
			<div className='modal__portfolio'>
				<div className='modal__closer' onClick={() => setModalOpen(false)}>
					X
				</div>
				<div className='modal__portfolio-list' key={projects[activeIndex].id}>
					<div className='modal__left'>
						<img src={projects[activeIndex].imgLink} alt='icon' />
					</div>
					<div className='modal__right'>
						<h3 className='modal__title'>{projects[activeIndex].title}</h3>
						<h4 className='modal__stack'>
							{projects[activeIndex].projectStack}
						</h4>
						<p className='modal__description'>
							{projects[activeIndex].description}
						</p>
						<a
							rel='nofollow'
							rel='noopener'
							target='_blank'
							href={projects[activeIndex].link}
							className='modal__button'
						>
							VIEW PROJECT
						</a>
						<div className='modal__navigation'>
							<button
								className={`prev ${activeIndex <= 0 && 'grey'}`}
								onClick={
									activeIndex > 0
										? () => setActiveIndex(activeIndex - 1)
										: undefined
								}
							>
								&larr;
							</button>
							<button
								className={`next ${
									activeIndex >= projects.length - 1 && 'grey'
								}`}
								onClick={
									activeIndex < projects.length - 1
										? () => setActiveIndex(activeIndex + 1)
										: undefined
								}
							>
								&rarr;
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioModal;
