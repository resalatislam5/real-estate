import { SwiperSlide } from "swiper/react";
import Slider from "../components/Slider";
import house from "../assets/house.png";
import charming from "../assets/charming-1.png";
import office from "../assets/office.png";
import room from "../assets/room.png";
function Properties() {
  const proData = [
    {
      img: house,
      text: "House",
    },
    {
      img: charming,
      text: "Apartment",
    },
    {
      img: office,
      text: "Office",
    },
    {
      img: room,
      text: "House",
    },
    {
      img: house,
      text: "House",
    },
    {
      img: charming,
      text: "Apartment",
    },
    {
      img: office,
      text: "Office",
    },
    {
      img: room,
      text: "House",
    },
  ];
  return (
    <div className="container mx-auto items-center pt-20 ">
      <div className="flex flex-col text-center gap-3">
        <h1 className="md:text-h-x-f text-p-x-f text-hc font-bold">
          Explore Our Properties
        </h1>
        <p className="md:text-p-x-f text-h-m-f text-pc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
          sollicitudin
        </p>
      </div>
      <div className="container">
        <Slider navi={true}>
          {proData.map((e, i) => (
            <SwiperSlide
              className="flex justify-center items-center"
              key={i}
            >
              <div className="relative">
                <img className="brightness-75" src={e.img} alt="" />
                <div className="flex justify-center">
                  <p className="text-white text-h-m-f font-bold absolute bottom-6 sha">
                    {e.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Properties;
