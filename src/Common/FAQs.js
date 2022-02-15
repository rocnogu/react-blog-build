import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//
export default function FAQs() {
  return (
    <div className="mainDiv">
      {" "}
      <Row>
        <Col sm={12} xs={12} md={12}>
          <h1>FAQs</h1>
          <p>
            If you have a question for us, please read the below FAQs. It is
            very likely the answer to your question is covered below and you
            will get an answer much more quickly than by contacting us.
          </p>
          <h4>ARE YOU ON SOCIAL MEDIA?</h4>
          <p>
            Yes. Connect with us on Facebook, Twitter, Instagram and YouTube.
          </p>
          <h4>I'VE GOT AN IDEA, WHO DO I CONTACT?</h4>
          <p>
            {" "}
            If you have an idea you should research which production companies
            have worked on similar projects and submit a proposal to them
            directly
          </p>
          <h4>HOW CAN I ADVERTISE ON YOUR WEBSITE?</h4>
          <p>
            We offer a variety of advertising opportunities on our websites as
            well as larger integration possibilities with our content. To learn
            more about commercial opportunities and how your brand can work with
            us please use the contact us link and state clearly in the message
            that it is for our Commercial team.
          </p>
        </Col>
      </Row>
    </div>
  );
}
