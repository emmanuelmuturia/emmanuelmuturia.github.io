import React, { useRef } from "react";
import "../workExperience/ExperienceCarousel.scss";
import { bigProjects } from "../../portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function TechCommunitiesCarousel() {
    const carouselRef = useRef(null);

    const scroll = direction => {
        if (carouselRef.current) {
            const scrollAmount = 340; // Adjust for circle size + margin
            carouselRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="experience-carousel-wrapper tech-communities-carousel">
            <button
                className="carousel-arrow left"
                onClick={() => scroll("left")}
                aria-label="Scroll left"
            >
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    color="#fff"
                    style={{ fontSize: "2.2rem" }}
                />
            </button>
            <div className="experience-carousel" ref={carouselRef}>
                {bigProjects.projects.map((proj, i) => (
                    <a
                        key={i}
                        className="carousel-circle dark-mode"
                        href={
                            proj.footerLink && proj.footerLink[0]
                                ? proj.footerLink[0].url
                                : "#"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={0}
                        style={{
                            marginRight: i === bigProjects.projects.length - 1 ? 0 : undefined
                        }}
                    >
                        <div className="circle-logo-wrapper">
                            <img
                                src={proj.image}
                                alt={proj.projectName}
                                className="carousel-logo"
                            />
                        </div>
                        <div className="carousel-company">{proj.projectName}</div>
                        <div className="carousel-title">{proj.projectDesc}</div>
                        {proj.date && <div className="carousel-date">{proj.date}</div>}
                    </a>
                ))}
            </div>
            <button
                className="carousel-arrow right"
                onClick={() => scroll("right")}
                aria-label="Scroll right"
            >
                <FontAwesomeIcon
                    icon={faChevronRight}
                    color="#fff"
                    style={{ fontSize: "2.2rem" }}
                />
            </button>
        </div>
    );
}
