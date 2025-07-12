import React from "react";
import "./LabCard.scss";

export default function LabCard({lab}) {
  const openPdfInNewTab = (pdfUrl, title) => {
    if (!pdfUrl) {
      console.warn(`Missing PDF URL for: ${title}`);
      return;
    }

    const fullUrl = `${window.location.origin}${
      pdfUrl.startsWith("/") ? pdfUrl : "/" + pdfUrl
    }`;
    window.open(fullUrl, "_blank");
  };

  return (
    <div
      className="lab-card-container"
      onClick={() => openPdfInNewTab(lab.pdfUrl, lab.title)}
    >
      <div className="lab-card">
        <h3 className="lab-title">{lab.title}</h3>
        <p className="lab-description">{lab.description}</p>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
      </div>
    </div>
  );
}
