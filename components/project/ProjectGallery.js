import React from "react";
import { ProjectSection, SectionContent } from "./ProjectStyles";
import ProjectCard from "./ProjectCard";
const ProjectGallery = () => {
  return (
    <ProjectSection>
      <h1>Project I've Build</h1>
      <SectionContent>
        <ProjectCard />
      </SectionContent>
    </ProjectSection>
  );
};

export default ProjectGallery;
