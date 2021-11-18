import PortfolioList from './PortfolioList';

const PortfolioProject = () => {
	return (
		<div className='portfolioproject'>
			<PortfolioList />
			<div className='mini-icons'>
				<img src='react.svg' className='figma' />
				<img src='react.svg' className='illustrator' />
				<img src='react.svg' className='photoshop' />
			</div>
		</div>
	);
};

export default PortfolioProject;
