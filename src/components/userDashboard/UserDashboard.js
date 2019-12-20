import React from 'react';
import { connect } from 'react-redux';
import { borrowBookDashboard, lendBookDashboard } from '../../actions/bookActions';
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
        <BooksList books={this.props.lenderCollection} />
        <h1>My Wishlist</h1>
        <hr />
        <BooksList books={this.props.wishlistBooks} />
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
