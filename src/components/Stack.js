import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Stack = () => {
	const [stack] = useState([
		{
			id: uuidv4(),
			link: 'logos_react.svg',
		},
		{
			id: uuidv4(),
			link: 'vscode-icons_file-type-npm.svg',
		},
		{
			id: uuidv4(),
			link: 'vscode-icons_file-type-html.svg',
		},
		{
			id: uuidv4(),
			link: 'vscode-icons_file-type-scss2.png',
		},
		{
			id: uuidv4(),
			link: 'logos_bootstrap.svg',
		},
		{
			id: uuidv4(),
			link: 'vscode-icons_file-type-css.svg',
		},
	]);

	return (
		<div className='stack'>
			<ul className='stack-list'>
				{stack.map((stack) => (
					<li className='stack-list__component' key={stack.id}>
						<img src={stack.link} alt={stack.link} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Stack;
