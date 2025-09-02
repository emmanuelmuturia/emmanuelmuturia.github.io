import React, { useEffect, useState, useRef } from "react";
import "./YoutubeCarousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const MAX_RESULTS = 3;

export default function YoutubeCarousel() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const carouselRef = useRef(null);

    useEffect(() => {
        async function fetchVideos() {
            setLoading(true);
            try {
                // Use env variables for API key and channel ID
                const apiKey = process.env.YOUTUBE_API_KEY;
                const channelId = process.env.YOUTUBE_CHANNEL_ID;
                const res = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
                );
                const data = await res.json();
                const videoItems = (data.items || []).filter(
                    item => item.id.kind === "youtube#video"
                );
                setVideos(videoItems);
            } catch (e) {
                setVideos([]);
            }
            setLoading(false);
        }
        fetchVideos();
    }, []);

    const scroll = direction => {
        if (carouselRef.current) {
            const scrollAmount = 440; // Adjust for video card size + margin
            carouselRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    if (loading)
        return <div className="youtube-carousel-loading">Loading videos...</div>;
    if (!videos.length)
        return <div className="youtube-carousel-error">No videos found.</div>;

    return (
        <div className="youtube-carousel-section" id="youtube">
            <h1 className="youtube-carousel-title">YouTube</h1>
            <div className="youtube-carousel-wrapper">
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
                <div className="youtube-carousel" ref={carouselRef}>
                    {videos.map((video, idx) => (
                        <div className="youtube-carousel-item" key={video.id.videoId}>
                            <div className="youtube-video-frame-wrapper">
                                <iframe
                                    width="100%"
                                    height="320"
                                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                    title={video.snippet.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="youtube-video-title">{video.snippet.title}</div>
                        </div>
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
            <div className="youtube-btn-center">
                <a
                    className="youtube-more-btn"
                    href="https://www.youtube.com/@emmanuelmuturia"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    More Videos
                </a>
            </div>
        </div>
    );
}
