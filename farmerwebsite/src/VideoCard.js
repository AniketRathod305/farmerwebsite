import React from 'react'
import ReactPlayer from 'react-player'
import './VideoCard.css'

function VideoCard({videoitem}) {
    return (
        <div className="video_box">
            <ReactPlayer className="thumbnail" controls width="29vw" height="18vw" url={`https://youtu.be/${videoitem.id.videoId}`} />
            <h4>{videoitem.snippet.title}</h4>
        </div>
    )
}

export default VideoCard
