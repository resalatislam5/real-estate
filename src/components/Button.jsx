function Button({ text, to }) {
  return (
    <a
      className="sm:py-2 py-1 sm:px-5 px-3 sm:text-p-x-f rounded-md bg-gradient-to-r from-orange to-rose-600"
      href={to}
    >
      {text}
    </a>
  );
}

export default Button;
