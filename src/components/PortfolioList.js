import { useContext } from 'react';
import { ProjectContext } from './contexts/ProjectContext';

const PortfolioList = () => {
	const { projects, setActiveIndex, setModalOpen } = useContext(ProjectContext);
	const currentModal = (index) => {
		setActiveIndex(index);
		setModalOpen(true);
	};

	return (
		<div className='portfolio-project'>
			<ul className='project-list'>
				{projects.map((item, index) => (
					<li
						className='project-list__component'
						onClick={() => currentModal(index)}
						key={item.id}
					>
						<img src={item.imgLink} alt='icon' />
					</li>
				))}
			</ul>
		</div>
	);
};

export default PortfolioList;
