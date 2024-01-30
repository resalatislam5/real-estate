function MainLayout({ children, heading, para, style }) {
  return (
    <div className={`${style}`}>
      <div
        className={`container mx-auto flex flex-col md:gap-20 gap-10  items-center sm:py-20 py-10`}
      >
        <div className="flex flex-col text-center gap-3">
          <h1 className="md:text-h-x-f text-p-x-f text-hc font-bold">
            {heading}
          </h1>
          <p className="md:text-p-x-f text-h-m-f text-pc">{para}</p>
        </div>
        <div className="container">{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
