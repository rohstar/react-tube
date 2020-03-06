import React, { Component } from "react";
import "./css/videoPlayer.css";

const VideoPlayer = props => {
  if (!props.video) {
    return (
        <h3 className="header">Search for a video to get started...</h3>
    );
  }

  const video = props.video;
  const videoUrl = "http://www.youtube.com/embed/" + video.id.videoId;

  return (
    <div className="ui segement fliud">
      <div>
        <iframe
          title="video-player"
          className="video-player"
          src={videoUrl}
        ></iframe>
      </div>
      <div className="content">
        <div className="header">
          <h2 className="ui header">{video.snippet.title}</h2>
        </div>
        <div className="meta">
          <span className="date">
            {new Date(video.snippet.publishedAt).toDateString()}
          </span>
        </div>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoPlayer;
