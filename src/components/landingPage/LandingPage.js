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
			<section>

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
					<p className="test-quote">I love sharing my books with my community!</p>
					<p className="test-author">Sarah Love</p>
				</div>
				<div className="test-cont">
					<p className="test-quote">I love sharing my books with my community!</p>
					<p className="test-author">Sarah Love</p>
				</div>
			</section>
		</div>
	);
};
