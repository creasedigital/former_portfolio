import { useState, useContext } from 'react';
import { StackContext } from './contexts/StackContext';

const Stack = () => {
	const stack = useContext(StackContext);

	return (
		<div className='stack'>
			<ul className='stack-list'>
				{stack.map((stack) => (
					<li className='stack-list__component' key={stack.id}>
						Hello
						<svg href={stack.link}></svg>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Stack;
