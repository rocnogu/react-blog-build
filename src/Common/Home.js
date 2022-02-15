import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//
export default function Home() {
  return (
    <div className="mainDiv">
      {" "}
      <Row>
        <Col sm={12} xs={12} md={12}>
          <h1>What Makes a Good Website Homepage Design</h1>

          <p>
             "Who I am," "What I do," , "What can the visitor do
            here."
          </p>
          <p>
            (CTA) 'Sign Up' or 'Buy Now' takes the form of a button or
            hyperlink.
          </p>


        </Col>
      </Row>
    </div>
  );
}
