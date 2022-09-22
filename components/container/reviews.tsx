import React from "react";
import { reviews } from "../data/reviews";
import { Review } from "../types/menu";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Reviews = () => {
  return (
    <div className="w-full my-20">
         <div className=" my-4 md:my-8 text-base md:text-4xl font-semibold">
        <span className="underline underline-offset-4">{"CLIENT'S"} </span> FEEDBACK
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={150}
        slidesPerView={1}
         
        pagination={{ clickable: true }}
         onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {reviews.map((review: Review, index: number) => (
          <SwiperSlide key={index}>
            <div className="p-4  text-gray-700 flex flex-col place-items-center bg-gray-200 bg-opacity-20 shadow-lg">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src={review.imageUrl}
                alt=""
              />
              <div className="text-2xl my-4 font-semibold" >{review.name}</div>
              <div className="text-xl w-[90%] pb-8 text-center ">{review.review}</div>
            </div>
          </SwiperSlide>
        ))}
       
      </Swiper>
       
    </div>
  );
};

export default Reviews;
