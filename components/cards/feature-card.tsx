 
import React from "react";
import { Feature } from "../types/Feature";
 
interface Porps {
  item: Feature;
}
const FeatureCard = ({ item }: Porps) => {
  return (
    <div className="py-8 px-10 mb-4 md:mb-0 bg-black bg-opacity-[2%] border-r-[0px] md:border-r-[1px] border-solid   border-r-[#D8D8D8] last:border-r-0">
      {/* <div className="pb-8">
        {getIcon({
          iconList: features,
          iconName: item.iconName,
          className: " ",
        })}
      </div> */}
      <div className=" text-base font-medium md:text-[22px] leading-5 pb-4">{item.title}</div>
      <div className="font-medium text-sm md:text-base text-[#9895A3]">
        {item.description}
      </div>
    </div>
  );
};

export default FeatureCard;
