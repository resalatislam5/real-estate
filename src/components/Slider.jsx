// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Card from "./Card";

export default function Slider({ dataObj }) {
  console.log("dataObj", dataObj);
  return (
    <>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          639: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 4,
          },
        }}
        // slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[500px]"
      >
        {dataObj.map((e, i) => (
          <SwiperSlide
            className="slider-width flex justify-center items-center"
            key={i}
          >
            <Card cardData={e} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
