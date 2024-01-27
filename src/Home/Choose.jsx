import trust from "../assets/trust 1.png";
import home from "../assets/trust 1.png";
import analycis from "../assets/trust 1.png";
import online from "../assets/trust 1.png";
function Choose() {
  const chooseItem = [
    {
      id: 1,
      thum: trust,
      title: "Trusted By Thousands",
      text: "With over 1 million+ homes for sale available on the website,Trulia can match you with a house you will want to call home.",
    },
    {
      id: 2,
      thum: home,
      title: "Wide Renge Of Properties",
      text: "With over 1 million+ homes for sale available on the website,Trulia can match you with a house you will want to call home.",
    },
    {
      id: 3,
      thum: analycis,
      title: "Financing Made Easy",
      text: "With over 1 million+ homes for sale available on the website,Trulia can match you with a house you will want to call home.",
    },
    {
      id: 4,
      thum: online,
      title: "See Neighborhoods",
      text: "With over 1 million+ homes for sale available on the website,Trulia can match you with a house you will want to call home.",
    },
  ];
  return (
    <div className="bg-[#F6F7F7]">
      <div className="container mx-auto flex flex-col md:gap-20 gap-10 items-center py-20 ">
        <div className="flex flex-col text-center gap-3">
          <h1 className="md:text-h-x-f text-p-x-f text-hc font-bold">
            Why Choose Us
          </h1>
          <p className="md:text-p-x-f text-h-m-f text-pc">
            We provide full service at every step
          </p>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {chooseItem.map((e, i) => (
            <div
              className="flex flex-col text-center items-center gap-5 w-72 hover:shadow-md px-4 py-8 bg-white rounded-md"
              key={i}
            >
              <div>
                <img src={e.thum} alt="" />
              </div>
              <h2 className="sm:text-h-m-f text-h-s-f text-hc font-semibold">
                {e.title}
              </h2>
              <p className="text-p-s-f text-pc">{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Choose;
