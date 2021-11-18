const HireMe = () => {
	return (
		<section className='hireme'>
			<h2 className='hireme__heading'>
				Hire <br /> &mdash; me
			</h2>
			<div className='hireme-content'>
				<p className='hireme-content__text-box'>
					{new Date().getFullYear() - 2019} years experience on the FRONTEND
					with over five years as a graphic designer has helped me gain mastery
					of how to apply and implement designs. I believe in creativity,
					innovation and positive vibes as it quintessential for success.
				</p>
				<button className='hireme-content__button'>CONTACT ME</button>
			</div>
		</section>
	);
};

export default HireMe;
