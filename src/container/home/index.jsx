import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
// import ReactAudioPlayer from 'react-audio-player';
// import audio from './Good-Computer.mp3'
// import { SiDiscogs } from "react-icons/si";
import "./index.scss";

const Home = () => {
    const navigate = useNavigate();
    const toContact = () => {
        navigate('/contact');
    }

    return (
        <section id="home" className="home">
            <div className="home-text-wrapper">
                <h1 className="h1-wrapper">
                    Why does anyone wish upon a star?
                    <br />
                    Superstitions? Possibly.

                </h1>
            </div>
            <Animate
                play
                duration={3}
                start={{
                    opacity: 0
                }}
                end={{
                    opacity: 1
                }}
            >
                <div className="home-contact-button">
                    <button onClick={toContact}>Contact Me</button>
                </div>
            </Animate>
            {/* <div className="audio-wrapper">
                <div className="audio-box">
                    <div className="disc-cover">
                        <SiDiscogs size={50} />
                    </div>

                    <ReactAudioPlayer
                        src={audio}
                        autoPlay={true}
                        controls
                        loop
                        volume={0.02}
                    />
                </div>
            </div> */}
        </section >
    )
}

export default Home;