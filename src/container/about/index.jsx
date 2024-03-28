import React from "react";
import PageHeader from "../../components/pageHeaderContent";
import './index.scss';

const About = () => {
    return(
        <section className="about">
            <PageHeader headerText="About Me"/>
            <p>My objective in life is to become a software engineer who works on innovative and revolutionary products in a challenging
             environment among talented individuals, so that I can prove and improve my programming and technical skills.
            </p><br /><p>
            I worked as a systems trainee for the role of software developer at Intellect during my senior year. 
            My responsibility was to implement client-specific changes to the application such as minor adjustments in UI, 
            altering a query to manipulate data present in the database, and designing logic based on client's request. 
            At this particular point of my life I experienced a massive breakthrough in understanding the SDLC(software development lifecycle).
            </p><br /><p>
            After my graduation, I was inspired to learn various programming concepts and emerging technologies. so I spent time learning 
            front-end frameworks, data structures and algorithms, backend concepts etc, then implemented all of these concepts by creating 
            and publishing my first full-stack E-Commerce website for a retail clothing shop. I was over the moon, intrigued by various concepts 
            of web development. I realised there is much more than just coding, such as scalability, site-optimization, system design patterns, 
            web hosting, networking concepts etc. I figured the best way to conquor them all is to learn and implement them, hence I became a 
            freelance developer.
            </p>
        </section>
    )
}

export default About;