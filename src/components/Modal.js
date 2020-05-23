import React from 'react';
import { ClipLoader } from 'react-spinners';
import Axios from 'axios';

class Modal extends React.Component {
  state = {
    lenders: []
  }

  componentDidMount() {
    if (this.props.lenderBooks) {
      this.props.lenderBooks.forEach(async (book) => {
        await this.getLenderInfo(book.lender_id);
      })
    }
  }

  getLenderInfo = async (lender_id) => {
    await Axios
      .get(`${process.env.REACT_APP_REQ_URL}/api/users/${lender_id}`,{withCredentials: true})
      .then(res => {
        this.setState({lenders: [...this.state.lenders, res.data]})
      })
      .catch(err => {
        console.log(err);
        return;
      })
  }

  startTransaction = async e => {
    e.preventDefault();

    const lender_id_JSX = e.target.attributes.name.value;

    return await Axios
      .post(`${process.env.REACT_APP_REQ_URL}/api/transaction/`,
      {lender_id: lender_id_JSX, google_book_id: this.props.userInfo.google_book_id, borrower_id: this.props.userInfo.borrower_id}
      , {withCredentials: true})
      .then(res => {
        this.props.refreshPage();
        return;
      })
      .catch(err => console.log(err));
  }
  
  render() {
    return this.props.availability ? (
        <div className="overlay" onClick={this.props.closeModal}>
          <div className="overlay-cont" onClick={e => e.stopPropagation()}>
            <div>
              <h3>Available From:</h3>
              <hr />
              {
                // if passed books list has lenders
                this.props.lenderBooks.length > 0 ?
                // map and print out lenders... ex. John Doe, Yes
                  this.state.lenders.map(lender => (
                    <button key={lender.id} name={lender.id} onClick={this.startTransaction}>
                      {lender.first_name} {lender.last_name}
                    </button>
                  ))
                : 
                  <li>No books found.</li>
              }
            </div>
          </div>
        </div>
      )
    : (
      <div className="overlay">
          <div className="overlay-cont">
            <ClipLoader size={50} />
          </div>
      </div>
    )
  }
}

export default Modal;