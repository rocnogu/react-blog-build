import { BrowserRouter as Router, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "./images/logo.jpg";
import Messages from "./Messages";
import Contact from "./Contact";
import Message from "./Message";
import Recipes from "./Recipes";
import Stories from "./Stories";
import Search from "./Search";
import Recipe from "./Recipe";
import Storie from "./Storie";
import Users from "./Users";
import Login from "./Login";
import About from "./About";
import User from "./User";
import React from "react";
//
export default function Header({ data }) {
  // return return return return return return return return
  return (
    <div>
      <Router>
        <Navbar bg="light" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand>
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="i"
              />
            </Navbar.Brand>

            <Navbar.Brand> rocnogu-blog</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link
                  to="/home"
                  className="nav-link nav-fill"
                  selected="active"
                >
                  Home
                </Link>

                <Link
                  to="/recipes"
                  className="nav-link nav-fill"
                  selected="active"
                >
                  Recipes
                </Link>
                <Link
                  to="/stories"
                  className="nav-link nav-fill"
                  selected="active"
                >
                  Stories
                </Link>

                <Link
                  className="nav-link nav-fill"
                  selected="active"
                  to="/login"
                >
                  Login
                </Link>
              </Nav>
              <Search />
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
        <br />
        <br />
        <Switch>
          <Route exact path="/home"></Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/message">
            <Message />
          </Route>

          <Route exact path="/messages">
            <Messages />
          </Route>

          <Route exact path="/recipe">
            <Recipe />
          </Route>

          <Route exact path="/recipes">
            <Recipes strapiData={data} />
          </Route>

          <Route exact path="/storie">
            <Storie />
          </Route>

          <Route exact path="/stories">
            <Stories />
          </Route>

          <Route exact path="/users">
            <Users />
          </Route>

          <Route exact path="/user">
            <User />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
