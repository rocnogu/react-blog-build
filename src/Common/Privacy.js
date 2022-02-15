import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//
export default function Privacy() {
  return (
    <div className="mainDiv">
      {" "}
      <Row>
        <Col sm={12} xs={12} md={12}>
          {" "}
          <h1>Privacy Policy</h1>
          <p>
            We value your privacy and want to be accountable and fair to you as
            well as transparent with you in the way that we collect and use your
            personal information. Our overall aim is to ensure that our
            collection and use of personal information is appropriate to the
            provision of the Services to you, and is in accordance with
            applicable data protection laws. We also want you to know your
            rights in relation to your information.
          </p>
          <p>
            In line with these values, this privacy policy tells you what to
            expect when we collect and use personal information about you. We
            have tried to make it easy for you to navigate so you can find the
            information that is most relevant to you and our relationship with
            you.
          </p>
          <p>This privacy policy applies to all users of our Services.</p>
          <p>
            You have various rights in respect of our use of your personal
            information as set out in section 10 below. One of the fundamental
            rights to be aware of is that you may ask us to consider any valid
            objections which you have to our use of your personal information
            where we process your personal information on the basis of our, or
            another person's, legitimate interest.
          </p>
        </Col>
      </Row>
    </div>
  );
}
