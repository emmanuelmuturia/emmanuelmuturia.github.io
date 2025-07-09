import React, { useRef } from "react";
import "./ExperienceCarousel.scss";
import { workExperiences } from "../../portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function ExperienceCarousel({ isDark }) {
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = 340; // Adjust for circle size + margin
            carouselRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="experience-carousel-wrapper">
            <button
                className="carousel-arrow left"
                onClick={() => scroll("left")}
                aria-label="Scroll left"
            >
                <FontAwesomeIcon icon={faChevronLeft} color="#fff" size="2x" />
            </button>
            <div className="experience-carousel" ref={carouselRef}>
                {workExperiences.experience.map((exp, i) => (
                    <a
                        key={i}
                        className={`carousel-circle${isDark ? " dark-mode" : ""}`}
                        href={exp.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={0}
                    >
                        <div className="circle-logo-wrapper">
                            <img
                                src={exp.companylogo}
                                alt={exp.company}
                                className="carousel-logo"
                            />
                        </div>
                        <div className="carousel-company">{exp.company}</div>
                        <div className="carousel-title">{exp.role}</div>
                        <div className="carousel-date">{exp.date}</div>
                    </a>
                ))}
            </div>
            <button
                className="carousel-arrow right"
                onClick={() => scroll("right")}
                aria-label="Scroll right"
            >
                <FontAwesomeIcon icon={faChevronRight} color="#fff" size="2x" />
            </button>
        </div>
    );
}
