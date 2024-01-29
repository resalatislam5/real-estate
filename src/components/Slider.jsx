// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Slider({ children, navi, pagi }) {
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
        spaceBetween={30}
        pagination={pagi}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[500px]"
        navigation={navi}
      >
        {children}
      </Swiper>
    </>
  );
}
