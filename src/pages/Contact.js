import React from 'react';
import './contact.scss';

const Contact = () => {
  return (
    <div className="page-wrap">
      <section className="card">
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d822.3086478005408!2d-114.3475882819323!3d34.47157265380088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d1edef9b1a6b11%3A0x4a9ca101cc150bd6!2sLondon%20Bridge!5e0!3m2!1sen!2sus!4v1593828380226!5m2!1sen!2sus" frameborder="0" style={{border:'0',width:"100%",height:"300px"}} allowfullscreen="" aria-hidden="false" tabindex="0" title="location"></iframe> */}
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
