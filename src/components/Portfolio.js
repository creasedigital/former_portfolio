import Myportfolio from './MyPortfolio';
import PortfolioProject from './PortfolioProject';
import './Portfolio.css';

const Portfolio = () => {
	return (
		<section className='portfolio'>
			<Myportfolio />
			<PortfolioProject />
		</section>
	);
};

export default Portfolio;
