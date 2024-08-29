import React from "react";
import cssModule from "./Projects.module.css";

// Components
import ProjectCard from "../../../../components/ProjectCard";

//Project Images
import viberr from "../../../../assets/imported-images/viberr.png";

const projects = [
  {
    src: viberr,
    link: "https://github.com/LeonardoArvizu/notes",
    title: "Notes",
    description: "Creador de notas",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={cssModule.container}>
      <h1 className={cssModule.sectionTitle}>Proyectos</h1>
      <div className={cssModule.projectsContainer}>
        {projects.map((project) => {
          return (
            <ProjectCard
              src={project.src}
              link={project.link}
              title={project.title}
              description={project.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
