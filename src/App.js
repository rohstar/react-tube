import React, { Component } from "react";
import SearchBar from "./Components/SearchBar";
import RecommendedList from "./Components/RecommendedList";
import VideoPlayer from "./Components/VideoPlayer";
import youtube from "./api/youtube";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onSearch = async term => {
    const result = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    if (result.data.items.length > 0) {
      const selectedVideo = result.data.items.pop()
      this.setState({
        videos: result.data.items,
        selectedVideo: selectedVideo
      });
    }
  };

  selectVideo = video => {

    this.setState({selectedVideo: video})

  }

  render() {
    return (
      <div className="container ui" style={{ paddingTop: "10px" }}>
        <SearchBar onSearch={this.onSearch} />
        <div className="ui grid">
          <div class="twelve wide column">
            <VideoPlayer video={this.state.selectedVideo}/>
          </div>
          <div class="four wide column">
            <RecommendedList onSelectVideo={this.selectVideo} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
