import React from "react";
import projects from '../data/projects'
import ProjectItem from "./ProjectItem"

const Projects = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map(project => (
                    <ProjectItem
                        title={project.title}
                        projectType={project.projectType}
                        description={project.description}
                        imgUrl={project.imgUrl}
                        codeLink={project.codeLink}
                        siteLink={project.siteLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;