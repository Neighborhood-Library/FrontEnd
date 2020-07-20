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
        <hr />
        <label htmlFor="inputFirst">First Name</label><br />
        <input type="text" id="inputFirst"></input>
        <label htmlFor="inputLast">Last Name</label> <br />
        <input type="text" id="inputLast"></input>
        <label htmlFor="inputEmail4">Email</label><br />
        <input type="email" id="inputEmail" ></input>
        <label for="message">Message</label>
        <textarea name="message" rows="5"></textarea>
        <button type="submit" className="btn btn-primary">Book This</button>
      </form>
    </section>
  )
}

export default Contact;
