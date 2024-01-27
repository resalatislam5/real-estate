import Button from "./Button";
import { CgArrowsExpandRight } from "react-icons/cg";
import { CiCirclePlus } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
function Card({ cardData }) {
  return (
    <>
      <div className="w-72  flex flex-col gap-5 font-medium text-pc border rounded-md border-[#EFEFEF]">
        <div className="relative">
          <img className="w-full" src={cardData.thum} alt="" />
          <div className="absolute top-4">
            <div className="flex justify-between px-5 w-72">
              <Button text="FEATURED" to="#" size="sm" />
              <Button text="FOR SALE" to="#" size="sm" bgColor="bg-hc" />
            </div>
          </div>
        </div>

        <div className="px-4">
          <h2 className="sm:text-h-s-f text-p-m-f text-hc font-bold">
            {cardData.name}
          </h2>
          <p className="sm:text-p-m-f text-p-s-f">{cardData.title}</p>
        </div>

        <div className="px-4 flex gap-5 justify-between">
          {cardData?.info?.map((e, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 justify-center items-center"
            >
              <img src={e.image} alt="" />
              <p className="text-[10px]">{e.text}</p>
            </div>
          ))}
        </div>

        <div className="border border-[#EFEFEF]"></div>

        <div className="flex justify-between px-4 pb-5">
          <div className="flex flex-col gap-1">
            <del className="text-p-s-f">{cardData.delA}</del>
            <h3 className="text-h-s-f text-hc">{cardData.amount}</h3>
          </div>
          <div className="flex font-bold gap-5">
            <button>
              <CgArrowsExpandRight className="w-5 h-5" />
            </button>
            <button>
              <CiCirclePlus className="w-5 h-5" />
            </button>
            <button>
              <GiSelfLove className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
