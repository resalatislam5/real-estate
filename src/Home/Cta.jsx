
function Cta() {
    return (
      <div className="bg-orange">
        <div
          className={`container mx-auto flex flex-col md:gap-20 gap-10  items-center sm:py-20 py-10`}
        >
          <div className="flex flex-col text-center items-center gap-3 text-white">
            <h1 className="md:text-h-x-f text-p-x-f font-bold">
              Become a Real Estate Agent
            </h1>
            <p className="md:text-p-x-f text-h-m-f ">
              We only work with the best companies around the globe
            </p>
            <a
              className="md:text-p-x-f text-p-m-f md:w-72 md:h-20 md:mt-8 px-5 py-3  text-orange bg-white flex justify-center items-center gap-2 rounded-md"
              href={"#"}
            >
              REGISTER NOW
            </a>
          </div>
        </div>
      </div>
    );
}

export default Cta;