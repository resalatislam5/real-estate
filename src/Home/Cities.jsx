import MainLayout from "../components/MainLayout";
import los from "../assets/cities-1.png";
import london from "../assets/london.png";
import paris from "../assets/parias.png";
import newWork from "../assets/new-york.png";
import miami from "../assets/miami.png";
import istanbul from "../assets/istanbul.png";
const ImageLayout = ({ img, heading, para }) => {
  return (
    <div className="relative">
      <img className="brightness-75 w-full" src={img} alt="" />
      <div className="flex justify-center text-white">
        <h1 className="sm:text-p-x-f text-p-m-f font-bold absolute sm:bottom-10 bottom-7">{heading}</h1>
        <p className="sm:text-h-m-f text-p-s-f absolute bottom-3">{para}</p>
      </div>
    </div>
  );
};

function Cities() {
  return (
    <div>
      <MainLayout
        heading={"Explore Cities"}
        para={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 px-2 justify-center">
          <div className="flex flex-wrap justify-center gap-5">
            <div className="">
              <ImageLayout
                img={los}
                heading={"Los Angeles"}
                para={"15 Properties"}
              />
            </div>

            <div className="flex gap-5">
              <ImageLayout
                img={london}
                heading={"Los Angeles"}
                para={"15 Properties"}
              />

              <ImageLayout
                img={paris}
                heading={"Los Angeles"}
                para={"15 Properties"}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            <div className="">
              <ImageLayout
                img={newWork}
                heading={"Los Angeles"}
                para={"15 Properties"}
              />
            </div>

            <div className="flex gap-5">
              <ImageLayout
                img={miami}
                heading={"Los Angeles"}
                para={"15 Properties"}
              />

              <ImageLayout
                img={istanbul}
                heading={"Los Angeles"}
                para={"15 Properties"}
              />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Cities;
