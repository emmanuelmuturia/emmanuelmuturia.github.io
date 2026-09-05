import React, { useEffect, useState } from "react";
import "./Skills.scss";
import { skillsSection } from "../../portfolio";
import Button from "../../components/button/Button";

export default function Skills() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/videos.json")
      .then(response => (response.ok ? response.json() : []))
      .then(setVideos)
      .catch(() => setVideos([]));
  }, []);

  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className="dark-mode main" id="videos">
      <div className="videos-main-div">
        <h1 className="dark-mode skills-heading">Videos</h1>
        <div className="videos-grid">
          {videos.slice(0, 3).map(video => (
            <a
              className="video-card"
              href={video.url}
              key={video.id}
              target="_blank"
              rel="noreferrer"
            >
              <img src={video.thumbnail} alt="" />
              <h2>{video.title}</h2>
              <span>Watch video &#8594;</span>
            </a>
          ))}
        </div>
        <Button
          text="More Videos"
          href="https://www.youtube.com/@emmanuelmuturia"
          newTab={true}
          className="project-button"
        />
      </div>
    </div>
  );
}
