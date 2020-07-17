import React from 'react';
import { connect } from 'react-redux';
import { borrowBookDashboard, lendBookDashboard } from '../actions/bookActions';
import { delLendBook, delBorrowBook } from '../actions/deleteBooks';
import BooksList from '../components/userDashboard/BooksList';
import AccountInfo from '../components/userDashboard/AccountInfo';

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      activeTab: 'collection'
    };
  }

  componentDidMount = async () => {
    // await this.props.checkCookie();
    console.log('borrow dash, ln 20, shelf');
    await this.props.borrowBookDashboard();
    console.log('lender dash, ln 20, shelf');
    await this.props.lendBookDashboard();
  };

  updateActiveTab = e => {
    this.setState({
      activeTab: e.target.innerText.toLowerCase()
    })
  }

  updateTabClass = e => {
    if (this.state.activeTab === e.target.innerText){
      return 'active'
    } else {
      return ''
    }
  }

  checkActiveTab = () => {
    const tab = this.state.activeTab;

    if (tab === 'collection') {
      return 'collection'
    } else if (tab === 'wishlist') {
      return 'wishlist'
    } else {
      return 'account'
    }
  }

  deleteBookHandler = async (type, book_id) => {
    if (type === 'borrow') {
      await this.props.delBorrowBook(book_id);
      await this.props.borrowBookDashboard();
    } else {
      await this.props.delLendBook(book_id);
      await this.props.lendBookDashboard();
    }
  }

  render() {
    return (
      <section className="dashboard">
        <div className="tabs">
          <p
            onClick={this.updateActiveTab}
            className={this.state.activeTab === 'collection' ? 'active' : null}
          >Collection</p>
          <p
            onClick={this.updateActiveTab}
            className={this.state.activeTab === 'wishlist' ? 'active' : null}
          >Wishlist</p>
          <p
            onClick={this.updateActiveTab}
            className={this.state.activeTab === 'account' ? 'active' : null}
          >Account</p>
        </div>
        <div className="dashboard-cont">
          {
            this.state.activeTab === 'collection' ? (<>
              <h2>My Collection</h2>
              <p>All the books you are lending out are here. Once a user selects to borrow your book, a chat option will appear. Talk about the plot, your favorites books, or other meetups in the area.</p>
              <hr />
              <BooksList
                books={this.props.lenderCollection}
                deleteBookHandler={this.deleteBookHandler}
                lendBookDashboard={this.props.lendBookDashboard}
                borrowers={true}
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
                deleteBookHandler={this.deleteBookHandler}
                borrowBookDashboard={this.props.borrowBookDashboard}
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
      </section>
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