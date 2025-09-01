import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import logo from "../../assets/images/logo.png";
import {
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

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
          <img src={logo} alt="Logo" className="site-logo" />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          {/* YouTube Section Link as first item */}
          <li>
            <a href="#youtube" onClick={handleMenuClick}>
              YouTube
            </a>
          </li>
          {viewSkills && (
            <li>
              <a href="#skills" onClick={handleMenuClick}>
                Skills
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" onClick={handleMenuClick}>
                Experience
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource" onClick={handleMenuClick}>
                Projects
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
