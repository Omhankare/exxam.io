import image from "./assets/Screenshot.png";

export default function Hero() {
  return (
    <>
      <main className="w-125 ml-3 md:ml-5  h-125 md:h-170 md:mt-2 md:w-410 mx-auto rounded-b-3xl gap-1 bg-gradient-to-b md:gap-2 from-white to-[#4682b4]   md:from-white md:via-[#c7e1f6] md:to-[#4682b4]    text-center flex flex-col items-center">
        <p className="text-blue-500 font-medium text-md mb-1 md:mt-4">
          PRODUCT & MANAGEMENT EXAM TOOL
        </p>

        <h1 className="text-2xl md:text-5xl font-bold  mb-4">
          An AI-powered solution for online <br className="hidden md:inline" />
          exam challenges.
        </h1>

        <p className="text-xs md:text-xl text-gray-800 mb-2">
          This platform is optimized for educators and students, offering
          efficiency, accuracy,
          <br /> and user-friendliness, making it ideal for the digital era.
        </p>

        <div className="flex flex-row gap-3 mb-4">
          <button className="text-white cursor-pointer p-2 md:p-3 bg-black rounded-md">
            <i className="fa-regular fa-folder"></i> Sign up for free
          </button>

          <button className="bg-white text-gray-600 hover:bg-gray-100 cursor-pointer p-2 md:p-3  rounded-md shadow-md ring-2 ring-gray-300">
            See Exxam.io in action
          </button>
        </div>

        <img
          src={image}
          alt="Screenshot of platform"
          className="w-123 h-72 md:w-390 md:h-90 rounded-xl md:rounded-t-4xl ring-4 ring-blue-200"
        />
      </main>

      <section className="w-132 h-22 md:w-auto items-center  justify-center text-center pt-3">
        <h1 className="">Supported and Powered by several top companies</h1>

        <div className="flex   justify-center text-center md:text-2xl md:gap-20 pt-3 md:pr-15 text-md">
          <div className=" flex items-center  pr-3 ">
            <i className="fa-brands fa-xbox pr-1 "></i> <p>XBOX</p>
          </div>
          <div className=" flex items-center pr-3">
            <i className="fa-brands fa-playstation pr-1 "></i>
            <p>PLAYSTATION</p>
          </div>
          <div className=" flex items-center pr-3">
            <i className="fa-brands fa-microsoft pr-1 "></i> <p>MICROSOFT</p>
          </div>
          <div className=" flex items-center pr-3">
            <i className="fa-brands fa-google pr-1 "></i> <p>GOOGLE</p>
          </div>
          <div className=" flex items-center ">
            <i className="fa-brands fa-dropbox pr-1 "></i> <p>DROPBOX</p>
          </div>
        </div>
      </section>
    </>
  );
}
