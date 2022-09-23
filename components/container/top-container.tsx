import React from 'react'
import Mailto from './mail-to'

export const TopContainer = () => {
  return (
    <div    className="h-auto w-full relative overflow-hidden z-0   bg-gray-300 mx-auto shadow-lg  rounded-t-md">
        <img
          src="/main-cover.jpg"
          className="w-full h-screen object-cover"
          alt=""
        />
        <div className=" py-6 md:flex md:space-x-5 place-items-center absolute inset-0 top-0 bg-black bg-opacity-60">
          <div className="md:flex-grow bg-transparent  justify-center mt-10 md:mt-0">
            <img
              src="/cover.jpg"
              className=" md:w-[220px] mx-auto md:mx-0 md:ml-auto w-[100px] h-[100px] md:h-[220px]  rounded-full 
              border-2 border-black  object-cover"
              alt=""
            />
          </div>
          <div className="h-auto md:h-full  rounded-md text-white text-center mt-8 md:mt-0 md:text-left flex flex-col justify-left place-items-center w-full md:w-1/2   ">
            <div className="my-auto flex-col space-y-2 pr-4">
              <div className="text-xl">Hello There</div>
              <div className="text-base md:text-3xl font-bold">S M Hassan</div>
              <div className="text-slate-200 text-xl">
                I Am a Passionate Software Engineer
              </div>
              <div className="text-sm md:text-base w-full md:w-3/4">
                A Front End developer who commit to develop roubust and
                reuseable code with React and Next JS.
              </div>
              <div className="flex space-x-5">
                <button className="px-4 py-2 bg-black text-white hover:text-black hover:bg-white shadow-md">
                  My Work
                </button>
                <Mailto email="sdmahfuz@gmail.com" body="" subject="">
                <div className="px-4 py-2 bg:white border-black border-2  bg-black bg-opacity-40">
                  Hire Me
                </div>
          </Mailto>
               
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
