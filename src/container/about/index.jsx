import React from "react";
import PageHeader from "../../components/pageHeaderContent";
import './about.scss';

const About = () => {
    return (
        <section className="about">
            <PageHeader headerText="Who am I?" />
            <p style={{ fontSize: '2.1rem', textAlign: 'center' }}>
                Ever heard of the song by Ryan Gosling? which goes something like<br/>
                I'm just Kiran, anywhere else I'd be a ten<br/>
                Is it my destiny to live and die a life of Vim superiority?<br/>
                
            </p><br /><br /><br />
            <p style={{ fontSize: '2.1rem' }}>
                Alright, jokes aside... I am just a Software Engineer who genuinely like to code and work with various tech stacks and domains.
            </p>
            <p style={{ fontSize: '2.1rem' }}>
                Be it frontend, backend, code optimizaions, debugging, networking, IOT, AI/ML or whatever you name it. If it catches my eye I will conquor it.
            </p>
            <p style={{ fontSize: '2.1rem' }}>
                Why? The reason simple and obvious, so that I could learn new languages, frameworks, practices and spark my motivation to build something interesting.
            </p><br /><br /><br />

            <p style={{ fontSize: '2.1rem' }}>
                well, you know the rest (or atleast enough)
            </p>
            <p style={{ fontSize: '2.1rem' }}>
                set your heart ablaze and push beyond your limits -Kyojuro Rengoku
            </p><br />
        </section>
    )
}

export default About;