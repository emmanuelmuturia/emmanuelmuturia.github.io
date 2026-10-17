import React, { useEffect, useState } from "react";
import "./Videos.scss";
import { videoSection } from "../../portfolio";
import Button from "../../components/button/Button";

export default function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/videos.json")
      .then(response => (response.ok ? response.json() : []))
      .then(setVideos)
      .catch(() => setVideos([]));
  }, []);

  if (!videoSection.display) {
    return null;
  }

  return (
    <div className="dark-mode main" id="videos">
      <div className="videos-main-div">
        <h1 className="dark-mode videos-heading">Videos</h1>
        <div className="videos-grid">
          {videos.slice(0, 3).map(video => (
            <div className="video-item" key={video.id}>
              <a
                className="video-card"
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open video: ${video.title}`}
              >
                <img
                  src={video.thumbnail}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <h2 className="video-title">{video.title}</h2>
              <Button
                text="Watch Video"
                href={video.url}
                newTab={true}
                className="video-watch-button"
              />
            </div>
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
