import React from "react";
import PageHeader from "../../components/pageHeaderContent";
import './index.scss';

const About = () => {
    return (
        <section className="about">
            <PageHeader headerText="About Me" />
            <p>
                My objective in life is to become a software engineer who works on innovative and revolutionary products in a challenging
                environment among talented individuals, so that I can prove and improve my programming and technical skills.
            </p><br />
            <p>
                I worked as a systems trainee for the role of software engineer at Intellect during my senior year.
                My responsibility was to implement client-specific changes to the application such as minor adjustments in UI,
                altering a query to manipulate data present in the database, and designing logic based on client's request.
                At this particular point of my life I experienced a massive breakthrough in understanding the SDLC(software development lifecycle).
            </p><br />
            <p>
                After Intellect, I switched my tech stack to MERN and started working as a software engineer at The Tann Mann Foundation.
                My primary role is full stack MERN engineer but due to project requirements,
                I spend most of my time working as a Frontend engineer with react(Javascript) and tailwind CSS.
                I created and pushed frontend components to production, edited existing components, connected frontend components with DB,
                occasionally worked on Backend and utilized other tools such as VITE, cloud services(Azure), Version control(Git) and much more...
            </p><br />
            <p>
                I firmly believe that software engineering is absolutely more than just programming, there are lots of other concepts that revolve
                around a application such as scalability, availabiliy, security, performance optimization, and user experience design. 
                Each of these concepts plays a crucial role in the development of robust, efficient, and user-friendly software systems.
                I consider a person with a grasp of these concepts alongside programming skills as a true software engineer.</p>
            <p>Note: <br />
            ✧ Scalability ensures that the application can handle increasing loads without sacrificing performance<br />
            ✧ Availability ensures that the application is accessible to users whenever they need it<br />
            ✧ Security safeguards sensitive data from unauthorized access or malicious attacks<br />
            ✧ Performance optimization fine-tunes the efficiency of the application, making it faster and more responsive<br />
            ✧ User experience design focuses on creating interfaces that are intuitive, visually appealing, and easy to navigate</p>

        </section>
    )
}

export default About;