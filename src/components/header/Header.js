import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import logo from "../../assets/images/The Emmanuel Muturia™ Logo.png";
import {
  productsSection,
  videoSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const viewProducts = productsSection.display;
  const viewOpenSource = openSource.display;
  const viewVideos = videoSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  // Close menu after navigation (mobile)
  const handleMenuClick = () => {
    const menuBtn = document.getElementById("menu-btn");
    if (menuBtn && menuBtn.checked) {
      menuBtn.checked = false;
    }
  };

  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
          <img
            src={logo}
            alt="Logo"
            className="site-logo"
            fetchPriority="high"
            decoding="async"
          />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          {viewVideos && (
            <li>
              <a href="#videos" onClick={handleMenuClick}>
                Videos
              </a>
            </li>
          )}
          {viewProducts && (
            <li>
              <a href="#products" onClick={handleMenuClick}>
                Products
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource" onClick={handleMenuClick}>
                Research
              </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements" onClick={handleMenuClick}>
                Certifications
              </a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs" onClick={handleMenuClick}>
                Publications
              </a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks" onClick={handleMenuClick}>
                Talks
              </a>
            </li>
          )}
          <li>
            <a href="#contact" onClick={handleMenuClick}>
              Contact
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
