import PortfolioList from './PortfolioList';

const PortfolioProject = () => {
	return (
		<div className='portfolioproject'>
			<PortfolioList />
			<div className='mini-icons'>
				<svg className='figma'>figma</svg>
				<svg className='illustrator'>illustrator</svg>
				<svg className='photoshop'>photoshop</svg>
			</div>
		</div>
	);
};

export default PortfolioProject;
