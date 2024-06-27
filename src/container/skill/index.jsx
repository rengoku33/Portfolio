import React from "react";
import "./index.scss";
import PageHeader from "../../components/pageHeaderContent";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { SkillsData } from "./utils.js";

const Skill = () => {
    return (
        <section className="skills">
            <PageHeader headerText="Current Arsenal" />
            <div className="skills-wrapper">
                {
                    SkillsData.map((item, i) => (
                        <div key={i} className="inner-container">
                            <Animate
                                play
                                duration={3.3}
                                start={{
                                    opacity: 0
                                }}
                                end={{
                                    opacity: 1
                                }}
                            >
                                <h3 className="title">{item.label}</h3>
                                <div>
                                    {item.data.map((skillItem) => (
                                        <AnimateKeyframes
                                            play
                                            duration={5}
                                            keyframes={["opacity:1, opacity:0"]}
                                            iterationCount="1"
                                        >
                                            <div className="item-wrapper">
                                                <p style={{ fontSize: '1.8rem' }}>{skillItem.skillName}</p>
                                            </div>
                                        </AnimateKeyframes>
                                    ))}
                                </div>
                            </Animate>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Skill;