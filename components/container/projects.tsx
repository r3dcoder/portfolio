import Link from "next/link";
import React from "react";
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
          <div className="p-2 md:p-4 rounded-md shadow-2xl  hover:scale-110 hover:shadow-2xl duration-200" key={index}>
            <a href={project.link} target="_blank"  rel="noreferrer" className="relative">
              <img className="w-full h-[270px]" src={project.imageUrl} alt="" />
             <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-2 rounded-md">
             <div className="my- text-white text-sm md:text-xl ">{project.name}</div>
              <div className="flex space-x-2 flex-wrap text-xs md:text-sm text-white">
                {project.languages?.map((lang, ind: number) => (
                  <div key={ind}>{lang}</div>
                ))}
              </div>
             </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
