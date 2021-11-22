import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className='nav'>
			<ul className='menu-nav'>
				<Link to='/'>
					<li className='menu-nav__item'>HOME</li>
				</Link>
				<Link to='/about'>
					<li className='menu-nav__item'>ABOUT</li>
				</Link>
				<Link to='/portfolio'>
					<li className='menu-nav__item'>PORTFOLIO</li>
				</Link>
				<Link to='/contact'>
					<li className='menu-nav__item'>CONTACT</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navigation;
