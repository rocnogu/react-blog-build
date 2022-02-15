import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";
import { useLocation } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

//
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from "react-share";
//
import {
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  WhatsappIcon,
} from "react-share";
// function function function function function
export default function Recipe({recipesData, keyId}) {
  //
  const { state } = useLocation();
  //
  const recipeById = recipesData.find(
    (recipe) => recipe._id === state.recipes);
  console.log(recipeById)
  // return return return return return return return return
  return (
    <div className="mainDiv">

{recipesData && recipeById ? (
        <Row>
          <Col sm={12} xs={12} md={12}>
            <h1>{recipeById.Recipe_Title} </h1>
            <br />
            <div className="shareButtons">
              <FacebookShareButton
                url={"https://www.facebook.com/"}
                quote={recipeById.Recipe_Title}
                description={"storieById.StoriesSubTitle"}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <TwitterShareButton
                url={"https://twitter.com"}
                title={recipeById.Recipe_Title}
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>

              <InstapaperShareButton
                url={"https://www.instapaper.com/"}
                quote={recipeById.Recipe_Title}
                description={"storieById.StoriesSubTitle"}
              >
                <InstapaperIcon size={32} round />
              </InstapaperShareButton>

              <LinkedinShareButton
                url={"https://www.linkedin.com/"}
                quote={recipeById.Recipe_Title}
                description={"storieById.StoriesSubTitle"}
                className="Demo__some-network__share-button"
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>

              <PinterestShareButton
                url={"https://www.pinterest.com/"}
                quote={recipeById.Recipe_Title}
                description={"storieById.StoriesSubTitle"}
                className="Demo__some-network__share-button"
              >
                <PinterestIcon size={32} round />
              </PinterestShareButton>

              <RedditShareButton
                url={"https://www.reddit.com/"}
                quote={recipeById.Recipe_Title}
                description={"storieById.StoriesSubTitle"}
                className="Demo__some-network__share-button"
              >
                <RedditIcon size={32} round />
              </RedditShareButton>

              <TumblrShareButton
                url={"https://www.tumblr.com/"}
                quote={recipeById.Recipe_Title}
                description={"storieById.StoriesSubTitle"}
                className="Demo__some-network__share-button"
              >
                <TumblrIcon size={32} round />
              </TumblrShareButton>

              <TelegramShareButton
                url={"https://www.web.telegram.org.com/"}
                quote={recipeById.Recipe_Title}
                description={"storieById.StoriesSubTitle"}
                className="Demo__some-network__share-button"
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>

              <ViberShareButton
                url={"https://www.viber.com/"}
                quote={recipeById.Recipe_Title}
                description={"storieById.StoriesSubTitle"}
                className="Demo__some-network__share-button"
              >
                <ViberIcon size={32} round />
              </ViberShareButton>

              <WhatsappShareButton
                url={"https://www.web.whatsapp.com.com/"}
                quote={recipeById.Recipe_Title}
                description={"storieById.StoriesSubTitle"}
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>

            <br />
            <div className="recipies-col-div-two">
              <Table striped bordered hover variant="dark">
                <tbody>
                  <tr>
                    <td>
                      <p>Preparation Time</p>
                      <p>{recipeById.Recipe_Preparation_Time}</p>
                    </td>
                    <td>
                      <p>Cooking Time</p>
                      <p>{recipeById.Recipe_Cooking_Time}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Serves</p>
                      <p>{recipeById.Recipe_Serves}</p>
                    </td>
                    <td>
                      <p>Difficulty</p>
                      <p>{recipeById.Recipe_Difficulty}</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <CardGroup>
              <Card>
                <Card.Body className="recipie-background">
                  <div className="">
                    <Card.Title>Ingredients</Card.Title>

                    <ListGroup>
                      <div>
                        {recipeById.Recipe_Ingredients ? (
                          <ListGroup.Item variant="dark">
                            {recipeById.Recipe_Ingredients[0]}
                          </ListGroup.Item>
                        ) : (
                          ""
                        )}

                        {recipeById.Recipe_Ingredients ? (
                          <ListGroup.Item variant="dark">
                            {recipeById.Recipe_Ingredients[1]}
                          </ListGroup.Item>
                        ) : (
                          ""
                        )}

                        {recipeById.Recipe_Ingredients ? (
                          <ListGroup.Item variant="dark">
                            {recipeById.Recipe_Ingredients[2]}
                          </ListGroup.Item>
                        ) : (
                          ""
                        )}

                        {recipeById.Recipe_Ingredients ? (
                          <ListGroup.Item variant="dark">
                            {recipeById.Recipe_Ingredients[3]}
                          </ListGroup.Item>
                        ) : (
                          ""
                        )}

                        {recipeById.Recipe_Ingredients ? (
                          <ListGroup.Item variant="dark">
                            {recipeById.Recipe_Ingredients[4]}
                          </ListGroup.Item>
                        ) : (
                          ""
                        )}

                        {recipeById.Recipe_Ingredients ? (
                          <ListGroup.Item variant="dark">
                            {recipeById.Recipe_Ingredients[5]}
                          </ListGroup.Item>
                        ) : (
                          ""
                        )}

                        {recipeById.Recipe_Ingredients ? (
                          <ListGroup.Item variant="dark">
                            {recipeById.Recipe_Ingredients[6]}
                          </ListGroup.Item>
                        ) : (
                          ""
                        )}

                        {recipeById.Recipe_Ingredients ? (
                          <ListGroup.Item variant="dark">
                            {recipeById.Recipe_Ingredients[7]}
                          </ListGroup.Item>
                        ) : (
                          ""
                        )}

                        {recipeById.Recipe_Ingredients ? (
                          <ListGroup.Item variant="dark">
                            {recipeById.Recipe_Ingredients[8]}
                          </ListGroup.Item>
                        ) : (
                          ""
                        )}

                        {recipeById.Recipe_Ingredients ? (
                          <ListGroup.Item variant="dark">
                            {recipeById.Recipe_Ingredients[9]}
                          </ListGroup.Item>
                        ) : (
                          ""
                        )}

                        {recipeById.Recipe_Ingredients ? (
                          <ListGroup.Item variant="dark">
                            {recipeById.Recipe_Ingredients[10]}
                          </ListGroup.Item>
                        ) : (
                          ""
                        )}

                        {recipeById.Recipe_Ingredients ? (
                          <ListGroup.Item variant="dark">
                            {recipeById.Recipe_Ingredients[11]}
                          </ListGroup.Item>
                        ) : (
                          ""
                        )}

                        {recipeById.Recipe_Ingredients ? (
                          <ListGroup.Item variant="dark">
                            {recipeById.Recipe_Ingredients[12]}
                          </ListGroup.Item>
                        ) : (
                          ""
                        )}
                      </div>
                    </ListGroup>

                    <br />
                  </div>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <small className="text-muted">
                    Last updated: {recipeById.updatedAt.substring(0, 10)} /
                    from: {recipeById.created_by}
                  </small>
                </Card.Footer>
              </Card>

              <Card>
                <Card.Body className="recipie-background">
                  <Card.Title>Method</Card.Title>
                  {recipeById.RecipePicture ? (
                    <Card.Img
                      className="recipie-method-image"
                      style={{
                        backgroundImage: `url(${recipeById.Recipe_Picture})`,
                      }}
                    />
                  ) : (
                    <Card.Img className="recipie-method-image" />
                  )}
                  {recipeById.Recipe_Method ? (
                    <Card.Text>{recipeById.Recipe_Method[0]}</Card.Text>
                  ) : (
                    ""
                  )}
                  {recipeById.Recipe_Method[1] ? (
                    <Card.Text>{recipeById.Recipe_Method[1]}</Card.Text>
                  ) : (
                    ""
                  )}
                  {recipeById.Recipe_Method[2] ? (
                    <Card.Text>{recipeById.Recipe_Method[2]}</Card.Text>
                  ) : (
                    ""
                  )}
                  {recipeById.Recipe_Method[3] ? (
                    <Card.Text>{recipeById.Recipe_Method[3]}</Card.Text>
                  ) : (
                    ""
                  )}
                  {recipeById.Recipe_Method[4] ? (
                    <Card.Text>{recipeById.Recipe_Method[4]}</Card.Text>
                  ) : (
                    ""
                  )}
                  {recipeById.Recipe_Method[5] ? (
                    <Card.Text>{recipeById.Recipe_Method[5]}</Card.Text>
                  ) : (
                    ""
                  )}
                  {recipeById.Recipe_Method[6] ? (
                    <Card.Text>{recipeById.Recipe_Method[6]}</Card.Text>
                  ) : (
                    ""
                  )}
                  {recipeById.Recipe_Method[7] ? (
                    <Card.Text>{recipeById.Recipe_Method[7]}</Card.Text>
                  ) : (
                    ""
                  )}
                  {recipeById.Recipe_Method[8] ? (
                    <Card.Text>{recipeById.Recipe_Method[8]}</Card.Text>
                  ) : (
                    ""
                  )}
                  {recipeById.Recipe_Method[9] ? (
                    <Card.Text>{recipeById.Recipe_Method[9]}</Card.Text>
                  ) : (
                    ""
                  )}
                  {recipeById.Recipe_Method[10] ? (
                    <Card.Text>{recipeById.Recipe_Method[10]}</Card.Text>
                  ) : (
                    ""
                  )}{" "}
                  {recipeById.Recipe_Method[11] ? (
                    <Card.Text>{recipeById.Recipe_Method[11]}</Card.Text>
                  ) : (
                    ""
                  )}
                </Card.Body>
                <Card.Footer>
                  <Badge pill className="tags">
                    {recipeById.Recipe_Tags[1]}
                  </Badge>
                  <Badge pill className="tags">
                    {recipeById.Recipe_Tags[2]}
                  </Badge>
                  <Badge pill className="tags">
                    {recipeById.Recipe_Tags[3]}
                  </Badge>
                  <Badge pill className="tags">
                    {recipeById.Recipe_Tags[4]}
                  </Badge>
                  <Badge pill className="tags">
                    {recipeById.Recipe_Tags[5]}
                  </Badge>
                  <Badge pill className="tags">
                    {recipeById.Recipe_Tags[6]}
                  </Badge>
                  <Badge pill className="tags">
                    {recipeById.Recipe_Tags[7]}
                  </Badge>
                  <Badge pill className="tags">
                    {recipeById.Recipe_Tags[8]}
                  </Badge>
                  <Badge pill className="tags">
                    {recipeById.Recipe_Tags[9]}
                  </Badge>
                  <Badge pill className="tags">
                    {recipeById.Recipe_Tags[10]}
                  </Badge>
                  <Badge pill className="tags">
                    {recipeById.Recipe_Tags[11]}
                  </Badge>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      ) : (
        "It has no recipesData to show"
      )}

    </div>
  );
}
