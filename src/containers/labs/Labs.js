import React, { useContext } from "react";
import "./Labs.scss";
import LabCard from "../../components/labCard/LabCard";
import { labsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Labs() {
  const { isDark } = useContext(StyleContext);

  if (!labsSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="labs">
        <div className="lab-header">
          <h1 className="lab-header-text">{labsSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode lab-subtitle" : "subTitle lab-subtitle"
            }
          >
            {labsSection.subtitle}
          </p>
        </div>

        <div className="lab-main-div">
          <div className="lab-text-div">
            {labsSection.labs.map((lab, i) => (
              <LabCard
                key={i}
                isDark={isDark}
                lab={{
                  pdfUrl: lab.pdfUrl,
                  title: lab.title,
                  description: lab.description,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}