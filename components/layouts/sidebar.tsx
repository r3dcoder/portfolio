import { getIcon } from "@/util/get-icon";
import React, { useEffect, useState } from "react";
import { sideMenus } from "../data/sidebar";
import * as sidebarIcons from "@/components/icons/sidebar";

interface SidebarProps {
  handleChangeScroll: (id: string) => void;
}
export const Sidebar = ({ handleChangeScroll }: SidebarProps) => {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    handleChangeScroll(activeTab);
  }, [activeTab]);

  return (
    <div className="fixed top-0 left-0 w-16 sm:w-24 md:w-28 lg:w-[120px] z-10 shadow-md bg-white flex flex-col space-y-6 h-screen">
      <div className="bg-[#252325] text-xs sm:text-sm md:text-base text-center py-3 px-1 text-white font-semibold">
        Mahfuz
      </div>
      <div className="flex flex-col space-y-8">
        {sideMenus.map((menu, index: number) => (
          <div
            onClick={() => setActiveTab(menu.id)}
            key={index}
            className={`px-2 sm:px-3 md:px-4 cursor-pointer ${
              activeTab === menu.id ? "border-r-[2px]  border-r-black " : ""
            }`}
          >
            {getIcon({
              iconList: sidebarIcons,
              iconName:
                activeTab === menu.id ? menu.solidIcon : menu.outlineIcon,
              className:
                "w-6 sm:w-8 sm:h-8 md:w-10 h-6 md:h-10 text-center mx-auto ",
            })}
            <div
              className={` text-xs sm:text-sm md:text-base text-center border-b-[1px] border-b-gray-200 pb-1 ${
                activeTab === menu.id ? "font-semibold" : "font-normal"
              }`}
            >
              {menu.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
