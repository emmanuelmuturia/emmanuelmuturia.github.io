import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faMedium,
  faRedditAlien,
  faSnapchat,
  faTiktok,
  faXTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMedium} aria-hidden="true" />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.youtube ? (
        <a
          href={socialMediaLinks.youtube}
          className="icon-button youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} aria-hidden="true" />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.x ? (
        <a
          href={socialMediaLinks.x}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faXTwitter} aria-hidden="true" />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.tiktok ? (
        <a
          href={socialMediaLinks.tiktok}
          className="icon-button tiktok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTiktok} aria-hidden="true" />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.discord ? (
        <a
          href={socialMediaLinks.discord}
          className="icon-button discord"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} aria-hidden="true" />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.reddit ? (
        <a
          href={socialMediaLinks.reddit}
          className="icon-button reddit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faRedditAlien} aria-hidden="true" />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.snapchat ? (
        <a
          href={socialMediaLinks.snapchat}
          className="icon-button snapchat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faSnapchat} aria-hidden="true" />
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
