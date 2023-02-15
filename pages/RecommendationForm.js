import React, { Component } from "react";

class RecommendationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      company: "",
      designation: "",
      reccomendation: "",
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
        submitMessage: `Thank you for your kind words ${name}!`,
        submitMessageTextColor: "text-info",
      });
    }
  };

  render() {
    const { submitMessage, submitMessageTextColor } = this.state;

    return (
      <div className="container py-5 ">
        <h1 className="font-weight-light text-center py-3">
          <span className="text-info py-2">Thank you!</span> for your time
        </h1>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={this.onChange}
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
              <div className="form-group">
                <label htmlFor="company">Company/Institute *</label>
                <input
                  type="text"
                  name="company"
                  onChange={this.onChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="designation">Designation</label>
                <input
                  type="text"
                  name="designation"
                  onChange={this.onChange}
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="recommendation">Recommendation *</label>
                <textarea
                  rows="2"
                  className="form-control"
                  name="recommendation"
                  onChange={this.onChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className=" my-3 btn btn-outline-danger float-right"
                // style={{ backgroundColor: "" }}
              >
                Lot's of love{" "}
                <span>
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </span>
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

export default RecommendationForm;
