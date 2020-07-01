import React from 'react';
import './contact.scss';

const Contact = () => {
  return (
    <div className="page-wrap">
      <section className="card">
        <p>Our Company</p>
      </section>
      <section className="card">
        <form id="contact-page">
          <div className="container-fluid">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputFirst">First Name</label>
                <input type="text" className="form-control" id="inputFirst" placeholder="Sam"></input>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputLast">Last Name</label>
                <input type="text" className="form-control" id="inputLast" placeholder="I-Am"></input>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="emailme@email.org"></input>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Book This
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Contact;
