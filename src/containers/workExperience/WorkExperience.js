import React from "react";
import "./WorkExperience.scss";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";

export default function WorkExperience() {
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Products</h1>
              <p>Coming Soon...</p>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
