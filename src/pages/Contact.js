import React from 'react';

const Contact = () => {
  return (
    <section className="card contact">
      <div className="info">
        <h1>Contact Us</h1>
        <p>We love to hear from our users about their experience and any trouble they come across. Use our form for a quick way to get in touch with our techy book enthusiasts for assitance.</p>
        <p></p>
      </div>
      <form id="contact-page">
        <h3>Send us a Message</h3>
        <label htmlFor="inputFirst">First Name</label>
        <input type="text" className="form-control" id="inputFirst" placeholder="Sam"></input>
        <label htmlFor="inputLast">Last Name</label>
        <input type="text" className="form-control" id="inputLast" placeholder="I-Am"></input>
        <label htmlFor="inputEmail4">Email</label>
        <input type="email" className="form-control" id="inputEmail4" placeholder="emailme@email.org"></input>
        <button type="submit" className="btn btn-primary">Book This</button>
      </form>
    </section>
  )
}

export default Contact;
