import { IoMdSearch } from "react-icons/io";
function Button({ text, to, color = "white", type }) {
  return (
    <a
      //sm:py-2 py-1 sm:px-5 px-3
      className={`sm:w-36 w-28 h-12 text-${color} sm:text-h-s-f flex justify-center items-center gap-2 rounded-md bg-gradient-to-r from-orange to-rose-600`}
      href={to}
    >
      {text}
      {type === "search" && <IoMdSearch />}
    </a>
  );
}

export default Button;
