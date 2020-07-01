import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../customButton/CustomButton';

export const LandingPage = () => {
	return (
		<div className='page-wrap'>
			<section id="hero">
				<div>
					<h1 className='cta'>
						Explore your local book jungle
					</h1>
					<p>
						Find the books neighbors are allowing others to borrow.
					</p>
					<Link className='sign-up' to='/register'>
						<CustomButton isSignUp>Sign Up</CustomButton>
					</Link>
				</div>
				<img src="img/reading.svg" alt="reading book" />
			</section>
		</div>
	);
};
