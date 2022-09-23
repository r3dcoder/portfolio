import React from "react";
import Mailto from "./mail-to";

const ContactBanner = () => {
  return (
    <div className="w-full h-96  mt-10 flex flex-col relative ">
      <div className=" text-base md:text-4xl text-center text-white z-10 w-full h-full bg-gray-900 bg-opacity-80 flex flex-col place-items-center">
        <div className="my-auto">
          You are warmly invited to talk to me.
          <Mailto email="sdmahfuz@gmail.com" body="" subject="">
            <div className="px-4 mx-auto flex-nowrap w-60 md:w-64 py-3 font-semibold border-white my-2 border-[1px] cursor-pointer">
              {`Let's Talk`}
            </div>
          </Mailto>
        </div>
      </div>
      <img
        src="/banner-image.jpg"
        className="absolute z-0 top-0 left-0 w-full h-full object-cover  "
        alt=""
      />
    </div>
  );
};

export default ContactBanner;
