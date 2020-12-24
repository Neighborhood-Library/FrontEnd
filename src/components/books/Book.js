import React from 'react';
import CustomButton from '../customButton/CustomButton';

class Book extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	callBorrowBook = () => {
		this.props.borrowBookHandler(this.props.id, this.props.isbn);
	};

	callLendBook = () => {
		this.props.lendBookHandler(this.props.id, this.props.isbn);
	};

	render() {
		return (
			<div className='bookCard'>
				<img
					className='coverArt'
					alt='Cover Art'
					src={this.props.coverArt}
				/>
				<h3 className='bookTitle'>{this.props.title}</h3>
				<h4 className='author'>{this.props.author}</h4>
				<p className='bookSummary'>{this.props.publishedDate}</p>
				{
					this.props.logOut ? (
						<>
						<CustomButton
							className='borrowBookBtn custom-button'
							isBorrowBook
							onClick={this.callBorrowBook}
						>
							Borrow book
						</CustomButton>

						<div className='btnDivider'>OR</div>

						<CustomButton
							className='lendBookBtn custom-button'
							isLendBook
							onClick={this.callLendBook}
						>
							Lend book
						</CustomButton>
						</>
					) : null
				}
				
			</div>
		);
	}
}

export default Book;
