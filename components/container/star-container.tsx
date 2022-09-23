import { floor } from "lodash";
import React from "react";
import { FullStarIcon } from "../icons/full-star-icon";
import { GrayStarIcon } from "../icons/gray-star-icon";
import { HalfStarIcon } from "../icons/half-star-icon";

interface Props{
    star:number,
    showStarCount?:boolean
}
export const StarContainer = ({star, showStarCount=true}:Props) => {
  return (
    <div className="flex space-x-1 place-items-center mt-2 mb-3 ">
      {[...Array(5)].slice(0, floor(star)).map((x, i) => (
        <div key={i}>
          <FullStarIcon />
        </div>
      ))}
      {floor(star) !== star && <HalfStarIcon />}

      {[...Array(5)].slice(floor(star), 4).map((x, i) => (
        <div key={i+i}>
          <GrayStarIcon />
        </div>
      ))}
      {
        showStarCount &&
        <div className="px-1 font-semibold text-sm mt-[4px]">{star}</div>

      }
    </div>
  );
};
