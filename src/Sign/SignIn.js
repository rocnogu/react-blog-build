import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
//

export default function SignIn() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //fetch users Data
      const UsersResult = await axios(
        "https://rocnogu-blog-express.herokuapp.com/users-permissions_user"
      );

      setUsersData(UsersResult.data);
    };
    //
    fetchData();
  }, []);

  const AUTH = {
    NOT_LOGGED_IN: "NOT_LOGGED_IN",
    LOGGED_IN: "LOGGED_IN",
    LOGIN_PENDING: "LOGIN_PENDING",
    LOGIN_FAILED: "LOGIN_FAILED",
  };
  const user_id = Math.floor(Math.random() * 48) + 1;
  const user = usersData.find((user) => user.id === user_id);
  console.log(user);
  //
  const [authStatus, setLoggedIn] = useState(AUTH.NOT_LOGGED_IN);
  console.log(authStatus);
  //
  const login = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(Math.random() > 0.5 ? 200 : 401), 2000);
    });
  };
  const handleLoginRequest = (event) => {
    event.preventDefault();
    setLoggedIn(AUTH.LOGIN_PENDING);
    login().then((result) => {
      console.log(result);
      switch (result) {
        case 200:
          setLoggedIn(AUTH.LOGGED_IN);
          break;
        case 401:
          setLoggedIn(AUTH.LOGIN_FAILED);
          break;
        default:
          alert("didn't understand API response");
          setLoggedIn(AUTH.NOT_LOGGED_IN);
      }
    });
  };
  return (
    <div className="mainDiv">
      <Row>
        <Col sm={12} xs={12} md={12}>
          {" "}
          <h1>Sign In page</h1>
          <Form className="loginMain">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button
              variant="primary"
              type="submit"
              onSubmit={handleLoginRequest}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
