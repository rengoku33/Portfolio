import React from "react";
import PageHeader from "../../components/pageHeaderContent";
import './index.scss';

const Contact = () => {
    return(
        <section className="contact">
            <PageHeader headerText="Let's Connect"/>
                <p>Email: rajkiranvignesh369@gmail.com</p><br />
                <p>Mobile: +91 6380 989 583</p><br />
                <p>LinkedIn: <a href="https://www.linkedin.com/in/kiran-vignesh-61339a225/">Click Me</a> </p>
        </section>
    )
}

export default Contact;