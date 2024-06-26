import React from "react";
import PageHeader from "../../components/pageHeaderContent";
import './about.scss';

const About = () => {
    return (
        <section className="about">
            <PageHeader headerText="About Me" />
            <p style={{ fontSize: '2.1rem' }}>
                I am Kiran Vignesh (23, M) and I genuinely like to code and work on projects with a tech stack completely different from the one I use at work
            </p>
            <p style={{ fontSize: '2.1rem' }}>
                Why? The reason is as simple as it seems, so that I could learn new languages, frameworks, practices and rekindle my motivation to build something in a way that I want to.
            </p><br /><br /><br /><br /><br />

            <p style={{ fontSize: '2.1rem' }}>
                (Academic) - My first ever programming language was C and it was during high school, I was probably 16 or 17 back then and I was neither good nor bad, I survived my CS101
                classes and scored barely enough to pass my exams. Fast forward 2-3 years and now I am in college majoring in CS,(ironic, isn't it?) at this point I started investing time and effort to learn
                JAVA and other frameworks associated with it, It was a stupendous learning curve for me. I had fun building basic projects and was in the top 3 in my class.
                I obliterated 3hr exams in just an hour and scored well. It was my first breakthrough in CS and I was glowing with academic knowledge
                throughout my course duration.
            </p><br />
            <p style={{ fontSize: '2.1rem' }}>
                (work) Intellect - It's 2022 and I just got my first job as a trainee at Intellect, the salary was not bad for starters, was introduced to a professional environment, worked with a
                bunch of seniors who were just incredible mentors to me, learnt that school smart is absolutely not enough at work, and it was a perfect transition from
                school to work environment. I ended up being stuck to a particular framework, set of tools and JAVA. That's pretty much all the tech stack needed for my work
                and I was a frameworker rather than an engineer. I wasn't aware of this until the day I broke the matrix *and my leg*.
            </p><br />
            <p style={{ fontSize: '2.1rem' }}>
                Tragedy into Triumph - So, it was just another day at work and while I was on my way home, I had a motorcycle accident.
                It wasnt anything serious or life threatening but I shattered my femur, I was on WFH for a couple of days and on medical leave for a while.
                Eventually, I ended up quitting my job inorder to take a break and focus on recovery.
                Now I had enormous amount of time to explore new frameworks, concepts, languages. I found the motivation and passion
                that I once lost by simply building projects, exploring new languages and frameworks. Somewhere down the line I learnt MERN stack and built a couple of projects.
                After a while, I finally managed to land an internship as a full stack developer.
            </p><br />
            <p style={{ fontSize: '2.1rem' }}>
                (work) Unruffled Feathers - An average software engineer would say that working at a start-up will be a nightmare since you will be the frontend, backend, IT, testing, devops etc,.
                but I loved every part of it.
                I felt unshackled in a lot of ways, I didnt have to raise a ticket to IT for installing software, didnt have to push my code to the testing team, didnt have to wait on a sea of devs
                for their response/contribution/approval, and much more. The best part is, my job
                is WFH. so, my work-life balance has never been better and I still have time to work on my side projects every now and then. but it all comes with a cost,
                the pay is not good and there was no opportunity to transition into a non-intern role.
            </p><br />
            <p style={{ fontSize: '2.1rem' }}>
                Conclusion - This is my life so far(June 2024), I enjoy building projects and working in challenging environments, and I wish to keep learning and adapting rather than being stuck
                with a particular tech stack or framework. My objective is to become a software engineer at FAANG and work on revolutionary products that has a significant
                impact on people's daily lives. well... Thats pretty much it, hope this was enough to understand my frame of mind and craft your own opinion about me.
            </p><br />
            <p style={{ fontSize: '2.1rem' }}>
                set your heart ablaze and push yourself beyond your limits -Kyojuro Rengoku
            </p><br />
        </section>
    )
}

export default About;