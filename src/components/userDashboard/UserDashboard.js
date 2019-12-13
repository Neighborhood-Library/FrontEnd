import React from 'react';
import { connect } from 'react-redux';
import { borrowBookDashboard, lendBookDashboard } from '../../actions/bookActions';
import BorrowBooks from './BorrowBooks';
import LendBooks from './LendBooks';
import './UserDashboard.scss';

class UserDashboard extends React.Component {
  state = {
    book: [],
    activeTab: ''
  };

  componentWillMount = async () => {
    await this.props.borrowBookDashboard();
    await this.props.lendBookDashboard();
  };

  render() {
    return (
      <div>
        <h1>User Dashboard</h1>
        <hr />
        <LendBooks books={this.props.lenderCollection} />
        <h1>My Wishlist</h1>
        <hr />
        <section>
          <BorrowBooks books={this.props.wishlistBooks} />
        </section>
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
  borrowBookDashboard
})(UserDashboard);
