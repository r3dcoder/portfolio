import React from "react";
import { skills } from "../data/skills";

export const Skills = () => {
  return (
    <div   className="py-5 md:py-10">
      <div className=" my-4 md:my-8 text-base md:text-4xl font-semibold">
        <span className="underline underline-offset-4">MY</span> SKILLS
      </div>
      <div className="flex w-full overflow-x-auto gap-6 justify-between">
        {skills.map((skill, index: number) => (
          <div key={index}>
            <div className="w-8 h-8 md:w-20 md:h-20 mx-auto">
              <img
                src={skill.imageUrl}
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            <div className="my-2 text-xs md:text-xl font-semibold text-center">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
