import { IoMdSearch } from "react-icons/io";
function Button({ text, to, color = "text-white", type, bgColor, size }) {
  return (
    <>
      {size === "sm" ? (
        <a
          className={`w-20 h-6 ${color} text-p-s-f flex justify-center items-center gap-2 rounded-sm  ${
            bgColor
              ? `${bgColor}`
              : "bg-gradient-to-r from-orange to-rose-600"
          }`}
          href={to}
        >
          {text}
          {type === "search" && <IoMdSearch />}
        </a>
      ) : (
        <a
          className={`sm:w-36 w-28 h-12 ${color} sm:text-h-s-f flex justify-center items-center gap-2 rounded-md ${
            bgColor
              ? `${bgColor}`
              : "bg-gradient-to-r from-orange to-rose-600"
          }`}
          href={to}
        >
          {text}
          {type === "search" && <IoMdSearch />}
        </a>
      )}
    </>
  );
}

export default Button;
