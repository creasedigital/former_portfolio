import Navigation from './Navigation';
import Hero from './Hero';
import './Header.css';

const Header = () => {
	return (
		<header>
			<div className='container'>
				<Navigation />
				<Hero />
			</div>
		</header>
	);
};

export default Header;
