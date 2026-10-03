import React, { useRef } from "react";
import "./Talks.scss";
import TalkCard from "../../components/talkCard/TalkCard";
import { talkSection } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Talks() {
  const carouselRef = useRef(null);

  const scroll = direction => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.querySelector(".talk-card");
    const cardWidth = firstCard?.getBoundingClientRect().width || 320;
    carousel.scrollBy({
      left: direction * (cardWidth + 16),
      behavior: "smooth"
    });
  };

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
          <div className="talk-carousel-wrapper">
            <button
              className="talk-carousel-arrow talk-carousel-arrow-left"
              type="button"
              aria-label="Show previous session"
              onClick={() => scroll(-1)}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div
              className="talk-cards-div"
              ref={carouselRef}
              aria-label="Talks and sessions"
            >
              {talkSection.talks.map(talk => (
                <TalkCard
                  key={talk.event_url || talk.title}
                  talkDetails={{
                    title: talk.title,
                    subtitle: talk.subtitle,
                    event_url: talk.event_url
                  }}
                />
              ))}
            </div>
            <button
              className="talk-carousel-arrow talk-carousel-arrow-right"
              type="button"
              aria-label="Show next session"
              onClick={() => scroll(1)}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
}
