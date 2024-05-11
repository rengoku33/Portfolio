import React from "react";
import { experience, education } from "./utils.js";
import "./index.scss";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {MdWork, MdBook} from "react-icons/md"

const Experience = () => {
    return (
        <section className="exp">
            <div className="timeline">
                <div className="timeline-work">
                    <h3 className="header">Experience</h3>
                    <VerticalTimeline layout={'1-column'} lineColor="var(--white-theme-main-color)">
                        {
                            experience?.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className="vert-timeline-element"
                                    contentStyle={{
                                        background: 'none',
                                        color: 'white',
                                        border: '1px solid white' 
                                        }}
                                        icon={<MdWork />}
                                        iconStyle={{
                                            background: 'black',
                                            color: 'white',
                                        }}
                                >
                                    <div className="title-wrapper">
                                        <h3>{item.title}</h3>
                                        <h4>{item.date}</h4>
                                        <h2>{item.descn}</h2>
                                    </div>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                </div>
                <div className="timeline-study">
                    <h3 className="header">Academic</h3>
                    <VerticalTimeline layout={'1-column'} lineColor="var(--white-theme-main-color)">
                        {
                            education?.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className="vert-timeline-element"
                                    contentStyle={{
                                        background: 'none',
                                        color: 'white',
                                        border: '1px solid white' 
                                        }}
                                        icon={<MdBook />}
                                        iconStyle={{
                                            background: 'black',
                                            color: 'white',
                                        }}
                                >
                                    <div className="title-wrapper">
                                        <h3>{item.title}</h3>
                                        <h4>{item.descn}</h4>
                                    </div>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    )
}

export default Experience;