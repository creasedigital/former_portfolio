import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const StackContext = createContext();

const StackContextProvider = (props) => {
	const [stacks, setStacks] = useState([
		{
			id: uuidv4(),
			link: 'vscode-icons_file-type-css.svg',
		},
		{
			id: uuidv4(),
			link: 'vscode-icons_file-type-css.svg',
		},
		{
			id: uuidv4(),
			link: 'vscode-icons_file-type-css.svg',
		},
		{
			id: uuidv4(),
			link: 'vscode-icons_file-type-css.svg',
		},
		{
			id: uuidv4(),
			link: 'vscode-icons_file-type-css.svg',
		},
		{
			id: uuidv4(),
			link: 'vscode-icons_file-type-css.svg',
		},
	]);
	return (
		<StackContext.Provider value={stacks}>
			{props.children}
		</StackContext.Provider>
	);
};

export default StackContextProvider;
