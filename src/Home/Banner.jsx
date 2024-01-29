import Button from "../components/Button";
import Input from "../components/Input";

function Banner() {
  return (
    <div className="bg-banner h-screen bg-no-repeat bg-cover pt-28 bg-[#0B020080] bg-blend-multiply text-white flex justify-center items-center">
      <div className="container flex flex-col gap-28 text-center items-center md:px-0 px-5 ">
        <div>
          <h1 className="sm:text-h-x-f text-p-x-f font-bold">
            Buy, Sell and Rentins Properties <br className="lg:flex hidden" />
            in a Fastest Way
          </h1>
          <p className="sm:text-p-x-f text-p-m-f">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br className="lg:flex hidden" /> tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        <form className="md:w-[760px] flex-wrap md:flex-nowrap bg-white rounded-md flex gap-12 text-hc text-left p-5 justify-center items-center">
          <Input text="TYPE" placeholder="Property Type" />
          <Input text="LOCATION" placeholder="All City" />
          <Input text="SEARCH" type="input" placeholder="Enter Keywords" />
          <Button text="Search" type="search" to="#" />
        </form>
      </div>
    </div>
  );
}

export default Banner;
