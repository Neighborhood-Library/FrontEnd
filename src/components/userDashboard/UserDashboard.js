import React from 'react';
import { connect } from 'react-redux';
import { borrowBookDashboard, lendBookDashboard } from '../../actions/bookActions';
import { delLendBook, delBorrowBook } from '../../actions/deleteBooks';
import BooksList from './BooksList';
import './UserDashboard.scss';

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      activeTab: ''
    };
  }

  componentDidMount = async () => {
    await this.props.checkCookie();
    await this.props.borrowBookDashboard();
    await this.props.lendBookDashboard();
  };

  render() {
    return (
      <div className="dashboard">
        <h1>User Dashboard</h1>
        <hr />
        <BooksList
          books={this.props.lenderCollection}
          delLendBook={this.props.delLendBook}
        />
        <h1>My Wishlist</h1>
        <hr />
        <BooksList
          books={this.props.wishlistBooks}
          delBorrowBook={this.props.delBorrowBook}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wishlistBooks: state.borrowerReducer.wishList,
  lenderCollection: state.lenderReducer.collection
});

export default connect(mapStateToProps, {
  lendBookDashboard,
  borrowBookDashboard,
  delLendBook,
  delBorrowBook
})(UserDashboard);
