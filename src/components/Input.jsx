import { IoMdSearch } from "react-icons/io";
function Input({ text, type, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="sm:text-h-m-f text-h-s-f text-hc font-semibold">{text}</p>
      {type === "input" ? (
        <div className="flex text-pc">
        <input className="border-b-2" type="text" placeholder={placeholder} />
        <IoMdSearch />
        </div>
      ) : (
        <select
          className="border-b-2 text-pc"
          placeholder={placeholder}
          name="cars"
          id="cars"
        >
          <option defaultChecked>{placeholder}</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      )}
    </div>
  );
}

export default Input;
