import React from "react";
import "./Labs.scss";
import LabCard from "../../components/labCard/LabCard";
import {labsSection} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Labs() {
  if (!labsSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="labs">
        <div className="lab-header">
          <h1 className="lab-header-text">{labsSection.title}</h1>
          <p className="subTitle lab-subtitle">{labsSection.subtitle}</p>
        </div>

        <div className="lab-main-div">
          <div className="lab-text-div">
            {labsSection.labs.map((lab, i) => (
              <LabCard
                key={i}
                lab={{
                  pdfUrl: lab.pdfUrl,
                  title: lab.title,
                  description: lab.description
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
