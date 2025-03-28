import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import audio from './Good-Computer.mp3'
import { SiDiscogs } from "react-icons/si";
import './song.scss'

const Song = () => {
    return (
            <div className="audio-wrapper">
                <div className="audio-box">
                    <div className="disc-cover">
                        <SiDiscogs size={50} />
                    </div>

                    <ReactAudioPlayer
                        src={audio}
                        autoPlay={true}
                        controls
                        loop
                        volume={0.03}
                    />
                </div>
            </div>
    )
}

export default Song;