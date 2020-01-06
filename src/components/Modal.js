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
  
  render() {
    return this.props.availability ? (
        <div className="overlay" onClick={this.props.closeModal}>
          <div className="overlay-cont" onClick={e => e.stopPropagation()}>
            <div>
              <h3>Available From:</h3>
              <hr />
              <ul>
                {
                  // if passed books list has lenders
                  this.props.lenderBooks.length > 0 ?
                  // map and print out lenders... ex. John Doe, Yes
                    this.state.lenders.map(lender => (
                      <li key={lender.id}>
                        {lender.first_name} {lender.last_name}
                      </li>
                    ))
                  : 
                    <li>No books found.</li>
                }
              </ul>
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