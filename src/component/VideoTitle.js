import React from 'react'

const VideoTitle = ({title ,overview}) => {
  return (
    <div>
        <h1>{title}</h1>
        <h1>{overview}</h1>
        <div>
            <div>
              <button>Play</button>
            </div>
            <div>
              <button>More Info</button>
            </div>
        </div>
    </div>
  )
}

export default VideoTitle