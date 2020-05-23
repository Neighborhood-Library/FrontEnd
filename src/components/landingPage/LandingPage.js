import { faBookOpen, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../customButton/CustomButton';
import './landing.scss';

export const LandingPage = () => {
	return (
		<div className='landing-background'>
			<div className='landing-content'>
				<h1 className='cta'>
					A New Way to <br />
					Share Books
				</h1>
				<Link className='sign-up' to='/register'>
					<CustomButton isSignUp>Sign Up</CustomButton>
				</Link>
			</div>
			<footer className='landing-footer'>
				<div className='icon-group'>
					<FontAwesomeIcon className='landing-icon' icon={faBookOpen} />
					<p className='landing-text'>
						Share your own collection <br />
						or borrow from others
					</p>
				</div>
				<div className='icon-group'>
					<FontAwesomeIcon className='landing-icon' icon={faUserFriends} />
					<p className='landing-text'>
						Join a vibrant community of book <br />
						enthuisists in your local area
					</p>
				</div>
			</footer>
		</div>
	);
};
