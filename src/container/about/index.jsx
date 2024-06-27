import React from "react";
import PageHeader from "../../components/pageHeaderContent";
import './about.scss';

const About = () => {
    return (
        <section className="about">
            <PageHeader headerText="Who am I?" />
            <p style={{ fontSize: '2.1rem' }}>
                I know who I am. I'm the dude playin' the dude, disguised as another dude!  -RDJ
            </p><br />
            <p style={{ fontSize: '2.1rem' }}>
                Alright, jokes aside... I am Kiran Vignesh (23, M) and I genuinely like to code and work on projects with a tech stack different from the one I use at work
            </p>
            <p style={{ fontSize: '2.1rem' }}>
                Why? The reason is as simple as it seems, so that I could learn new languages, frameworks, practices and rekindle my motivation to build something I want to.
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