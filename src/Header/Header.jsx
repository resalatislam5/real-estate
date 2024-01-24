import Button from "../components/Button";
import Link from "../components/Link";
import { FaUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

function Header() {
  // side bar start
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  // side bar end

  // nav name
  const items = [
    {
      to: "#",
      text: "Home",
    },
    {
      to: "#",
      text: "About",
    },
    {
      to: "#",
      text: "Rentals",
    },
    {
      to: "#",
      text: "Testimonial",
    },
    {
      to: "#",
      text: "Blog",
    },
    {
      to: "#",
      text: "Contact us",
    },
  ];
  return (
    <header className="relative container mx-auto">
      <div className="container absolute px-5">
        <div className="flex gap-5 justify-between items-center py-8 text-white md:text-2xl text-xl">
          {/* logo */}
          <div className="order-2 lg:order-1">
            <h1 className="font-semibold">
              <span className="font-bold ">Real</span> State
            </h1>
          </div>
            {/* side bar start */}
          <div className="lg:hidden">
            <div id="mySidenav" className="sidenav">
              <a
                href="javascript:void(0)"
                className="closebtn"
                onClick={closeNav}
              >
                &times;
              </a>
              <Link to={"#"} text="" />
              {items.map((e, i) => (
                <Link key={i} to={e.to} text={e.text} />
              ))}
            </div>

            <button className="" onClick={openNav}>
              <IoMenu />
            </button>
          </div>
            {/* side bar start */}
            {/* nave items  */}
          <div className="lg:flex hidden gap-5 lg:order-2">
            <Link to={"#"} text="" />
            {items.map((e, i) => (
              <Link key={i} to={e.to} text={e.text} />
            ))}
          </div>
          {/* sign in and profile  */}
          <div className="flex items-center gap-7 order-3">
            <a className="hidden sm:flex" href="#">
              <FaUser />
            </a>
            <Button text="Sign in" to="#" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
