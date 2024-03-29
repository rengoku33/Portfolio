import React from "react";
import { experience, education } from "./utils.js";
import "./index.scss";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
    return (
        <section className="exp">
            <div className="timeline">
                <div className="timeline-work">
                    <h3 className="header">Work Experience</h3>
                    <VerticalTimeline layout={'1-column'} lineColor="var(--white-theme-main-color)">
                        {
                            experience?.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className="vert-timeline-element"
                                >
                                    <div className="title-wrapper">
                                        <h3 className="title">{item.title}</h3>
                                        <h4 className="date">{item.date}</h4>
                                        <h4 className="descn">{item.descn}</h4>
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
                                >
                                    <div className="title-wrapper">
                                        <h3 className="title">{item.title}</h3>
                                        <h4 className="date">{item.date}</h4>
                                        <h4 className="descn">{item.descn}</h4>
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