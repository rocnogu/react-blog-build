import React from "react";
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";


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






//         default function             default function           default function
export default function Footer() {
  

  return (
 
    <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left ">
      <div className="row page-footer">
        <div className="col-md-6 mt-md-0 mt-3 ">
          <Router>
          <NavLink exact to="/about" className="footer-NavLink" activeClassName="selected">
            About Us
          </NavLink>
          <NavLink exact to="/terms" className="footer-NavLink" activeClassName="selected">
            Terms of Use
          </NavLink>
          <NavLink exact to="/privacy" className="footer-NavLink" activeClassName="selected">
            Privacy Policy
          </NavLink>
          <NavLink exact to="/cookies" className="footer-NavLink" activeClassName="selected">
            Cookies
          </NavLink>
          <NavLink exact to="/faqs" className="footer-NavLink" activeClassName="selected">
            FAQs
          </NavLink>
          <NavLink exact to="/contact" className="footer-NavLink" activeClassName="selected" >
            Contact us
          </NavLink>
          </Router>

        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-4 mb-md-0 mb-4">
          <p> Follow us on social media</p>

          {/* social NavLinks */}
          <div className="social-footer-icons">
            <a
              href="https://www.facebook.com/rocnogu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon size={32} round />
            </a>

            <a
              href="https://www.linkedin.com/in/pavel-petkov-3639b8b5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon size={32} round />
            </a>

            <a
              href="https://www.reddit.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RedditIcon size={32} round />
            </a>

            <a
              href="https://www.tumblr.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TumblrIcon size={32} round />
            </a>

            <a
              href="https://t.me/rocnogu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon size={32} round />
            </a>

            <a
              href="https://www.viber.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ViberIcon size={32} round />
            </a>

            <a
              href="https://wa.me/004915776419361?text=I%20come%20from%20your%20recipe%20blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappIcon size={32} round />
            </a>

            <a
              href="https://www.twitter.com/rocnogu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon size={32} round />
            </a>

            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PinterestIcon size={32} round />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstapaperIcon size={32} round />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="footer-copyright text-center py-3">
      © 2021 Copyright:{" "}
      <a
        href="https://github.com/rocnogu"
        rel="noreferrer noopener"
        target="_blank"
        style={{ color: "red" }}
      >
        rocnogu
      </a>
    </div>
  </footer>
  );
}
