import React from "react";
import "./projectcard.scss";

const ProjectCard= ({project}) =>{                             // fetch the json format data
    const {title, descn, imgUrl, website} = project;                     // de-structure
    
    const redirectToDemo = () => {
        window.open(website, '_blank', 'noopener, noreferrer');
    }

    return (
    <div className="product-card-container">
     <img src={imgUrl} alt={`${title}`} onClick={redirectToDemo}/>
     <div className="footer">
        <span className="title" onClick={redirectToDemo}>{title}</span>
        <span className="description">{descn}</span>
        <span className="links"></span>
     </div>
    </div>);
};

export default ProjectCard;