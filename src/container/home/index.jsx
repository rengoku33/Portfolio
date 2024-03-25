import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
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
                    Hi, I'm Kiran Vignesh,
                    <br />
                    Welcome to my domain
                </h1>
            </div>
            <Animate
                play
                duration={2.5}
                delay={2}
                start={{
                    opacity: 0
                }}
                end={{
                    opacity: 1
                }}
            >
                <div className="home-contact-button">
                    <button onClick={toContact}>Talk to me</button>
                </div>
            </Animate>
        </section>
    )
}

export default Home;