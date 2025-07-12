import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    if (win) win.focus();
  }

  const clickable = !!cardInfo.url;
  const handleClick = () => {
    if (clickable) {
      openUrlInNewTab(cardInfo.url, cardInfo.title);
    }
  };

  return (
    <div className="achievement-circle-card dark-mode">
      <div className="achievement-circle-image-wrapper">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="achievement-circle-image"
        />
      </div>
      <div className="achievement-circle-title">{cardInfo.title}</div>
    </div>
  );
}
