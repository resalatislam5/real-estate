function Link({ to, text, color = "white" }) {
  return (
    <a className={`text-p-x-f text-${color}`} href={to}>
      {text}
    </a>
  );
}

export default Link;
