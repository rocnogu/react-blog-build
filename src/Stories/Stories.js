import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
//
export default function Stories({ storiesData }) {
  //
  console.log(`storiesData: ${storiesData}`);
  // return return return return return return return return
  return (
    <div className="storiesMainDiv">
      {storiesData ? (
        <Row className="justify-content-md-center">
          {storiesData.map((storie) => (
            <Col sm={4}>
              <div className="recipies-col-div">
                <Link
                  to={{
                    pathname: `/storie/${storie._id}`,
                    state: { stories: storie._id },
                  }}
                >
                  <div
                    className="recipies-col-div-one"
                    style={{
                      backgroundImage: `url(${storie.Storie_Picture})`,
                    }}
                  >
                    <h3>
                      <span>{storie.Storie_Title}</span>
                    </h3>
                  </div>
                </Link>
              </div>
              <br />
            </Col>
          ))}
        </Row>
      ) : (
        "It has no stories to show"
      )}
    </div>
  );
}
