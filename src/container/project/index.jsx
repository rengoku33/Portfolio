import React from "react";
import "./index.scss";
import { projects } from "./projects";
import ProjectCard from "./projectcard";
import PageHeader from "../../components/pageHeaderContent";

const Project = () => {
    return (
        <div className="outerClass">

            <PageHeader headerText="Domain Expansion: Muryōkūsho" />
            <div className="preview">
                {
                    projects.map((product) => ( 
                    <ProjectCard key={projects.id} project={product} />
                    ))
                }
            </div>
            
        </div>
    )
}

export default Project;