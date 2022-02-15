import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//
export default function About() {
  return (
    <div className="mainDiv">
      <Row>
        <Col sm={12} xs={12} md={12}>
          <h1>About us</h1>
          <p> Now we look as good as we taste! </p>
          <p>
            Welcome to your new-look Food Network website, we’ve still got the
            same delicious food content that you know and love… we’ve just upped
            our presentation skills!
          </p>
          <p>
            Food is the ultimate food destination and number one dedicated food
            website. We’re the go-to foodie friend for all your culinary needs.
          </p>
          <p>
            Take a look through thousands of recipes on our website, where
            you’ll also find all the information you need about your favourite
            stories and recipes. Or, for quick tips and inspirational videos,
            follow us on Facebook, Instagram, and Twitter.
          </p>
          <p>Award-winning cooking and competition stories.</p>
        </Col>
      </Row>
    </div>
  );
}
