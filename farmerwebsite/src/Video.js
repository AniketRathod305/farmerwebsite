import React from 'react'
import ReactPlayer from 'react-player'
import './Video.css'

function Video({link}) {
    return (
        <div id='layout'>
            <ReactPlayer  controls width='400px' height='250px'  url={link}/>
        </div>
    )
}

export default Video
