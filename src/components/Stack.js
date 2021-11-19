import { useState, useContext } from 'react';
import { StackContext } from './contexts/StackContext';

const Stack = () => {
	const stack = useContext(StackContext);

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
