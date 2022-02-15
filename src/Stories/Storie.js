import { useLocation } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import ReactPlayer from "react-player";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
//
export default function Storie({storiesData}) {
  //
  console.log(storiesData)
  const { state } = useLocation();
  //
  const storieById = storiesData.find(
    (storie) => storie._id === state.stories);
    //
  //const source = storieById.Storie_Video;
  // return return return return return return return return
  return (
    <div className="mainDiv">
      {/* */}
      {storiesData && storieById ? (
        <Row>
          <Col sm={12} xs={12} md={12}>
            <h1>{storieById.Storie_Title}</h1>
            <div className="shareButtons">
              <FacebookShareButton
                url={"https://www.facebook.com/"}
                quote={storieById.Storie_Title}
                description={"storieById.Storie_Sub_Title"}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <TwitterShareButton
                url={"https://twitter.com"}
                title={storieById.Storie_Title}
                hashtags={[storieById.Storie_Title, storieById.Storie_Sub_Title]}
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>

              <InstapaperShareButton
                url={"https://www.instapaper.com/"}
                quote={storieById.Storie_Title}
                description={"storieById.Storie_Sub_Title"}
              >
                <InstapaperIcon size={32} round />
              </InstapaperShareButton>

              <LinkedinShareButton
                url={"https://www.linkedin.com/"}
                quote={storieById.Storie_Title}
                description={"storieById.Storie_Sub_Title"}
                className="Demo__some-network__share-button"
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>

              <PinterestShareButton
                url={"https://www.pinterest.com/"}
                quote={storieById.Storie_Title}
                description={"storieById.Storie_Sub_Title"}
                className="Demo__some-network__share-button"
              >
                <PinterestIcon size={32} round />
              </PinterestShareButton>

              <RedditShareButton
                url={"https://www.reddit.com/"}
                quote={storieById.Storie_Title}
                description={"storieById.Storie_Sub_Title"}
                className="Demo__some-network__share-button"
              >
                <RedditIcon size={32} round />
              </RedditShareButton>

              <TumblrShareButton
                url={"https://www.tumblr.com/"}
                quote={storieById.Storie_Title}
                description={"storieById.Storie_Sub_Title"}
                className="Demo__some-network__share-button"
              >
                <TumblrIcon size={32} round />
              </TumblrShareButton>

              <TelegramShareButton
                url={"https://www.web.telegram.org.com/"}
                quote={storieById.Storie_Title}
                description={"storieById.Storie_Sub_Title"}
                className="Demo__some-network__share-button"
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>

              <ViberShareButton
                url={"https://www.viber.com/"}
                quote={storieById.Storie_Title}
                description={"storieById.Storie_Sub_Title"}
                className="Demo__some-network__share-button"
              >
                <ViberIcon size={32} round />
              </ViberShareButton>

              <WhatsappShareButton
                url={"https://www.web.whatsapp.com.com/"}
                quote={storieById.Storie_Title}
                description={"storieById.Storie_Sub_Title"}
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>
            <br />
            <div
              className="storie-img-div"
              style={{
                backgroundImage: `url(${storieById.Storie_Picture})`,
              }}
            ></div>
            <br />
            <h3>{storieById.Storie_Sub_Title}</h3>
            <br />
            <div className="storie-div">
              <p>{storieById.Storie_Text}</p>
            </div>
            <small className="text-muted">
              Last updated: {storieById.updatedAt.substring(0, 10)}
              from: {storieById.created_by}
            </small>

            {/*tags */}
            <br />
            <div>
            {storieById.Storie_Tags[0] ? (
              <Badge pill className="tags">
                {storieById.Storie_Tags[0]}
              </Badge>
            ) : (
              ""
            )}

            {storieById.Storie_Tags[1] ? (
              <Badge pill className="tags">
                <span  onClick={""}> {storieById.Storie_Tags[1]} </span>
              </Badge>
            ) : (
              ""
            )}
            {storieById.Storie_Tags[2] ? (
              <Badge pill className="tags">
                {storieById.Storie_Tags[2]}
              </Badge>
            ) : (
              ""
            )}

            {storieById.Storie_Tags[3] ? (
              <Badge pill className="tags">
                {storieById.Storie_Tags[3]}
              </Badge>
            ) : (
              ""
            )}

            {storieById.Storie_Tags[4] ? (
              <Badge pill className="tags">
                {storieById.Storie_Tags[4]}
              </Badge>
            ) : (
              ""
            )}

            {storieById.Storie_Tags[5] ? (
              <Badge pill className="tags">
                {storieById.Storie_Tags[5]}
              </Badge>
            ) : (
              ""
            )}

            {storieById.Storie_Tags[6] ? (
              <Badge pill className="tags">
                {storieById.Storie_Tags[6]}
              </Badge>
            ) : (
              ""
            )}

            {storieById.Storie_Tags[7] ? (
              <Badge pill className="tags">
                {storieById.Storie_Tags[7]}
              </Badge>
            ) : (
              ""
            )}

            {storieById.Storie_Tags[8] ? (
              <Badge pill className="tags">
                {storieById.Storie_Tags[8]}
              </Badge>
            ) : (
              ""
            )}

            {storieById.Storie_Tags[9] ? (
              <Badge pill className="tags">
                {storieById.Storie_Tags[9]}
              </Badge>
            ) : (
              ""
            )}

            {storieById.Storie_Tags[10] ? (
              <Badge pill className="tags">
                {storieById.Storie_Tags[10]}
              </Badge>
            ) : (
              ""
            )}

            {storieById.Storie_Tags[11] ? (
              <Badge pill className="tags"> 
                {storieById.Storie_Tags[11]}
              </Badge>
            ) : (
              ""
            )}
            </div>
            <br />
            <br />

            <br />
            <div className="storieVideo">
            <ReactPlayer  />  { /* url={source}*/}
            </div>
          </Col>
        </Row>
      ) : (
        "It has no recipesData to show"
      )}
    </div>
  );
}
