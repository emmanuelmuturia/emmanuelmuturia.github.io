import React, { useEffect, useState } from "react";
import "./YoutubeCarousel.scss";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_ID = "UCg2Ponw8OIvcSXKwR6F5mMw";
const MAX_RESULTS = 3;

export default function YoutubeCarousel() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchVideos() {
            setLoading(true);
            try {
                const res = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
                );
                const data = await res.json();
                const videoItems = data.items.filter(item => item.id.kind === "youtube#video");
                setVideos(videoItems);
            } catch (e) {
                setVideos([]);
            }
            setLoading(false);
        }
        fetchVideos();
    }, []);

    if (loading) return <div className="youtube-carousel-loading">Loading videos...</div>;
    if (!videos.length) return <div className="youtube-carousel-error">No videos found.</div>;

    return (
        <div className="youtube-carousel-section">
            <h1 className="youtube-carousel-title">YouTube</h1>
            <div className="youtube-carousel">
                {videos.map((video, idx) => (
                    <div className="youtube-carousel-item" key={video.id.videoId}>
                        <iframe
                            width="100%"
                            height="220"
                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                            title={video.snippet.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <div className="youtube-video-title">{video.snippet.title}</div>
                    </div>
                ))}
            </div>
            <a
                className="youtube-more-btn"
                href="https://www.youtube.com/@emmanuelmuturia"
                target="_blank"
                rel="noopener noreferrer"
            >
                More Videos
            </a>
        </div>
    );
}
