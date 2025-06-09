import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    if (win) win.focus();
  }

  return (
    <div
      className={isDark ? "dark-mode certificate-card clickable-card" : "certificate-card clickable-card"}
      onClick={() => {
  if (!cardInfo.url) {
    console.log(`URL for ${cardInfo.title} not found`);
    return;
  }
  openUrlInNewTab(cardInfo.url, cardInfo.title);
}}


    >
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        />
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      {/* Footer removed */}
    </div>
  );
}
