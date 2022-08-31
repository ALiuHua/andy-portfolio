import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ProjectCardWrapper,
  BgWrapper,
  ProjectCardHeader,
  ProjectCardDescription,
  ProjectCardTag,
  LinkBar,
} from "./ProjectCardStyles";
import { ContactButton, GithubIcon, DemoIcon } from "../ui/Icons";
const ProjectCard = ({ project }) => {
  return (
    <ProjectCardWrapper>
      <BgWrapper>
        <Image
          src="/images/netflex/netflex-bg.jpg"
          alt="netflix screen snap background"
          layout="fill"
          objectFit="cover"
        />
      </BgWrapper>

      <ProjectCardHeader>
        <Link href="/project/netflex">
          <a>Netflex</a>
        </Link>
      </ProjectCardHeader>
      <ProjectCardDescription>
        This is a project i made to repoduces the experience of browsing real
        Netflix. You can log in to your own account and set your unique profile,
        then watch various kinds of TV shows or movies. You can also search for
        TV shows, read about their cast information, manage your own favourite
        list and much more!
      </ProjectCardDescription>
      <ProjectCardTag>
        <span>React</span>
        <span>Next.js</span>
        <span>Styled-component</span>
        <span>MongoDB</span>
      </ProjectCardTag>
      <LinkBar>
        <ContactButton hrefStr="https://github.com/ALiuHua">
          <span>
            <GithubIcon />
          </span>
        </ContactButton>
        <ContactButton hrefStr="https://github.com/ALiuHua">
          <span>
            <DemoIcon />
          </span>
        </ContactButton>
      </LinkBar>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
