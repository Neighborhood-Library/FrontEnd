import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      success: false
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  formValidate = e => {
    e.preventDefault();

    // if form fields are blank
    if (!this.state.name.length || !this.state.email.length || !this.state.message.length) return;

    this.setState({
      name: '',
      email: '',
      message: '',
      success: true,

    });
    setTimeout(() => this.setState({success: false}), 5000);
  }

  render() {
    return (
      <section className="card contact">
        <div className="info">
          <h1>Contact Us</h1>
          <p>We love to hear from our users about their experience and any trouble they come across. Use our form for a quick way to get in touch with our techy book enthusiasts for assitance.</p>
          <p></p>
        </div>
        <form id="contact-page" onSubmit={this.formValidate}>
          <h3>Send us a Message</h3>
          <hr />
          <label htmlFor="name">Name</label><br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="email">Email</label><br />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange} 
          ></input>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="5"
            value={this.state.message}
            onChange={this.handleChange}
          ></textarea>
          <button type="submit" className="btn btn-primary" onSubmit={this.formValidate}>Send Message</button>
          {
            this.state.success ?
              <p className="success">Your message was successfully sent!</p> :
              ''
          }
        </form>
      </section>
    )
  }
}

export default Contact;
