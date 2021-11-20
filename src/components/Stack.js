import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Stack = () => {
	const [stack, setStack] = useState([
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
		<div className='stack'>
			<ul className='stack-list'>
				{stack.map((stack) => (
					<li className='stack-list__component' key={stack.id}>
						<img src={stack.link} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Stack;
