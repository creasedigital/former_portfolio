import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const [projects] = useState([
		{
			id: uuidv4(),
			imgLink: 'portfolio-github__finder.jpg',
			title: 'GitHub User Profile Finder',
			projectStack: 'REACT, REACT BOOTSRAP, GITHUB API',
			description:
				"This app was created to search user profile on github using the github API. It displays the user's image, login, a few details. It was styled using react bootstrap.",
			link: 'https://githubuserprofilefinder.netlify.app/',
		},

		{
			id: uuidv4(),
			imgLink: 'portfolio-wikizzy.jpg',
			title: 'Wikizzy',
			projectStack: 'WIKIPEDIA API, VANILLA JS, JQUERY',
			description:
				"Application Programming Interface (API) has revolutionized the web! It's fun always seeing how we can use this important resources to create a custom solution.",
			link: 'https://creasedigital.github.io/wikizzy',
		},
		{
			id: uuidv4(),
			imgLink: 'portfolio-ohjay.jpg',
			title: 'My Portfolio',
			projectStack: 'REACT, REACT ROUTER-DOM, FRAMER MOTION',
			description:
				"I will let you in on this but it's no secr**t. This portfolio was designed by me and built majorly with react featuring a modal component I built from scratch, custom css and a few fundamental concepts of react.",
			link: 'https://creasedigital.github.io',
		},
		{
			id: uuidv4(),
			imgLink: 'portfolio-greenpeg__academy.jpg',
			title: 'GreenPeg Academy Web Application',
			projectStack: 'REACT, NODE, NPM',
			description:
				'In programming and professionally a lot is always achievable based on teamwork and objectivity. In this project, I worked with a team of developers and designer to produce this fullstack solution.',
			link: 'https://greenpegacademy.com/',
		},
		{
			id: uuidv4(),
			imgLink: 'portfolio-music__qix.jpg',
			title: 'Music Qix',
			projectStack: 'HTML, CSS (Flexbox), JQUERY',
			description:
				'This single webpage was designed to dummy a music production website for a fictional brand - silent but classic.',
			link: 'https://musicqix.netlify.app/',
		},
		{
			id: uuidv4(),
			imgLink: 'portfolio-spotify__clone.jpg',
			title: 'Spotify Clone',
			projectStack: 'HTML, CSS',
			description:
				'Pixel perfect clone...People sometimes ignore the basics but this is a solid foundation a successful career can be built upon. This project was just HTML and CSS floats only - NO FLEXBOX! NO CSS GRID!! ',
			link: 'https://creasedigital.github.io/spotify-clone',
		},
	]);

	return (
		<ProjectContext.Provider
			value={{
				activeIndex,
				setActiveIndex,
				modalOpen,
				setModalOpen,
				projects,
			}}
		>
			{props.children}
		</ProjectContext.Provider>
	);
};

export default ProjectContextProvider;
