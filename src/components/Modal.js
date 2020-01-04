import React from 'react';
import { ClipLoader } from 'react-spinners';
import Axios from 'axios';

class Modal extends React.Component {
  state = {
    lenders: []
  }

  getLenderInfo = async (lender_id) => {
    await Axios.get(`${process.env.REACT_APP_REQ_URL}/api/users/${this.props}`)
  }
  
  render() {
    console.log()

    return this.props.availability ? (
        <div className="overlay" onClick={this.props.closeModal}>
          <div className="overlay-cont" onClick={e => e.stopPropagation()}>
            <div>
              <h3>Available From:</h3>
              <hr />
              <ul>
                {
                  this.props.availBooks.map(lender => (
                    <li>{lender.id}, {lender.is_available === true ? 'yes': 'no'}</li>
                  ))
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