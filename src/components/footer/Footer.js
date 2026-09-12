import React from "react";
import "./Footer.scss";
import { Fade } from "react-awesome-reveal";
import SocialMedia from "../socialMedia/SocialMedia";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div" id="contact">
        <div className="footer-social-media">
          <SocialMedia />
        </div>
        <p className="footer-text">{`© ${new Date().getFullYear()} by Emmanuel Muturia™`}</p>
      </div>
    </Fade>
  );
}
