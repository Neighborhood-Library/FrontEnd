import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/index';
import CustomButton from '../customButton/CustomButton';
import './RegisterForm.scss';

class RegisterForm extends React.Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		username: '',
		password: '',
		showPassword: false
	};

	handleSubmit = e => {
		e.preventDefault();
		const newUser = {
			first_name: this.state.firstName,
			last_name: this.state.lastName,
			username: this.state.username,
			email: this.state.email,
			password: this.state.password
		};
		this.props.register(newUser, this.state, this.props.history);

		this.setState({
			firstName: '',
			lastName: '',
			email: '',
			username: '',
			password: '',
			showPassword: false
		});
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	togglePassword = () => {
		const { showPassword } = this.state;
		this.setState({ showPassword: !showPassword });
	};

	render() {
		return (
			<form className="submitForm" onSubmit={this.handleSubmit}>
				<label for='firstName'>First Name</label>
				<input
					type='text'
					name='firstName'
					value={this.state.firstName}
					onChange={this.handleChange}
					required
				/>
				<label for='lastName'>Last Name</label>
				<input
					type='text'
					name='lastName'
					value={this.state.lastName}
					onChange={this.handleChange}
					required
				/>
				<label for='email'>Email</label>
				<input
					type='email'
					name='email'
					value={this.state.email}
					onChange={this.handleChange}
					required
				/>
				<label for='username'>Username</label>
				<input
					type='text'
					name='username'
					value={this.state.username}
					onChange={this.handleChange}
					required
				/>
				<label for='password'>Password</label>
				<input
					type={this.state.showPassword ? 'text' : 'password'}
					name='password'
					value={this.state.password}
					onChange={this.handleChange}
					required
				/>
				<i
					className={`fa ${
						this.state.showPassword ? 'fa-eye-slash fa-lg' : 'fa-eye fa-lg'
					} password-icon`}
					onClick={this.togglePassword}
				/>
				<CustomButton type='submit' isRegister>
					Submit
				</CustomButton>
			</form>
		);
	}
}
const mapStateToProps = state => ({
	registerUser: state.registerUser
});

export default connect(mapStateToProps, { register })(RegisterForm);
