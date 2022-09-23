import React from "react";
import Mailto from "./mail-to";

const TopTitleContainer = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] bg-gray-200 bg-opacity-50 flex  flex-col place-items-center">
      <div className="m-auto w-[90%] md:max-w-[50%] lg:max-w-[40%]">
        <div className="text-center text-4xl ">
        {/* Create your own website to grow your business online. */}
        <span className="font-semibold">{"Create"}</span> {"your own website "} <span className="font-semibold">{"to grow"}</span> {"your"} <span className="font-semibold">business</span>  {"online. "}
          {/* <span className="font-semibold">{"LET'S"}</span> {"COME"} <span className="font-semibold">{"TOGETHER"}</span> {"TO BUILD "} <span className="font-semibold">GREAT</span>  {"Web application "} */}
        </div>
        <div className="text-center text-xl my-6 ">
          {`I'm React JS Developer based in #UK. I will design and develop your web application exactly the way you want.
`}
        </div>
        <Mailto email="sdmahfuz@gmail.com" body="" subject="">
        <div className="px-4 mx-auto flex-nowrap w-28 py-3 font-semibold border-black border-[1px] cursor-pointer">
            {`Let's Talk`}
          </div>
          </Mailto>
       
      </div>
    </div>
  );
};

export default TopTitleContainer;
