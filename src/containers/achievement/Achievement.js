import React from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import Button from "../../components/button/Button";

export default function Achievement() {
  if (!achievementSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1 className="heading achievement-heading">
              {achievementSection.title}
            </h1>
            <p className="subTitle achievement-subtitle">
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    url: card.url
                  }}
                />
              );
            })}
          </div>
          <div
            style={{display: "flex", justifyContent: "center", marginTop: 24}}
          >
            <Button
              text="More Credentials"
              href="https://www.credly.com/users/emmanuelmuturia"
              newTab={true}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
