export default function Cards() {
  return (
    <>
      <main className="w-132 p-3 mt-40 mb-20  md:w-410 mx-auto   md:gap-2    text-center flex flex-col items-center ">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
          <div className="h-130 md:w-150  p-10 rounded-2xl bg-gradient-to-b  from-white to-[#4682b4]">
            <div className="w-full h-20 rounded-2xl items-center p-5 flex justify-between bg-white">
              <p className="">Make report for Mudryk</p>
              <p className="ring-1 ring-blue-600 p-2 rounded-2xl">✨ Genrate</p>
            </div>

            <div className="w-full h-85 mt-5 rounded-2xl p-5 text-start  bg-white">
              <div className="border-b-1 border-gray-400 pb-3">
                <p className="font-semibold text-2xl">
                  Mudryk's Programming Class Report
                </p>
                <p className="text-gray-400 mt-3">VALUE</p>
              </div>

              <div className="border-b-1 flex justify-between border-gray-400 pb-3 mt-3">
                <div>
                  <p>Impact</p>
                  <p className="text-gray-400 md:mt-3">VALUE</p>
                </div>
                <div>★★★★★</div>
              </div>
              <div className="border-b-1 justify-between flex  border-gray-400 pb-3 mt-3">
                <div>
                  <p>Impact</p>
                  <p className="md:mb-2">Impact</p>
                </div>
                <div>
                  <p>★★★★☆</p>
                  <p className="mt-3">★★★☆☆</p>
                </div>
              </div>
              <div className="flex justify-between mt-3">
                <p>Score </p>
                <button className="text-white bg-black px-3 py-1 rounded-2xl">
                  900
                </button>
              </div>
            </div>
          </div>

          <div className="h-130 md:w-150 p-15 rounded-2xl ">
            <div className="w-full h-full text-start rounded-2xl p-5">
              <p className="text-blue-500 font-semibold pb-5">
                MAKE REPORT FEATURE
              </p>
              <p className="text-3xl font-bold pb-5">
                Streamlining Online <br /> Exam Reports for <br /> Students
              </p>
              <p className="pb-5 text-base text-gray-800">
                Facilitating Student Progress Tracking: This feature
                streamliness the generation of comprehensive exam reports for
                students, ensuring quick access to detailed performance
                summaries
              </p>
              <button className="text-white bg-black rounded-md px-3 py-2">
                Explore More <i className="fa-solid pl-2 fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="h-130 md:w-150 p-15 rounded-2xl ">
            <div className="w-full h-full text-start rounded-2xl p-5">
              <p className="text-blue-500 font-semibold pb-5">
                MAKE REPORT FEATURE
              </p>
              <p className="text-3xl font-bold pb-5">
                Streamlining Online <br /> Exam Reports for <br /> Students
              </p>
              <p className="pb-5 text-base text-gray-800">
                Facilitating Student Progress Tracking: This feature
                streamliness the generation of comprehensive exam reports for
                students, ensuring quick access to detailed performance
                summaries
              </p>
              <button className="text-white bg-black rounded-md px-3 py-2">
                Explore More <i className=" pl-2 fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="h-130 md:w-150 p-15 rounded-2xl  bg-gradient-to-b  from-white to-[#4682b4]">
            <div className="w-full  h-full rounded-2xl bg-white p-5">
              <div className="flex justify-between">
                <div className="flex">
                  <p className="pt-2 mt-2 h-10 w-10 mr-3 rounded-full ring-gray-300 ring-2">
                    ✨
                  </p>
                  <div>
                    <p className="font-bold  text-2xl mr-8">Mr. Verstappen</p>
                    <p className="text-start text-gray-500">Teacher</p>
                  </div>
                </div>

                <div>
                  <p className="rounded-2xl font-semibold  px-3 md:h-7 mt-5 items-center ring-gray-300 ring-2">
                    Hogwards University
                  </p>
                </div>
              </div>

              <div className="md:mt-10 mt-4 ">
                <div className="text-end items-end justify-end ">
                  <p className="ring-2 mb-4 inline-block ring-blue-500 px-3 py-1 rounded-md">
                    Create 10 Questions about state Kambing
                  </p>
                  <p className="ring-2 mb-4 inline-block ring-blue-500 px-3 py-1 rounded-md">
                    Create 50 Questions about Formula 1
                  </p>
                  <p className="ring-2 mb-4 inline-block ring-blue-500 px-3 py-1 rounded-md">
                    Create 3 Essay about Harry Potter
                  </p>
                  <p className="ring-2 mb-4 inline-block ring-blue-500 px-3 py-1 rounded-md">
                    Can you change number 4
                  </p>

                  <div className="bg-gray-100 justify-between flex ring-1 p-3 md:mt-4 ring-gray-300 rounded-md">
                    <p className="text-gray-700 mt-2 text-lg">
                      <i className="fa-solid mr-2 fa-magnifying-glass"></i> Ask
                      me!
                    </p>

                    <button className="bg-blue-700 text-white px-4 py-2 rounded-md">
                      ✨ Genrate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
