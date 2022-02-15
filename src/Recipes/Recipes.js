import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
//
export default function Recipes({ recipesData }) {
  //
  console.log(`recipesData: ${recipesData}`);
  // return return return return return return return return
  return (
    <div className="mainDiv">
      {recipesData ? (
        <Row>
          {recipesData.map((recipe) => (
            <Col sm={4}>
              <div className="recipies-col-div">
                <Link
                  to={{
                    pathname: `/recipe/${recipe._id}`,
                    state: { recipes: recipe._id },
                  }}
                >
                  <div
                    className="recipies-col-div-one"
                    style={{
                      backgroundImage: `url(${recipe.Recipe_Picture})`,
                    }}
                  >
                    <h3>
                      <span>{recipe.Recipe_Title}</span>
                    </h3>
                  </div>
                </Link>

                <div className="recipies-col-div-two">
                  <Table striped bordered hover variant="dark">
                    <tbody>
                      <tr>
                        <td>
                          <p>Preparation Time</p>
                          <p>{recipe.Recipe_Preparation_Time}</p>
                        </td>
                        <td>
                          <p>Cooking Time</p>
                          <p>{recipe.Recipe_Cooking_Time}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Serves</p>
                          <p>{recipe.Recipe_Serves}</p>
                        </td>
                        <td>
                          <p>Difficulty</p>
                          <p>{recipe.Recipe_Difficulty}</p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      ) : (
        "It has no recipes to show"
      )}
    </div>
  );
}
