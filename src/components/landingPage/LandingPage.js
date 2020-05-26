import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../customButton/CustomButton';
import './landing.scss';

export const LandingPage = () => {
	return (
		<div className='page-wrap'>
			<div className='landing-content'>
				<h1 className='cta'>
					A New Way to Share Books
				</h1>
				<Link className='sign-up' to='/register'>
					<CustomButton isSignUp>Sign Up</CustomButton>
				</Link>
			</div>
		</div>
	);
};
