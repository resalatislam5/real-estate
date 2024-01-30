import Card from "../components/Card";
import MainLayout from "../components/MainLayout";
import img1 from "../assets/new Appar.png";
import img2 from "../assets/wonderful-2.png";
import img3 from "../assets/wonderful-3.png";
import img4 from "../assets/wonderful-4.png";
import bed from "../assets/bed.png";
import bath from "../assets/bath-tub 1.png";
import garage from "../assets/garage.svg";
import sq from "../assets/set-square.svg";

function Rent() {
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
    ];
    return (
      <div className="sm:mt-10">
        <MainLayout
          heading={"Recent Properties for Rent"}
          para={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
        >
          <div className="flex  justify-center gap-5 flex-wrap px-5">
            {disData.map((e, i) => (
              <div className="flex justify-center items-center" key={i}>
                <Card cardData={e} />
              </div>
            ))}
          </div>
        </MainLayout>
      </div>
    );
}

export default Rent;