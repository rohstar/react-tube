import React, { Component } from "react";
import truncateString from '../helper'


export default class RecommendedItem extends Component {
  render() {

    const vid = this.props.video

    return (

      <div className="card olive" onClick={() => this.props.onSelectVideo(vid)}>
        <div className="image">
          <img src={vid.snippet.thumbnails.default.url} />
        </div>
        <div className="content">
          <div href="/" className="header">{truncateString(vid.snippet.title, 50)}</div>
          <div className="meta">
            <span className="date">{vid.snippet.channelTitle}</span>
          </div>
          <div className="description">
            {truncateString(vid.snippet.description, 50)}
          </div>
        </div>
      </div>
    );
  }
}
