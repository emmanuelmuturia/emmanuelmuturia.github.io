import React from "react";
import "./TalkCard.scss";

export default function TalkCard({ talkDetails, variant }) {
  return (
    <a
      className={`talk-card ${variant}`}
      href={talkDetails.event_url}
      target="_blank"
      rel="noreferrer"
    >
      <span className="talk-card-kicker">Talk &amp; Session</span>
      <h2 className="talk-card-title">{talkDetails.title}</h2>
      <p className="talk-card-subtitle">{talkDetails.subtitle}</p>
      <span className="talk-card-link">Watch the event &#8594;</span>
    </a>
  );
}
