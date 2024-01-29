import CountUp from "react-countup";
import Button from "../components/Button";
function Trends() {
    const countValue = [
      {
        value: 66180,
        text: "HOMES FOR SALE",
      },
      {
        value: 4809,
        text: "OPEN HOUSES",
      },
      {
        value: 30469,
        text: "RECENTLY SOLD",
      },
      {
        value: 2919,
        text: "PRICE REDUCED",
      },
    ];
  return (
    <div className="bg-garden sm:h-[60vh] bg-no-repeat bg-cover py-20 bg-[#0B020080] bg-blend-multiply text-white relative flex flex-col items-center  gap-20">
      <div className="container flex flex-col gap-5 text-center items-center md:px-0 px-5 ">
        <p className="sm:text-p-x-f text-p-m-f">TRENDS</p>
        <h1 className="sm:text-h-x-f text-p-x-f font-bold">
          Vermont Farmhouse With Antique Jail Is
          <br className="lg:flex hidden" /> the Week&apos;s Most Popular Home
        </h1>
        <Button text="READ MORE" />
      </div>
      <div className="bg-black md:absolute md:-bottom-16 md:flex hidden justify-between lg:gap-36 gap-20 p-10">
        {countValue.map((e, i) => (
          <div className="flex flex-col items-center gap-2 text-white" key={i}>
            <p className="text-p-x-f font-bold">
              <CountUp enableScrollSpy={true} end={e.value} />
            </p>
            <p className="text-p-m-f">{e.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trends;
