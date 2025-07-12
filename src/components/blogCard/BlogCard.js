import React from "react";
import "./BlogCard.scss";

export default function BlogCard({ blog }) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div onClick={() => openUrlInNewTab(blog.url, blog.title)}>
      <div className="blog-container dark-mode">
        <a
          className="dark-mode blog-card blog-card-shadow"
          href="#blog"
        >
          <h3 className="small-dark blog-title">
            {blog.title}
          </h3>
          <p className="small-dark small">
            {blog.description}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
