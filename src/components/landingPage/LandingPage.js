import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../customButton/CustomButton';

export const LandingPage = () => {
	return (
		<div className='page-wrap'>
			<section id="hero">
				<div>
					<h1 className='cta'>
						Explore your local book jungle!
					</h1>
					<p>
						Discover new book collections from your neighbors and community.
					</p>
					<Link className='sign-up' to='/register'>
						<CustomButton isSignUp>Sign Up</CustomButton>
					</Link>
				</div>
				<img src="img/reading.svg" alt="reading book" />
			</section>
			<section id="milestones">
				<h4>1,000,000+ books</h4>
				<h4>1,500+ connections</h4>
				<h4>No signup fees!</h4>
			</section>
			<section id="testimonials">
				<div className="heading">
					<h3>Testimonials</h3>
					<hr />
				</div>
				<div className="test-cont">
					<p className="test-quote">I love sharing my books with my community!</p>
					<p className="test-author">Sarah Love</p>
				</div>
				<div className="test-cont">
					<p className="test-quote">Some great finds I never would have found otherwise...</p>
					<p className="test-author">Derrick Jay</p>
				</div>
				<div className="test-cont">
					<p className="test-quote">Absolutely love this!</p>
					<p className="test-author">Geri Honor</p>
				</div>
			</section>
		</div>
	);
};
