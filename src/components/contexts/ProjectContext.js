import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
	const [projects, setProjects] = useState([
		{
			id: uuidv4(),
			imgLink: '../../../public/logos_react.svg',
			title: 'GitHub User Profile Finder',
			projectStack: 'REACT, REACT BOOTSRAP, GITHUB API',
			description:
				"This app was created to search user profile on github using the github API. It displays the user's image, login, a few details. It was styled using react bootstrap.",
			link: 'https://githubuserprofilefinder.netlify.app/',
		},
		{
			id: uuidv4(),
			imgLink: '../../../public/logos_react.svg',
			title: 'GitHub User Profile Finder',
			projectStack: 'REACT, REACT BOOTSRAP, GITHUB API',
			description:
				"This app was created to search user profile on github using the github API. It displays the user's image, login, a few details. It was styled using react bootstrap.",
			link: 'https://githubuserprofilefinder.netlify.app/',
		},
		{
			id: uuidv4(),
			imgLink: '../../../public/logos_react.svg',
			title: 'GitHub User Profile Finder',
			projectStack: 'REACT, REACT BOOTSRAP, GITHUB API',
			description:
				"This app was created to search user profile on github using the github API. It displays the user's image, login, a few details. It was styled using react bootstrap.",
			link: 'https://githubuserprofilefinder.netlify.app/',
		},
		{
			id: uuidv4(),
			imgLink: '../../../public/logos_react.svg',
			title: 'GitHub User Profile Finder',
			projectStack: 'REACT, REACT BOOTSRAP, GITHUB API',
			description:
				"This app was created to search user profile on github using the github API. It displays the user's image, login, a few details. It was styled using react bootstrap.",
			link: 'https://githubuserprofilefinder.netlify.app/',
		},
		{
			id: uuidv4(),
			imgLink: '../../../public/logos_react.svg',
			title: 'GitHub User Profile Finder',
			projectStack: 'REACT, REACT BOOTSRAP, GITHUB API',
			description:
				"This app was created to search user profile on github using the github API. It displays the user's image, login, a few details. It was styled using react bootstrap.",
			link: 'https://githubuserprofilefinder.netlify.app/',
		},
		{
			id: uuidv4(),
			imgLink: '../../../public/logos_react.svg',
			title: 'GitHub User Profile Finder',
			projectStack: 'REACT, REACT BOOTSRAP, GITHUB API',
			description:
				"This app was created to search user profile on github using the github API. It displays the user's image, login, a few details. It was styled using react bootstrap.",
			link: 'https://githubuserprofilefinder.netlify.app/',
		},
		{
			id: uuidv4(),
			imgLink: '../../../public/logos_react.svg',
			title: 'GitHub User Profile Finder',
			projectStack: 'REACT, REACT BOOTSRAP, GITHUB API',
			description:
				"This app was created to search user profile on github using the github API. It displays the user's image, login, a few details. It was styled using react bootstrap.",
			link: 'https://githubuserprofilefinder.netlify.app/',
		},
		{
			id: uuidv4(),
			imgLink: '../../../public/logos_react.svg',
			title: 'GitHub User Profile Finder',
			projectStack: 'REACT, REACT BOOTSRAP, GITHUB API',
			description:
				"This app was created to search user profile on github using the github API. It displays the user's image, login, a few details. It was styled using react bootstrap.",
			link: 'https://githubuserprofilefinder.netlify.app/',
		},
	]);

	const [activeNextButton, setActiveNextButton] = useState(true);
	const [activePreviousButton, setActivePreviousButton] = useState(false);

	return (
		<ProjectContext.Provider
			value={{ activeNextButton, activePreviousButton, projects }}
		>
			{props.children}
		</ProjectContext.Provider>
	);
};

export default ProjectContextProvider;
