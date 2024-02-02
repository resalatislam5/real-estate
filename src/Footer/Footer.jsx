import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
function Footer() {
  return (
    <div className="pt-20 max-w-[2550px] px-5 bg-[#0D0D0D] text-white t-10">
      <div className="flex flex-wrap lg:flex-nowrap gap-10 lg:gap-0 lg:justify-around justify-between">
        <div className="">
          <h1 className="sm:text-lg text-sm font-semibold">Contact Us</h1>
          <p className="pt-3">
            329 Queensberry Street, <br /> North Melbourne VIC 3051, <br />{" "}
            Australia.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="text-xl  font-semibold">Discover</h3>
          <a className="text-lg hover:text-dark-cyan inline-flex" href="/">
            Chicago
          </a>
          <a className="text-lg hover:text-dark-cyan" href="/">
            Los Angeles
          </a>
          <a className="text-lg hover:text-dark-cyan" href="/">
            Miami
          </a>
          <a className="text-lg hover:text-dark-cyan" href="/">
            New York
          </a>
        </div>
        <div className=" flex flex-col gap-3 ">
          <h3 className="text-xl  font-semibold">Lists by Category</h3>
          <a className="text-lg hover:text-dark-cyan" href="/">
            Apartments
          </a>
          <a className="text-lg hover:text-dark-cyan" href="/">
            Terms & conditions
          </a>
          <a className="text-lg hover:text-dark-cyan" href="/">
            Condos
          </a>
          <a className="text-lg hover:text-dark-cyan" href="/">
            Houses
          </a>
          <a className="text-lg hover:text-dark-cyan" href="/">
            Offices
          </a>
          <a className="text-lg hover:text-dark-cyan" href="/">
            Retail
          </a>
          <a className="text-lg hover:text-dark-cyan" href="/">
            Villas
          </a>
        </div>
        <div className=" flex flex-col gap-3 ">
          <h3 className="text-xl  font-semibold">Quick Links</h3>
          <a className="text-lg hover:text-dark-cyan" href="/">
            About Us
          </a>
          <a className="text-lg hover:text-dark-cyan" href="/">
            Terms & conditions
          </a>
          <a className="text-lg hover:text-dark-cyan" href="/">
            User{"'"}s Guide
          </a>
          <a className="text-lg hover:text-dark-cyan" href="/">
            Support Center
          </a>
          <a className="text-lg hover:text-dark-cyan" href="/">
            Press Info
          </a>
          <a className="text-lg hover:text-dark-cyan" href="/">
            Contact Us
          </a>
        </div>
        <div className=" flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Subscribe</h3>
          <form>
            <input
              className="md:px-8 sm:px-4 px-2 md:py-3 py-2 rounded-s-md"
              type="email"
              placeholder="Your Email"
              required
            />
            <input
              className="md:px-8 sm:px-4 px-2 md:py-[11px] py-2 bg-orange text-white text-lg rounded-e-md cursor-pointer"
              type="submit"
              value="Subcribe"
            />
          </form>
          <h3 className="text-xl  font-semibold">follow on:</h3>
          <div className="flex gap-3">
            <a className="hover:text-dark-cyan text-2xl" href="">
              <FaFacebookSquare />
            </a>
            <a className="hover:text-dark-cyan text-2xl" href="">
              <AiFillTwitterSquare />
            </a>
            <a className="hover:text-dark-cyan text-2xl" href="">
              <FaGithubSquare />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full h-[1px]  mt-8"></div>
        <p className="text-center  py-10">
          Designed By Themefisher & Developed By Gethugothemes
        </p>
      </div>
    </div>
  );
}

export default Footer;
