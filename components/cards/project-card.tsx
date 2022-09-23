import React from 'react'
import { Project } from '../types/menu'

interface Props{
    project:Project
}
const ProjectCard = ({project}:Props) => {
  return (
    <div className="p-2 md:p-4 rounded-md shadow-2xl  hover:scale-110 hover:shadow-2xl duration-200 w-full"  >
            <a href={project.link} target="_blank"  rel="noreferrer" className="relative">
              <img className="w-full h-[270px]" src={project.imageUrl} alt="" />
             <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-2 rounded-md">
             <div className="my- text-white text-sm md:text-xl ">{project.name}</div>
              <div className="w-full flex space-x-2 flex-wrap text-xs md:text-sm text-white">
                {project.languages?.map((lang:string, ind: number) => (
                  <div key={ind}>{lang}</div>
                ))}
              </div>
             </div>
            </a>
          </div>
  )
}

export default ProjectCard