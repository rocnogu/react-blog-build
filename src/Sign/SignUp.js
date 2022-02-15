import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//         default function             default function           default function
export default function SignUp() {
  const [form, setState] = useState({
    User_Name: "",
    User_Email: "",
    User_Password: "",
    User_First_Name: "",
    User_Last_Name: "",
    User_Bio: "",
    User_Pictures: "",
    User_Gender: "",
    User_Age: "",
    User_Location: "",
    User_Website: ""

  });
//
  const updateField = (e) => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  //
  var bgColors = {
    Default: "#81b71a",
    Blue: "#00B1E1",
    Cyan: "#37BC9B",
    Green: "#8CC152",
    Red: "#E9573F",
    Yellow: "#F6BB42",
  };
  //
  return (
    <div className="userCreation">
              <h1>Sign Up page</h1>
      <Form onSubmit={console.log}>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="User_Name"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="email" 
              placeholder="email@example.com"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="User_Password"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />

          </Col>
        </Row>
        <hr />

        <Row className="justify-content-md-center">
        <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="User_First_Name"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="User_Last_Name"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>

        </Row>

        <hr />

        <Row className="justify-content-md-center">
        <Col xs lg="2">
            <Form.Control
              as="textarea"
              type="text"
              placeholder="User_Bio"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />

          </Col>

          <Col xs lg="2">
            <h5>User Picture</h5>
              
            <Form.Control type="file" required style={{ backgroundColor: bgColors.Green }} />
          </Col>
        </Row>
        <hr />
       

        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="User_Gender"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="number"
              placeholder="User_Age"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />

          </Col>

        </Row>
        <hr />

       
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="User_Location"
              onChange={updateField}
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="User_Website"
              onChange={updateField}
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />

          </Col>

        </Row>
        <hr />

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br />
      </Form>
        <br />
    </div>
  );
}

