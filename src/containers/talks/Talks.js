import React from "react";
import "./Talks.scss";
import TalkCard from "../../components/talkCard/TalkCard";
import { talkSection } from "../../portfolio";
import { Fade } from "react-awesome-reveal";

export default function Talks() {
  if (!talkSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="talk-header-title">{talkSection.title}</h1>
          <p className="dark-mode talk-header-subtitle">
            {talkSection.subtitle}
          </p>
          <div className="talk-cards-div">
            {talkSection.talks.slice(0, 2).map((talk, i) => {
              return (
                <TalkCard
                  key={i}
                  variant={i === 0 ? "application-security" : "web-security"}
                  talkDetails={{
                    title: talk.title,
                    subtitle: talk.subtitle,
                    event_url: talk.event_url
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
