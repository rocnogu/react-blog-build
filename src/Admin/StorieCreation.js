import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//         default function             default function           default function
export default function StorieCreation() {
  const [form, setState] = useState({
    Storie_Title: "",
    Storie_Sub_Title: "",
    Storie_Picture: "",
    Storie_Video: "",
    Storie_Text: "",
    Storie_created_by: "",

    Storie_Tags1: "",
    Storie_Tags2: "",
    Storie_Tags3: "",
    Storie_Tags4: "",
    Storie_Tags5: "",
    Storie_Tags6: "",
    Storie_Tags7: "",
    Storie_Tags8: "",
    Storie_Tags9: "",
    Storie_Tags10: "",
    Storie_Tags11: "",
    Storie_Tags12: ""
  });

  // make new form for tags?
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
    <div className="storieCreation">
      <h1>STORIE CREATION PAGE</h1>
      <Form onSubmit={console.log}>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Storie_Title"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />

          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Storie_Sub_Title"
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
              placeholder="Storie_created_by"
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
          <Col xs lg="6">
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Storie_Text"
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
            <h5>Storie Video Link</h5>
            <Form.Control
              type="text"
              placeholder="Storie_Video"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>

          <Col xs lg="2">
            <h5>Storie Picture</h5>
            <Form.Control type="file" required/>
          </Col>
        </Row>
        <hr />
        <h3>Storie_Tags</h3>

        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Storie_Tag1"
              onChange={updateField}
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />

          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Storie_Tag2"
              onChange={updateField}
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />

          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Storie_Tag3"
              onChange={updateField}
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />

          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Storie_Tag4"
              onChange={updateField}
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />

          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Storie_Tag5"
              onChange={updateField}
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />

          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Storie_Tag6"
              onChange={updateField}
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />

          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Storie_Tag7"
              onChange={updateField}
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />

          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Storie_Tag8"
              onChange={updateField}
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />

          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Storie_Tag9"
              onChange={updateField}
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />

          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Storie_Tag10"
              onChange={updateField}
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />

          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Storie_Tag11"
              onChange={updateField}
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />

          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Storie_Tag12"
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
      </Form>
    </div>
  );
}
