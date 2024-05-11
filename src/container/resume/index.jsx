import React from "react";
import "./index.scss";
import { Animate } from "react-simple-animate";

const Resume = () => {
    return (
        <div className="outer-class">
            <div className="outer-text-wrapper">
                <h1 className="h1-wrapper">Click the button below to download a PDF version of my resume</h1><br />
            </div>
            <div className="button-container">
                <Animate
                    play
                    duration={3}
                    delay={0.6}
                    start={{
                        opacity: 0
                    }}
                    end={{
                        opacity: 1
                    }}
                >
                    <button>
                        <a href="./resume.pdf" download="resume.pdf">
                            Download Resume
                        </a>
                    </button>
                </Animate>
            </div>

        </div>
    )
}

export default Resume;