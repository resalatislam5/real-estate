import MainLayout from "../components/MainLayout";
import femailWork from "../assets/female-worker.png"
import femailWork2 from "../assets/female-worker-2.png"
import femailWork3 from "../assets/female-worker-3.png"
import femailWork4 from "../assets/female-worker-4.png"
function Testimonials() {
    const testimonialData = [
      {
        text: "I believe in lifelong learning and Skola is agreat place to learn from experts. I&aposve learned a lot and recommend it to all my friends",
        img: femailWork,
        name: "Marvin McKinney",
        title: "Designer",
      },
      {
        text: "I believe in lifelong learning and Skola is agreat place to learn from experts. I&aposve learned a lot and recommend it to all my friends",
        img: femailWork2,
        name: "Robert Fox",
        title: "Reporter",
      },
      {
        text: "I believe in lifelong learning and Skola is agreat place to learn from experts. I&aposve learned a lot and recommend it to all my friends",
        img: femailWork3,
        name: "Guy Hawkins",
        title: "Developer",
      },
      {
        text: "I believe in lifelong learning and Skola is agreat place to learn from experts. I&aposve learned a lot and recommend it to all my friends",
        img: femailWork4,
        name: "Floyd Miles",
        title: "Web Host",
      },
    ];
    return (
      <div className="">
        <MainLayout
          heading={"Our Testimonials"}
          para={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
          style={"bg-testimonial  bg-no-repeat bg-cover"}
        >
          <div className="flex lg:justify-between justify-center gap-5 flex-wrap px-5">
            {testimonialData.map((e, i) => (
              <div
                className="flex flex-col justify-center items-center w-72 text-center"
                key={i}
              >
                <div className="bg-white shadow-md px-5 py-10 rounded-md">
                  <p className="text-p-s-f">
                    {e.text}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center -mt-8">
                  <div className="w-16 h-16">
                    <img className="w-full" src={e.img} alt="" />
                  </div>
                  <div>
                    <h2 className="text-h-m-f text-hc font-bold">
                      {e.name}
                    </h2>
                    <p className="text-h-m-f text-pc">{e.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MainLayout>
      </div>
    );
}

export default Testimonials;