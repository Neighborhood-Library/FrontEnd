import React from 'react';
import BookItem from '../bookItem/BookItem';
import './LenderDashboard.scss';

class LenderDashboard extends React.Component {
  state = {
    book: []
  };

  render() {
    return (
      <div>
        <h1>My Vivlio Collection</h1>
        <BookItem book={this.state.book} />
      </div>
    );
  }
}

export default LenderDashboard;
