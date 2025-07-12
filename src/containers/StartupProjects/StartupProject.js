import React from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import TechCommunitiesCarousel from "./TechCommunitiesCarousel";

export default function StartupProject() {
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="tech-communities">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p className="subTitle project-subtitle">
            {bigProjects.subtitle}
          </p>
          <TechCommunitiesCarousel />
        </div>
      </div>
    </Fade>
  );
}
