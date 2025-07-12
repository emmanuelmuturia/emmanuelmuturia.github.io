import React from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className="dark-mode main" id="skills">
      <div className="skills-main-div" style={{alignItems: "center"}}>
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className="dark-mode skills-heading">{skillsSection.title} </h1>
            <p className="dark-mode subTitle skills-text-subtitle">
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
          </div>
        </Fade>
      </div>
    </div>
  );
}
