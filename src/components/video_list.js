import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => { /* like in pug when you have the array foreach */
    return (
    <VideoListItem
      onVideoSelect={props.onVideoClick}
      key={video.etag}
    onVideoSelect={props.onVideoSelect}

    key={video.etag}
    video={video} /> //passed in the video as property video. alwys add a key
    )
  });

  return (
    <ul className="col-md-4 list-group">
    {videoItems}

    </ul>
  );
};

export default VideoList;
