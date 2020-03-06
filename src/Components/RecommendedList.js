import React, { Component } from 'react'
import RecommendedItem from './RecommendedItem'

class RecommendedList extends Component {

  render() {

    const videos = this.props.videos.map(vid => {
      return <RecommendedItem key={vid.etag} onSelectVideo={this.props.onSelectVideo} video={vid} />
    })

    return (
      <div class="ui cards">
        {videos}
      </div>
    );
  }
}

export default RecommendedList

