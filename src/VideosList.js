import React, { Component } from 'react';
import { Link } from 'react-router'

class VideosList extends Component {
  render() {
    if (!this.props.videos) return (<div>No content available</div>);
    return (
      <div className="videos-list">
        <ul>
          {this.props.videos.map(function(video, index){
            return (
              <li key = {index}>
              <Link to = {"/movie/" + video.id}>
              <img src={video.img}  alt={video.title}/>
              <p>{video.title}</p>
            </Link>
            </li>
            ) 
          })}
        </ul>
      </div>
    );
  }
}

export default VideosList;
