import React from "react";
import "./projectcard.scss";
import { FaGithub, FaGlobe, FaFilePdf } from 'react-icons/fa';

const ProjectCard = ({ project }) => {                             // fetch the json format data
    const { title, imgUrl, website, repo, docs } = project;            // de-structure

    const redirectToDemo = () => {
        window.open(website, '_blank', 'noopener, noreferrer');
    }
    const redirectToGit = () => {
        window.open(repo, '_blank', 'noopener, noreferrer');
    }
    const redirectToDocs = () => {
        window.open(docs, '_blank', 'noopener, noreferrer');
    }

    const displayIcons = () => {
        return (
            <div>
                {repo ? <FaGithub onClick={redirectToGit} className="icon"/> : ''}
                {website ? <FaGlobe onClick={redirectToDemo} className="icon"/> : ''}
                {docs ? <FaFilePdf onClick={redirectToDocs} className="icon"/> : ''}
            </div>
        )
    }
    return (
        <div className="product-card-container">
            <img src={imgUrl} alt={`${title}`} onClick={redirectToDemo} />
            <div className="footer">
                <span className="title" onClick={redirectToDemo}>{title}</span>
                <span className="description">
                    {displayIcons()}
                </span>
            </div>
        </div>);
};

export default ProjectCard;