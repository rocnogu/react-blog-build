import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//         default function             default function           default function
export default function RecipeCreation() {
  const [form, setState] = useState({
    Recipe_Title: "",
    Recipe_Sub_Title: "",
    Recipe_Difficulty: "",
    Recipe_Picture: "",
    created_by: "",

    Recipe_Preparation_Time: "",
    Recipe_Cooking_Time: "",
    Recipe_Serves: "",

    Recipe_Ingredient1: "",
    Recipe_Ingredient2: "",
    Recipe_Ingredient3: "",
    Recipe_Ingredient4: "",
    Recipe_Ingredient5: "",
    Recipe_Ingredient6: "",
    Recipe_Ingredient7: "",
    Recipe_Ingredient8: "",
    Recipe_Ingredient9: "",
    Recipe_Ingredient10: "",
    Recipe_Ingredient11: "",
    Recipe_Ingredient12: "",

    Recipe_Method1: "",
    Recipe_Method2: "",
    Recipe_Method3: "",
    Recipe_Method4: "",
    Recipe_Method5: "",
    Recipe_Method6: "",
    Recipe_Method7: "",
    Recipe_Method8: "",
    Recipe_Method9: "",
    Recipe_Method10: "",
    Recipe_Method11: "",
    Recipe_Method12: "",

    Recipe_Tag1: "",
    Recipe_Tag2: "",
    Recipe_Tag3: "",
    Recipe_Tag4: "",
    Recipe_Tag5: "",
    Recipe_Tag6: "",
    Recipe_Tag7: "",
    Recipe_Tag8: "",
    Recipe_Tag9: "",
    Recipe_Tag10: "",
    Recipe_Tag11: "",
    Recipe_Tag12: ""

  });

  // print Values
  //
  const updateField = (e) => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  //
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    setValue(e);
  };
  console.log(value)
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
    <div className="recipeCreation">
      <h1>RECIPE CREATION PAGE</h1>



 <Form action="/recipecreation" method="post" enctype="multipart/form-data">
 <Form.Control type="file" name="image" />
 <Button variant="primary" type="submit" name="button">
        upload
        </Button>
</Form>



      <Form onSubmit={console.log}>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Title"
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
              placeholder="Recipe_Sub_Title"
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
              placeholder="Recipe_created_by"
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
              type="number"
              placeholder="Recipe_Preparation_Time"
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
              placeholder="Recipe_Cooking_Time"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="number"
              placeholder="Recipe_Serves"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <DropdownButton
              title="Recipe_Difficulty"
              name=""
              id=""
              onSelect={handleSelect}
              variant="success"
            >
              <Dropdown.Item eventKey="Easy">Easy</Dropdown.Item>
              <Dropdown.Item eventKey="Medium">Medium</Dropdown.Item>
              <Dropdown.Item eventKey="Hard">Hard</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>

        <hr />

        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <h5>Recipe Picture</h5>
            <Form.Control type="file" name="image" />
          </Col>
        </Row>
        <hr />
        <h3>Recipe Methods</h3>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Method1"
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
              placeholder="Recipe_Method2"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Method3"
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
              placeholder="Recipe_Method4"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Method5"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Method6"
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
              placeholder="Recipe_Method7"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Method8"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Method9"
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
              placeholder="Recipe_Method10"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Method11"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Method12"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
        </Row>

        <hr />

        <h3>Recipe Ingredients</h3>

        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient1"
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
              placeholder="Recipe_Ingredient2"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient3"
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
              placeholder="Recipe_Ingredient4"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient5"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient6"
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
              placeholder="Recipe_Ingredient7"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient8"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient9"
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
              placeholder="Recipe_Ingredient10"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient11"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient12"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
        </Row>
        <hr />
        <h3>Recipe_Tags</h3>

        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag1"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag2"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag3"
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
              placeholder="Recipe_Tag4"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag5"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag6"
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
              placeholder="Recipe_Tag7"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag8"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag9"
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
              placeholder="Recipe_Tag10"
              onChange={updateField}
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag11"
              onChange={updateField}
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag12"
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
