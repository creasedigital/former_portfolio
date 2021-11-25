import { useState } from 'react';
import './HireMe.css';
const HireMe = () => {
	const [shownContent, setShownContent] = useState('experience');

	return (
		<section className='hireme'>
			<h2 className='hireme__heading'>
				Hire <br /> &mdash; me
			</h2>
			<div className='hireme-content'>
				{shownContent === 'experience' ? (
					<p className='hireme-content__text-box'>
						{new Date().getFullYear() - 2019} years experience on the FRONTEND
						with over five years as a graphic designer has helped me gain
						mastery of how to apply and implement designs. I believe in
						creativity, innovation and positive vibes as it quintessential for
						success.
					</p>
				) : (
					<div className='hire-contact'>
						<p class='white'>PHONE: +234 (0) 803 759 8785</p>
						<p class='white'>EMAIL: ojorechris@gmail.com</p>
						<p class='orange'>Your Project needs me!</p>
					</div>
				)}

				<button
					className='hireme-content__button'
					onClick={() =>
						shownContent === 'experience'
							? setShownContent('contact')
							: setShownContent('experience')
					}
				>
					{shownContent === 'experience' ? 'CONTACT ME' : 'MY EXPERIENCE'}
				</button>
			</div>
		</section>
	);
};

export default HireMe;
