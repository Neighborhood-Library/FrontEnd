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
				<div className='cta'>
					<h1 className='cta-title'>
						A New Way to
						<br /> Share Books
					</h1>
					<Link className='sign-up' to='/register'>
						<CustomButton isSignUp>Sign Up</CustomButton>
					</Link>
				</div>
			</div>
			<footer className='landing-footer'>
				<div className='icon-group'>
					<FontAwesomeIcon className='icon left' icon={faBookOpen} />
				</div>
				<div className='footer-text'>
					<p>
						Share your own collection <br />
						or borrow from others
					</p>
				</div>
				<div className='icon-group right'>
					<FontAwesomeIcon className='icon right' icon={faUserFriends} />
				</div>
				<div className='footer-text'>
					<p>
						Join a vibrant community of book <br />
						enthuisists in your local area
					</p>
				</div>
			</footer>
		</div>
	);
};
