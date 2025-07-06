export default function Pricing() {
  return (
    <>
      <main className="md:p-20  md:w-410 w-132  ">
        <div className=" text-center">
          <p className="text-blue-500 font-medium text-xs md:text-xl mb-1 md:mt-4">
            PRICING
          </p>

          <p className="text-2xl md:text-5xl font-bold  mb-4">Our Pricing</p>

          <p className="text-xs md:text-xl  text-gray-800 mb-10">
            Exxam.io combines enterprise-grade capabilities with simple way
          </p>
        </div>

        <div className=" mx-4  grid grid-cols-1 md:grid-cols-3  md:px-10 gap-10">
          <div className=" w-125 md:w-110 p-3 ring-1 ring-gray-300 rounded-2xl ">
            <div className="h-80 w-full ring-1 ring-gray-400 rounded-2xl p-5 ">
              <p className="font-semibold text-3xl mb-4">Personal</p>
              <p className="mb-3">
                Individualized learning at an affordable <br /> price learning
                at your fingertips
              </p>
              <div className="flex mb-3">
                <p className="font-semibold text-4xl">$20</p>
                <span className="mt-3">/per month</span>
              </div>
              <p className="mb-4">Save 35% by paying annually</p>
              <button className="ring-3 ring-gray-300 rounded-md font-medium w-full mt-8 py-2">
                Get Personal
              </button>
            </div>
            <div className="p-3">
              <p>
                <i className="fa-regular my-3 mr-3 fa-circle-check"></i>
                Unlimited Organization
              </p>
              <p>
                <i className="fa-regular my-3 mr-3 fa-circle-check"></i>
                Unlimited Real-time Exams
              </p>
              <p>
                <i className="fa-regular my-3  mr-3 fa-circle-check"></i>
                50 Assignment
              </p>
              <p>
                <i className="fa-regular my-3 mr-3 fa-circle-check"></i>
                50 AI-generated Questions
              </p>
            </div>
          </div>

          <div className=" w-125 md:w-110 p-3 ring-1 ring-gray-300 rounded-2xl">
            <div className="h-80 w-full ring-1 ring-blue-400 rounded-2xl p-5 bg-gradient-to-b  from-white to-[#91ceff]">
              <p className="font-semibold text-3xl mb-4">Team</p>
              <p className="mb-3">
                Collaborative, advanced, cost- <br /> effective exam solutions
              </p>
              <div className="flex mb-3">
                <p className="font-semibold text-4xl">$149</p>
                <span className="mt-3">/per month</span>
              </div>
              <p className="mb-4">Save 35% by paying annually</p>
              <button className="ring-3 ring-blue-300 bg-blue-700 text-white rounded-md font-medium w-full mt-8 py-2">
                Get Team
              </button>
            </div>
            <div className="p-3">
              <p className="text-blue-700 text-xl">All in Free, plus</p>
              <p>
                <i className="fa-regular my-3 mr-3 fa-circle-check"></i>
                Collaborative Learning
              </p>
              <p>
                <i className="fa-regular my-3 mr-3 fa-circle-check"></i>
                Advanced Analytics
              </p>
              <p>
                <i className="fa-regular my-3  mr-3 fa-circle-check"></i>
                Priority Support
              </p>
              <p>
                <i className="fa-regular my-3 mr-3 fa-circle-check"></i>
                Unlimited Assignments
              </p>
              <p>
                <i className="fa-regular my-3 mr-3 fa-circle-check"></i>
                Import Export Exam Questions
              </p>
              <p>
                <i className="fa-regular my-3  mr-3 fa-circle-check"></i>
                Real-time Webcam Sessions
              </p>
              <p>
                <i className="fa-regular my-3 mr-3 fa-circle-check"></i>
                Unlimited AI-generated Questions
              </p>
            </div>
          </div>

          <div className=" w-125 md:w-110 p-3 ring-1 ring-gray-300 rounded-2xl">
            <div className="h-80 w-full ring-1 ring-gray-400 rounded-2xl p-5 ">
              <p className="font-semibold text-3xl mb-4">Enterprise</p>
              <p className="mb-3">
                Scalable, integreted, premium exam <br />
                management suite.
              </p>
              <div className="flex mb-3">
                <p className="font-semibold text-4xl">$549</p>
                <span className="mt-3">/per month</span>
              </div>
              <p className="mb-4">Save 35% by paying annually</p>
              <button className="ring-2 ring-gray-400 rounded-md font-medium w-full mt-8 py-2">
                Get Enterprise
              </button>
            </div>
            <div className="p-3">
              <p className="text-blue-700 text-xl">All in Free, plus</p>
              <p>
                <i className="fa-regular my-3 mr-3 fa-circle-check"></i>
                Seamless Integration
              </p>
              <p>
                <i className="fa-regular my-3 mr-3 fa-circle-check"></i>
                Premium Features
              </p>
              <p>
                <i className="fa-regular my-3  mr-3 fa-circle-check"></i>
                Security & Compliance
              </p>
              <p>
                <i className="fa-regular my-3 mr-3 fa-circle-check"></i>
                Dedicated Account Management
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
