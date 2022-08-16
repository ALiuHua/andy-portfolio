import React from "react";
import Link from "next/link";
import {
  ProjectSection,
  ProjectCardWrapper,
  ProjectCardHeader,
  ProjectCardDescription,
  ProjectCardTag,
} from "./ProjectCardStyles";
const ProjectCard = ({ project }) => {
  return (
    <ProjectCardWrapper>
      <ProjectCardHeader>
        <Link href="/project/netflex">
          <a>Netflex</a>
        </Link>
      </ProjectCardHeader>
      <ProjectCardDescription>
        This is a project i made that got 3.6k upvotes on Reddit. It repoduces
        the experience of browsing real Netflix. You can log in to yout own
        account and set your unique profile, then watch various kinds of TV
        shows or movies. You can also search for TV shows, read about their cast
        information, and much more!
      </ProjectCardDescription>
      <ProjectCardTag>
        <span>React</span>
        <span>Next.js</span>
        <span>Styled-component</span>
      </ProjectCardTag>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
