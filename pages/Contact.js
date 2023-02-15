import React, { Component } from "react";
import styles from "../styles/Contact.module.css"

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      description: "",
      submitMessage: "",
      submitMessageTextColor: "",
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    let isSuccessful = true;
    const { name } = this.state;

    if (isSuccessful) {
      this.setState({
        submitMessage: `Thank you ${name}. I will contact you soon!`,
        submitMessageTextColor: "text-info",
      });
    } else {
      this.setState({
        submitMessage: "Opss! Something went wrong. Please try again",
        submitMessageTextColor: "text-danger",
      });
    }
  };

  render() {
    const { submitMessage, submitMessageTextColor } = this.state;
    return (
      <div className="container py-5 ">
        <div className={styles.mapFeature} >
          <iframe className="py-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.99282134866!2d73.16047121471124!3d18.931711887170884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e7cb1985ae6d%3A0x160d221abf6161a5!2sAmity%20University%20Mumbai!5e0!3m2!1sen!2sin!4v1676396291803!5m2!1sen!2sin" width="1000" height="450" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className={styles.greetingCaption}>
          <div className={styles.leftSide} >
            <p>VISIT US</p>
            <p>Amity University, Mumbai - Pune Expressway,</p>
            <p>Bhatan, Post-Somathne, Panvel, Mumbai.</p>
            <p>Maharashtra - 410206</p>
          </div>
          <div className={styles.rightSide} >
            <p>GET IN TOUCH</p>
            <p>Email : admissions@mum.amity.edu</p>
            <p>Website : www.amity.edu/mumbai</p>
          </div>
        </div>
        <h1 className="font-weight-light text-center py-4">
          <span className="text-info ">Thank you </span>for showing your
          interest
        </h1>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  name="email"
                  onChange={this.onChange}
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="description">
                  Tell me about your project *
                </label>
                <textarea
                  rows="5"
                  className="form-control"
                  name="description"
                  onChange={this.onChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className=" my-3 btn btn-outline-info float-right"
              // style={{ backgroundColor: "black" }}
              >
                Let's talk business
              </button>
            </form>
          </div>
        </div>
        <div className="py-5 mx-2 text-center">
          <h5 className={submitMessageTextColor}>{submitMessage}</h5>
        </div>
      </div>
    );
  }
}

export default Contact;
