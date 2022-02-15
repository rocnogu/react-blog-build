import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//
// function function function function function function
export default function Contact() {
  //
  function handleSubmit(event) {
    // useState({message: event.target.value})
  }
  // return return return return return return return return
  return (
    <div className="mainDiv">
      {" "}
      <Row>
        <Col sm={12} xs={12} md={12}>
          <h1>Contact Page</h1>
          <p>
            Check out our FAQs here to see if we’ve already answered your query.
          </p>
          <p>
            If you’d still like to get in touch, drop us an email or
            alternatively, you can follow us social media to comment and message
            us!
          </p>

          <div className="contact-form">
            <form
              id="contact-form"
              onSubmit={handleSubmit.bind(this)}
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5"></textarea>
              </div>
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
