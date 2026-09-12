import React, { useState } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration, contactInfo } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function Contact() {
  const [emailRevealed, setEmailRevealed] = useState(false);
  const emailAddress = String.fromCharCode(...contactInfo.email_address);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>
            <div className="contact-text-div">
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              {emailRevealed ? (
                <a
                  className="contact-detail-email"
                  href={"mailto:" + emailAddress}
                >
                  {emailAddress}
                </a>
              ) : (
                <button
                  className="contact-email-reveal"
                  type="button"
                  onClick={() => setEmailRevealed(true)}
                >
                  Reveal Email Address
                </button>
              )}
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : null}
          </div>
        </div>
      </div>
    </Fade>
  );
}
