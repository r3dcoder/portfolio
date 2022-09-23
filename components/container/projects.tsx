import Link from "next/link";
import React from "react";
import ProjectCard from "../cards/project-card";
import TopHeadlineCard from "../cards/top-headline-card";
import { projects } from "../data/projects";

export const Projects = () => {
  return (
    <div   className="py-5 md:py-16">
      {/* <div className="text-base md:text-4xl font-semibold py-4 md:py-8 ">
        <span className="underline underline-offset-4">Most</span> Recent
        AWESOME WORKS
      </div> */}

      <TopHeadlineCard title="Most Recent Works"/>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pt-10">
        {projects.map((project, index: number) => (
          <ProjectCard key={index} project={project}/>
        ))}
      </div>
    </div>
  );
};
