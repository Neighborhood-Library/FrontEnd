import React from 'react';
import { connect } from 'react-redux';
import { borrowBookDashboard, lendBookDashboard } from '../../actions/bookActions';
import { delLendBook, delBorrowBook } from '../../actions/deleteBooks';
import BooksList from './BooksList';
import AccountInfo from './AccountInfo';
import './UserDashboard.scss';

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      activeTab: 'collection'
    };
  }

  componentDidMount = async () => {
    await this.props.checkCookie();
    await this.props.borrowBookDashboard();
    await this.props.lendBookDashboard();
  };

  updateActiveTab = e => {
    this.setState({
      activeTab: e.target.innerText.toLowerCase()
    })
  }

  updateTabClass = e => {
    console.log(e.target);

    if (this.state.activeTab === e.target.innerText){
      return 'active'
    } else {
      return ''
    }
  }

  render() {
    return (
      <div className="dashboard">
        <div className="tabs">
          <p onClick={this.updateActiveTab}>Collection</p>
          <p onClick={this.updateActiveTab}>Wishlist</p>
          <p onClick={this.updateActiveTab}>Account</p>
        </div>
        <div className="dashboard-cont">
          {
            this.state.activeTab === 'collection' ? (<>
              <h2>My Collection</h2>
              <hr />
              <BooksList
                books={this.props.lenderCollection}
                delLendBook={this.props.delLendBook}
              />
            </>) : (null)
          }
          {
            this.state.activeTab === 'wishlist' ? (<>
              <h2>My Wishlist</h2>
              <p>All the books you want to read and explore are here. See what lenders are available for each book. Learn more about each by clicking the 'Learn More' button.</p>
              <hr />
              <BooksList
                books={this.props.wishlistBooks}
                delBorrowBook={this.props.delBorrowBook}
                lenders={true}
              />
            </>) : null
          }
          {
            this.state.activeTab === 'account' ? (<>
              <AccountInfo />
            </>) : null
          }
        </div>
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
