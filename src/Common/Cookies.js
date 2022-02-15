import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//
export default function Cookies() {
  return (
    <div className="mainDiv">
      {" "}
      <Row>
        <Col sm={12} xs={12} md={12}>
          {" "}
          <h1>Cookie Police</h1>
          <p>
            Like many companies, we use cookies and other tracking technologies
            to ensure you get the best from our Website. Below are some examples
            of the types of tracking technologies that may be used, depending on
            how you access and interact with the Website.
          </p>
          <p>
            “Cookies” are small text files from a website that are stored on
            your computer, mobile phone or other device. Cookies generally
            contain information that is associated with your web browser,
            information such as website preferences, login information, or a
            user ID. This information enables online services to recognise you
            as you interact with or revisit the Website.
          </p>
          <p>
            Like other online services and mobile applications, we use both
            cookies and other technologies such as web beacons/GIFs, pixels,
            page tags, embedded scripts and other tracking technologies. These
            technologies consist of small transparent image files or other web
            programming code that record how you interact with the Website. They
            are often used in conjunction with web browser cookies or other
            identifiers associated with your device. Below is a more detailed
            description of some of these other types of tracking technologies
            that we use on the Website:
          </p>
          <p>
            Pixels are small images on a web page or in an email. Pixels collect
            information about your browser or device and can set cookies.
          </p>
          <p>
            Local storage allows data to be stored locally on your browser or
            device and includes HTML5 local storage and browser cache.
          </p>
        </Col>
      </Row>
    </div>
  );
}
