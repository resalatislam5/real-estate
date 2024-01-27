import Slider from "../components/Slider";
import img1 from "../assets/new Appar.png";
import img2 from "../assets/wonderful-2.png";
import img3 from "../assets/wonderful-3.png";
import img4 from "../assets/wonderful-4.png";
import bed from "../assets/bed.png";
import bath from "../assets/bath-tub 1.png";
import garage from "../assets/garage.svg";
import sq from "../assets/set-square.svg";
function Discover() {
  const disData = [
    {
      id: 1,
      name: "New Apartment Nice Wiew",
      title: "Quincy St, Brooklyn, NY, USA",
      thum: img1,
      info: [
        {
          image: bed,
          text: "4 Beds",
        },
        {
          image: bath,
          text: "2 Baths",
        },
        {
          image: garage,
          text: "1 Garage",
        },
        {
          image: sq,
          text: "1200 Sq FT",
        },
      ],
      delA: "$2,800/me",
      amount: "$7,500/mo",
    },
    {
      id: 2,
      name: "Skyper Pool Apartment",
      title: "112 Glenwood Ave Hyde Park, Boston",
      thum: img2,
      info: [
        {
          image: bed,
          text: "4 Beds",
        },
        {
          image: bath,
          text: "2 Baths",
        },
        {
          image: garage,
          text: "1 Garage",
        },
        {
          image: sq,
          text: "1200 Sq FT",
        },
      ],
      delA: "$2,900/me",
      amount: "$7,500/mo",
    },
    {
      id: 3,
      name: "New Caledonian Wharf",
      title: "251 SW 6th Ln Florida City, FL ",
      thum: img3,
      info: [
        {
          image: bed,
          text: "4 Beds",
        },
        {
          image: bath,
          text: "2 Baths",
        },
        {
          image: garage,
          text: "1 Garage",
        },
        {
          image: sq,
          text: "1200 Sq FT",
        },
      ],
      delA: "$2,200/me",
      amount: "$7,500/mo",
    },
    {
      id: 4,
      name: "Spacious Family Home",
      title: "4 W 21st St Flatiron District, New York",
      thum: img4,
      info: [
        {
          image: bed,
          text: "4 Beds",
        },
        {
          image: bath,
          text: "2 Baths",
        },
        {
          image: garage,
          text: "1 Garage",
        },
        {
          image: sq,
          text: "1200 Sq FT",
        },
      ],
      delA: "$2,300/me",
      amount: "$7,500/mo",
    },
    {
      id: 5,
      name: "New Apartment Nice Wiew",
      title: "Quincy St, Brooklyn, NY, USA",
      thum: img1,
      info: [
        {
          image: bed,
          text: "4 Beds",
        },
        {
          image: bath,
          text: "2 Baths",
        },
        {
          image: garage,
          text: "1 Garage",
        },
        {
          image: sq,
          text: "1200 Sq FT",
        },
      ],
      delA: "$2,800/me",
      amount: "$7,500/mo",
    },
    {
      id: 6,
      name: "Skyper Pool Apartment",
      title: "112 Glenwood Ave Hyde Park, Boston",
      thum: img2,
      info: [
        {
          image: bed,
          text: "4 Beds",
        },
        {
          image: bath,
          text: "2 Baths",
        },
        {
          image: garage,
          text: "1 Garage",
        },
        {
          image: sq,
          text: "1200 Sq FT",
        },
      ],
      delA: "$2,800/me",
      amount: "$7,500/mo",
    },
    {
      id: 7,
      name: "New Caledonian Wharf",
      title: "251 SW 6th Ln Florida City, FL ",
      thum: img3,
      info: [
        {
          image: bed,
          text: "4 Beds",
        },
        {
          image: bath,
          text: "2 Baths",
        },
        {
          image: garage,
          text: "1 Garage",
        },
        {
          image: sq,
          text: "1200 Sq FT",
        },
      ],
      delA: "$2,800/me",
      amount: "$7,500/mo",
    },
    {
      id: 8,
      name: "Spacious Family Home",
      title: "4 W 21st St Flatiron District, New York",
      thum: img4,
      info: [
        {
          image: bed,
          text: "4 Beds",
        },
        {
          image: bath,
          text: "2 Baths",
        },
        {
          image: garage,
          text: "1 Garage",
        },
        {
          image: sq,
          text: "1200 Sq FT",
        },
      ],
      delA: "$2,800/me",
      amount: "$7,500/mo",
    },
  ];
  return (
    <div className="container mx-auto flex flex-col gap-20 items-center py-20 ">
      <div className="flex flex-col text-center gap-3">
        <h1 className="sm:text-h-x-f text-p-x-f text-hc font-bold">
          Discover Our Featured Listings
        </h1>
        <p className="sm:text-p-x-f text-p-m-f text-pc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </p>
      </div>
      <div className="container">
        <Slider dataObj={disData} />
      </div>
    </div>
  );
}

export default Discover;
