import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
// components
import RecipeCreation from "./Admin/RecipeCreation";
import StorieCreation from "./Admin/StorieCreation";
//
import Messenger from "./Message/Messenger";
import Message from "./Message/Message";
import Messages from "./Message/Messages";
//
import About from "./Common/About";
import Cookies from "./Common/Cookies";
import Privacy from "./Common/Privacy";
import Home from "./Common/Home";
import FAQs from "./Common/FAQs";
import Contact from "./Common/Contact";
import Terms from "./Common/Terms";
//
import Recipe from "./Recipes/Recipe";
import Recipes from "./Recipes/Recipes";
//
import Search from "./Elements/Search";
import Footer from "./Elements/Footer";
//
import Stories from "./Stories/Stories";
import Storie from "./Stories/Storie";
import Users from "./User/Users";
import User from "./User/User";
//
import SignIn from "./Sign/SignIn";
import SignOut from "./Sign/SignOut";
import SignUp from "./Sign/SignUp";
import UserCreation from "./Sign/SignUp";
import SignOutButton from "./Sign/SignOutButton";
//
import UploadImg from "./UploadImg";
import Bugs from "./Bugs";

// css
import "./App.css";
//
// function function function function function function
export default function App() {
  // useState Recipes Data
  const [recipesData, setRecipesData] = useState([]);
  // useState Stories Data
  const [storiesData, setStoriesData] = useState([]);
  //

  useEffect(() => {
    const fetchData = async () => {
      // fetch Recipes Data
      const RecipesResult = await axios(
        " https://rocnogu-blog-express.herokuapp.com/recipes"
      );
      // fetch Stories Data
      const StoriesResult = await axios(
        "https://rocnogu-blog-express.herokuapp.com/stories"
      );
      //
      setRecipesData(RecipesResult.data);
      setStoriesData(StoriesResult.data);
    };
    //
    fetchData();
  }, []);
  //
  if (storiesData) {
    var keyId = 0 || storiesData.map((r) => r._id);
  }
  //
  // return return return return return return return return
  return (
    <div className="App">
      {/* */}
      <Router>
        <Navbar bg="light" expand="lg" sticky="top">
          <Container>
            {/* Navbar */}
            <Navbar.Brand>
              {/* Navbar img */}

              <div className="nav-bar-a">
                <a
                  href="https://wbs-blog.netlify.app/"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://rocnogu-blog-bucket.s3.eu-central-1.amazonaws.com/logo.ico"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="i"
                  />
                  <Navbar.Brand> rocnogu-blog</Navbar.Brand>
                </a>
              </div>
            </Navbar.Brand>

            {/* Navbar name */}

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* general Routes */}
                <NavLink
                  exact
                  to="/"
                  className="nav-link nav-fill"
                  activeClassName="selected"
                >
                  Home
                </NavLink>
                {/* recipe storie*/}

                <NavLink
                  exact
                  to="/recipes"
                  className="nav-link nav-fill"
                  activeClassName="selected"
                >
                  Recipes
                </NavLink>
                <NavLink
                  exact
                  to="/stories"
                  className="nav-link nav-fill"
                  activeClassName="selected"
                >
                  Stories
                </NavLink>
                {/* recipe storie end*/}
                {/* general Routes end*/}

                <span> ==)) </span>

                {/*should be for users only */}

                <NavLink
                  exact
                  to="/messenger"
                  className="nav-link nav-fill"
                  activeClassName="selected"
                >
                  Messenger
                </NavLink>
                {/*should be for users only end*/}
                <span> ((==)) </span>

                {/*should be for admins only */}
                <NavLink
                  exact
                  to="/recipecreation"
                  className="nav-link nav-fill"
                  activeClassName="selected"
                >
                  R creating
                </NavLink>
                <NavLink
                  exact
                  to="/storiecreation"
                  className="nav-link nav-fill"
                  activeClassName="selected"
                >
                  S creating
                </NavLink>
                <span> ((== </span>

                {/*should be for admins only end */}
                <NavLink
                  exact
                  to="/uploadimg"
                  className="nav-link nav-fill"
                  activeClassName="selected"
                >
                  uploadimg
                </NavLink>
              </Nav>

              {/* */}
              <NavLink
                className="nav-link nav-fill"
                exact
                to="/bugs"
                activeClassName="selected"
              >
                Bugs
              </NavLink>

              <NavLink
                className="nav-link nav-fill"
                exact
                to="/signin"
                activeClassName="selected"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/signup"
                className="nav-link nav-fill"
                activeClassName="selected"
              >
                Sign Up
              </NavLink>
              <NavLink
                exact
                to="/signout"
                className="nav-link nav-fill"
                activeClassName="selected"
              >
                <SignOutButton />
              </NavLink>

              {/* */}

              {/*Search */}
              <Search />

              {/*Navbar.Collapse */}
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Switch */}
        <Switch>
          {/* general Routes */}
          {/* general Routes */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signout">
            <SignOut />
          </Route>
          <Route exact path="/bugs">
            <Bugs />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/cookies">
            <Cookies />
          </Route>
          <Route path="/faqs">
            <FAQs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

          {/* general Routes */}
          {/* general Routes */}

          {/* recipe storie*/}
          {/* recipe storie*/}

          <Route exact path="/recipes">
            <Recipes recipesData={recipesData} key={keyId} />
          </Route>

          <Route exact path="/stories">
            <Stories storiesData={storiesData} key={keyId} />
          </Route>

          {/* generate dynamic route based  on recipe id*/}
          <Route exact path="/recipe/:id">
            <Recipe recipesData={recipesData} key={keyId} />
          </Route>

          {/* generate dynamic route based  on storie id*/}
          <Route exact path="/storie/:id">
            <Storie storiesData={storiesData} recipesData={recipesData} />
          </Route>
          {/* recipe storie*/}
          {/* recipe storie*/}

          {/*should be for users only  */}
          {/*should be for users only  */}
          <Route exact path="/message">
            <Message />
          </Route>

          <Route exact path="/messages">
            <Messages />
          </Route>

          <Route exact path="/users">
            <Users />
          </Route>

          <Route exact path="/user">
            <User />
          </Route>
          {/*should be for users only  end */}
          {/*should be for users only  end */}

          {/*should be for admins only  */}
          {/*should be for admins only  */}
          <Route exact path="/recipecreation">
            <RecipeCreation />
          </Route>

          <Route exact path="/storiecreation">
            <StorieCreation />
          </Route>
          <Route exact path="/usercreation">
            <UserCreation />
          </Route>
          {/*should be for admins only end */}
          {/*should be for admins only end */}

          <Route exact path="/messenger">
            <Messenger />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signout">
            <SignOut />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>

          <Route path="/uploadimg">
            <UploadImg />
          </Route>
        </Switch>

        {/* footer */}
        <Footer />
      </Router>
    </div>
  );
}
