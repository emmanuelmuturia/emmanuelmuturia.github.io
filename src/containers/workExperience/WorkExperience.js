import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCarousel from "./ExperienceCarousel";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Professional Experience</h1>
              <ExperienceCarousel isDark={isDark} />
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
