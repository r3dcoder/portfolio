import React from "react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../icons/social";

export const AboutMe = () => {
    return (
        <div   className="  w-full h-auto md:h-screen flex flex-col place-items-center py-12">
            <div className="w-full text-base md:text-4xl font-bold text-center">
                About me
                 <div className="flex flex-col place-items-center space-y-1">
                    <div className="w-40 h-[1px] bg-gray-500"></div>
                    <div className="w-60 h-[1px] bg-gray-600"></div>
                    <div className="w-40 h-[1px] bg-gray-500"></div>
                 </div>
            </div>

            <div className=" my-4 md:my-8 md:flex md:space-x-10 place-items-center w-full ">
                <div className="hidden md:block w-full md:w-1/2 ">
                    <div className=" relative w-full md:w-full h-auto md:h-[420px] overflow-hidden p-4 bg-gray-100  rounded-md shadow-md">
                        <img
                            src="/my-image.jpeg"
                            className="w-full h-full object-cover  rounded-md"
                            alt=""
                        />
                        <div className=" absolute top-4 left-4  bg-transparent ">
                            <div className="flex flex-col space-y-2">
                                <div className="p-[5px] bg-black">
                                    <FacebookIcon />
                                </div>
                                <div className="p-[5px] bg-black"><InstagramIcon /></div>
                                <div className="p-[5px] bg-black"><LinkedinIcon /></div>



                            </div>
                        </div>
                    </div>
                </div>
                <div className=" py-2 w-full md:w-1/3 md:flex-grow flex-wrap flex flex-col space-y-4">
                    <div className="text-base md:text-4xl font-bold"> Im Mahfuz</div>
                    <div className="text-sm md:text-base font-semibold text-gray-500 my-2 ">
                        A FRONT END DEVELOPER BASED IN UK
                    </div>
                    <div className="text-xs md:text-base max-w-[100vh] break-words">
                    {"I am a web developer with over two years of experience with modern technologies like React, Next JS, Tailwind CSS, Laravel, Node JS, Express JS, Firebase, MySQL and so on. To improve user experience and your business, I put all of my enthusiasm and effort into creating fully dynamic and responsive websites."}
                     </div>
                    <div className=" md:flex md:space-x-16 w-full  mt-4 md:mt-8">
                        <div className="flex flex-col space-y-3">
                            <div className="flex space-x-3 text-sm">
                                <div>Email</div>
                                <div className="text-gray-600">|</div>
                                <div className="text-gray-600">sdmahfuz@gmail.com</div>
                            </div>
                            <div className="flex space-x-3 text-sm">
                                <div>Studying</div>
                                <div className="text-gray-600">|</div>
                                <div className="text-gray-600">MSC Computing</div>
                            </div>

                        </div>
                        <div className="flex flex-col space-y-3">

                            <div className="flex space-x-3 text-sm">
                                <div>Residence</div>
                                <div className="text-gray-600">|</div>
                                <div className="text-gray-600">United Kingdom</div>
                            </div>
                            <div className="flex space-x-3 text-sm">
                                <div>Address</div>
                                <div className="text-gray-600">|</div>
                                <div className="text-gray-600">Northampton, England</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
