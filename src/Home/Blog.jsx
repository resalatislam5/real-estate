import Button from "../components/Button";
import MainLayout from "../components/MainLayout";
import img1 from "../assets/new Appar.png";
import img2 from "../assets/wonderful-2.png";
import img3 from "../assets/wonderful-3.png";
import img4 from "../assets/wonderful-4.png";
import { FaCalendarAlt, FaRegUser } from "react-icons/fa";

function Blog() {
    const disData = [
      {
        id: 1,
        name: "Redfin Ranks the Most Competitive Neighborhoods of 2020",
        title: "Quincy St, Brooklyn, NY, USA",
        thum: img1,
      },
      {
        id: 2,
        name: "Redfin Ranks the Most Competitive Neighborhoods of 2020",
        title: "112 Glenwood Ave Hyde Park, Boston",
        thum: img2,
      },
      {
        id: 3,
        name: "Redfin Ranks the Most Competitive Neighborhoods of 2020",
        title: "251 SW 6th Ln Florida City, FL ",
        thum: img3,
      },
      {
        id: 4,
        name: "Redfin Ranks the Most Competitive Neighborhoods of 2020",
        title: "4 W 21st St Flatiron District, New York",
        thum: img4,
      },
    ];
    return (
      <div>
        <MainLayout
          heading={"Our Blog"}
          para={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
        >
          <div className="flex  justify-center gap-5 flex-wrap px-5">
            {disData.map((e, i) => (
              <div className="flex justify-center items-center" key={i}>
                <div className="w-72  flex flex-col gap-5 font-medium text-pc border rounded-md border-[#EFEFEF]">
                  <div className="relative">
                    <img className="w-full" src={e.thum} alt="" />
                    <div className="absolute top-4">
                      <div className="flex justify-between px-5 w-72">
                        <Button text="FEATURED" to="#" size="sm" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between px-4 font-semibold text-p-s-f text-pc">
                    <div className="flex justify-center items-center gap-3">
                      <FaRegUser className="font-bold" />
                      <p>Robert Fox</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                      <FaCalendarAlt className="font-bold" />
                      <p>06 April, 2021</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 px-4 pb-4">
                    <h2 className="text-p-m-f text-hc font-bold">
                      {e.name}
                    </h2>
                    <p className="text-p-s-f">{e.title}</p>
                    <a className="text-p-s-f underline text-orange" href="#">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MainLayout>
      </div>
    );
}

export default Blog;