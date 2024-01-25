function Link({ to, text, color = "white" }) {
  return (
    <a className={`text-p-x-f text-${color} hover:text-gray-300`} href={to}>
      {text}
    </a>
  );
}

export default Link;
