import React from "react";
import cssModule from "../pages/home/sections/projects/Projects.module.css";

const ProjectCard = ({ src, link, title, description }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img className={cssModule.module} src={src} alt={`${title} logo`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
};

export default ProjectCard;
