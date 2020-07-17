import React from "react"

const Video = ({video}) => {
  return (
    <div>
      <h2>{video.heading}</h2>
      <div className="video-embed embed-responsive embed-responsive-16by9">
        <figure dangerouslySetInnerHTML={{ __html: video.embed }} />
      </div>
      <p>{video.description}</p>
    </div>
  )
}

export default Video
