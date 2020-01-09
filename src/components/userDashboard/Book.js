import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { withRouter } from 'react-router';

import CustomButton from '../../components/customButton/CustomButton';
import Modal from '../Modal';
import { getAvailBooks } from '../../actions/getAvailBooks';

class Book extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			info: null,
			modal: false,
			lenderBooks: [],
			transaction: []
		};
	}

	componentDidMount = async () => {
		let chatHolder = {};
		let infoHolder = {};

		// if borrow collection
		if (this.props.lenders) {
			// show all users with book available to borrow
			// this.checkAvailable();
			this.checkTransactions();
		}

		// check if book has transaction
		// await Axios
		//   .get(`${process.env.REACT_APP_REQ_URL}/api/transaction/`, {withCredentials: true})
		//   .then(res => chatHolder = res.data[0])
		//   .catch(err => console.log(err));

		// get data for each book from google
		await Axios.get(
			`https://www.googleapis.com/books/v1/volumes/${this.props.book.google_book_id}`
		)
			.then(res => (infoHolder = res.data))
			.catch(err => console.log(err.body));

		this.setState({
			chat: chatHolder,
			info: infoHolder
		});
	};

	checkIfLendOrBorrow = async () => {
		// link delete book handler per user type
		if (!this.props.lenders) {
			return this.props.deleteBookHandler('lend', this.props.book.id);
		} else {
			return this.props.deleteBookHandler('borrow', this.props.book.id);
		}
	};

	openModal = e => {
		e.preventDefault();
		this.setState({ modal: true });
	};

	closeModal = e => {
		e.preventDefault();
		this.setState({ modal: false });
	};

	checkTransactions = async () => {
		// get transaction if available
		await Axios.get(
			`${process.env.REACT_APP_REQ_URL}/api/transaction/${this.props.book.borrower_id}&${this.props.book.google_book_id}`,
			{ withCredentials: true }
		)
			.then(res => {
				if (res.data.message || res.data.length > 0) {
					this.setState({ transaction: res.data.message });
				} else {
					this.checkAvailable();
				}
				return;
			})
			.catch(err => {
				console.log(err);
			});
	};

	checkAvailable = async () => {
		// find all books offered by lender
		await Axios.get(
			`${process.env.REACT_APP_REQ_URL}/api/lender-collection/book/${this.props.book.google_book_id}`,
			{
				withCredentials: true
			}
		)
			.then(res => {
				this.setState({ lenderBooks: res.data });
			})
			.catch(err => {
				return;
			});
	};

	changeAvailable = async () => {
		// change availablility of lender's book
		await Axios.put(
			`${process.env.REACT_APP_REQ_URL}/api/lender-collection/${this.props.book.id}`,
			{},
			{ withCredentials: true }
		)
			.then(res => {
				this.props.lendBookDashboard();
				return;
			})
			.catch(err => {
				console.log(err.body);
				return;
			});
	};

	goToChat = e => {
		e.preventDefault();

		this.props.history.push(
			`chat/${this.state.transaction.borrower_id}&${this.state.transaction.google_book_id}`
		);
	};

	render() {
		if (this.state.info === null) {
			return (
				<div className='bookCard'>
					<ClipLoader size={50} />
				</div>
			);
		} else {
			return (
				<div className='bookCard'>
					{// pop up for borrow to select lender
					this.state.modal ? (
						<Modal
							availability
							closeModal={this.closeModal}
							lenderBooks={this.state.lenderBooks}
							updateChat={this.updateChat}
							userInfo={this.props.book}
						/>
					) : null}
					<div className='remove-book' onClick={this.checkIfLendOrBorrow}>
						<p>x</p>
					</div>
					<img
						className='coverArt'
						alt='Cover Art'
						src={
							this.state.info.volumeInfo.imageLinks !== undefined
								? this.state.info.volumeInfo.imageLinks.thumbnail
								: ''
						}
					/>
					<h4 className='bookTitle'>{this.state.info.volumeInfo.title}</h4>
					<h4 className='author'>
						{this.state.info.volumeInfo.authors
							? this.state.info.volumeInfo.authors[0]
							: 'N/A'}
					</h4>
					<p className='bookSummary'>
						{this.state.info.volumeInfo.publishedDate.split('-')[0]}
					</p>
					{// checks to show lenders
					this.props.lenders && !this.state.transaction.google_book_id ? (
						<CustomButton
							isLendBook
							className='lendBookBtn custom-button'
							onClick={this.openModal}
						>
							{this.props.availPending ? (
								<ClipLoader size={30} color={'#ffffff'} />
							) : (
								`${this.state.lenderBooks.length} available`
							)}
						</CustomButton>
					) : null}
					{this.props.borrowers ? (
						<CustomButton
							className={`availability custom-button ${this.props.book.is_available}`}
							onClick={this.changeAvailable}
						>
							{this.props.book.is_available === true
								? 'Available'
								: 'Not Available'}
						</CustomButton>
					) : null}
					<CustomButton className='custom-button' onClick={this.goToChat}>
						Visit Chat
					</CustomButton>
					<CustomButton learnMore={true}>
						<a
							href={
								this.state.info !== null
									? this.state.info.volumeInfo.previewLink
									: '#'
							}
							target='_blank'
							rel='noopener noreferrer'
						>
							Learn More
						</a>
					</CustomButton>
				</div>
			);
		}
	}
}

const mapStateToProps = state => ({
	availPending: state.getAvailBooksRed.availPending,
	availBooks: state.getAvailBooksRed.books
});

const WithRouterComp = withRouter(Book);

export default connect(mapStateToProps, { getAvailBooks })(WithRouterComp);
