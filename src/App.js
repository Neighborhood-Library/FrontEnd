import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { fetchUser, login } from './actions/index';
import Axios from 'axios';

import './scss/combined.scss';

import Books from './books/Books';
import BookForm from './components/borrowerDashboard/BookForm';
import { LandingPage } from './components/landingPage/LandingPage';
import Login from './pages/Login';
import RegisterPage from './pages/Registration';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ChatPage from './pages/Chat';
import Footer from './components/Footer';
import PrivateRoute from './middleware/PrivateRoute';
import Shelf from './pages/Shelf';

require('dotenv').config();

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			logOut: false
		};
	}

	componentDidMount = async () => {
		this.checkCookie();
	};

	componentDidUpdate = async prevProps => {
		if (this.props !== prevProps) {
			this.checkCookie();
		}
	};

	checkCookie = async () => {
		const userData = await this.props.fetchUser();

		if (userData) {
			this.setState({ logOut: true });
		}
	};

	userStatus() {
		if (this.state.logOut === true) {
			return (
				<button className='login-btn logout-btn' onClick={this.logOutHandler}>
					Logout
				</button>
			);
		} else {
			return (
				<Link className='login-btn' to='/login'>
					Login
				</Link>
			);
		}
	}

	logInHandler = async (e, info) => {
		e.preventDefault();
		await this.props
			.login(info)
			.then(res => {
				if (this.props.loggedIn) {
					console.log('changing loggedIn status');
					this.setState({ logOut: true });
					this.props.history.push('/shelf');
				} else {
					throw new Error('Wrong credentials entered');
				}
			})
			.catch(err => {
				console.log('triggered login redirect!');
				this.props.history.push('/login');
			});
	};

	logOutHandler = async () => {
		await Axios.get(`${process.env.REACT_APP_REQ_URL}/auth/logout`, {
			withCredentials: true
		}).then(res => {
			this.setState({ logOut: false });
			this.props.history.push('/login');
		});
	};

	render() {
		return (
			<div className='App'>
				<header>
					<div className='logo-cont'>
						<Link to='/'>
							<img src='/img/myvivlio-logo.png' alt='logo' className='logo' />
						</Link>
					</div>
					<nav className='app-nav'>
						<Link to='/books'>Books</Link>
						<Link to='/about'>About</Link>
						<Link to='/contact'>Contact</Link>
						<Link to='/shelf'>Shelf</Link>
						{this.userStatus()}
					</nav>
				</header>
				<div className="page-wrap">

					<Switch>
						<Route exact path='/' component={LandingPage} />
						<Route
							path='/login'
							render={() => (
								<Login
									logInHandler={this.logInHandler}
									history={this.props.history}
								/>
							)}
						/>
						<Route path='/register' component={RegisterPage} />
						<Route path='/borrow' component={BookForm} />
						<Route path='/books' render={() => <Books logOut={this.state.logOut} />} />
						<Route path='/about' component={AboutPage} />
						<Route path='/contact' component={ContactPage} />
						<Route
							path='/chat/:user_id&:book_id&:book_name'
							component={ChatPage}
						/>
						<PrivateRoute
							path='/shelf'
							checkCookie={this.checkCookie}
							component={Shelf}
						/>
					</Switch>
				</div>
				<Footer />
			</div>
		);
	}
}
const mapStateToProps = state => {
	return { loggedIn: state.loginAuthReducer.loggedIn };
};

export default connect(mapStateToProps, { fetchUser, login })(App);
