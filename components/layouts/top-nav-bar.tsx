import React from "react";
import Mailto from "../container/mail-to";
import { sideMenus } from "../data/sidebar";
import { Menu } from "../types/menu";

interface Props{
    onChangeScroll:(id:string)=>void
}
const TopNavBar = ({onChangeScroll}:Props) => {
  return (
    <div className=" z-20 w-full bg-white h-12 md:h-16 fixed top-0 left-0  flex flex-col place-items-center ">
      <div className="w-full max-w-[1152px] mx-auto flex justify-between my-auto  place-items-center">
        <ProfileImageSegment  />
        <NavButtonSegment onChangeScroll={(id:string)=>onChangeScroll(id)}/>
      </div>
    </div>
  );
};

export default TopNavBar;

const ProfileImageSegment = () => {
  return (
    <div className="w-full flex space-x-2 place-items-center font-thin">
      <div className=" w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden">
        <img
          src="/my-image.jpeg"
          className="w-full h-full object-cover  rounded-md"
          alt=""
        />
      </div>
      <div>
        <div className=" text-sm md:text-base">
          Mahfuz <span className="font-semibold">Hasan</span>
        </div>
        <div className="text-xs md:text-sm">
          Software <span className="font-semibold">Engineer</span>
        </div>
      </div>
    </div>
  );
};


const NavButtonSegment=({onChangeScroll}:Props)=>{
    return(
        <div className="   md:space-x-10 justify-end place-items-center hidden md:flex">
          {sideMenus.map((item: Menu, index: number) => (
            <div key={index} onClick={()=>onChangeScroll(item.id)} className="font-thin text-xl cursor-pointer">{item.label}</div>
          ))}
          <Mailto email="sdmahfuz@gmail.com" body="" subject="">
          <div className="px-4 py-2 w-24 text-center font-semibold border-black border-[1px] cursor-pointer">
            Hire Me
          </div>
          </Mailto>
          
          
        </div>
    )
}