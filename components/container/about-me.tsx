import React from "react";
import ProgressBar from "../cards/progress-bar";
import TopHeadlineCard from "../cards/top-headline-card";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../icons/social";
import GithubIcon from "../icons/social/github";

export const AboutMe = () => {
  return (
    <div className="  w-full h-auto md:h-screen flex flex-col place-items-center py-12">
      <TopHeadlineCard title="About Me" />
      <div className=" my-4 md:my-8 md:flex md:space-x-10 place-items-center w-full text-gray-900 ">
        <DescriptionSegment />
        <SkillsSegment />
      </div>
    </div>
  );
};

const DescriptionSegment = () => {
  return (
    <div className="hidden md:block w-full md:w-1/2 ">
      <div className=" relative w-full md:w-full h-auto text-gray-900 overflow-hidden  ">
        <div className="text-left w-full text-2xl my-2 font-semibold">
          WHO AM I?
        </div>
        <div className="leading-10 text-xl">
          {
            "I am a web developer with over two years of experience with modern technologies like React, Next JS, Tailwind CSS, Laravel, Node JS, Express JS, Firebase, MySQL and so on. To improve user experience and your business, I put all of my enthusiasm and effort into creating fully dynamic and responsive websites."
          }
        </div>

        <div className="flex space-x-3 my-4 place-items-center">
          <div className="text-xl font-semibold">Find Me</div>
          <a
            href="https://www.linkedin.com/in/mahfuz-hasan/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-[5px] bg-black">
              <LinkedinIcon />
            </div>
          </a>

          <a
            href="https://github.com/r3dcoder"
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-[5px] bg-black">
              <GithubIcon />
            </div>
          </a>

          <a
            href="https://www.facebook.com/mahfuz.lucs/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-[5px] bg-black">
              <FacebookIcon />
            </div>
          </a>

          <a
            href="https://www.instagram.com/m4hfuz_/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-[5px] bg-black">
              <InstagramIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const SkillsSegment = () => {
  return (
    <div className=" py-2 w-full md:w-1/2 md:flex-grow flex-wrap flex flex-col space-y-4">
      <div className="text-left w-full text-2xl my-2 font-semibold">
        Expert IN
      </div>
      <div className="flex flex-col space-y-10 py-5">
        <ProgressBar name="JavaScript" progressPercentage={80} />
        <ProgressBar name="React" progressPercentage={80} />
        <ProgressBar name="Next JS" progressPercentage={85} />
        <ProgressBar name="Tailwind CSS" progressPercentage={90} />
        <ProgressBar name="CSS" progressPercentage={80} />
        <ProgressBar name="HTML" progressPercentage={90} />
        <ProgressBar name="TypeScript" progressPercentage={95} />
        <ProgressBar name="Laravel" progressPercentage={80} />
        <ProgressBar name="NodJs" progressPercentage={65} />
      </div>
    </div>
  );
};
