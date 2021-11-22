import { Link } from 'react-router-dom';

const Navigation = () => {
	const navStyle = {
		color: 'var(--color-fair-white)',
		textDecoration: 'none',
	};

	return (
		<nav className='nav'>
			<ul className='menu-nav'>
				<Link style={navStyle} to='/'>
					<li className='menu-nav__item'>HOME</li>
				</Link>
				<Link style={navStyle} to='/about'>
					<li className='menu-nav__item'>ABOUT</li>
				</Link>
				<Link style={navStyle} to='/portfolio'>
					<li className='menu-nav__item'>PORTFOLIO</li>
				</Link>
				<Link style={navStyle} to='/hireme'>
					<li className='menu-nav__item'>HIRE ME</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navigation;
