export default function Footer() {
  return (
    <footer className="  w-132  p-3 md:mx-20  my-20 md:w-380 ">
      <div className="grid md:grid-cols-5 grid-cols-2 justify-between gap-8">
        <div className="flex flex-col max-w-xs">
          <li className="flex items-center mb-4 font-bold text-2xl list-none">
            <i className="fa-solid fa-book-open mr-2 text-white p-2 bg-blue-600 rounded-md text-sm"></i>
            exxam.io
          </li>
          <button className="px-4 py-2 rounded-full border text-gray-600 hover:bg-gray-100 border-gray-500 cursor-pointer transition">
            Unlimited Trial for 14 Days
          </button>
        </div>

        <nav className="flex flex-col">
          <p className="text-gray-600 font-semibold mb-4">Product</p>
          <ul className="space-y-2">
            <li className="font-semibold">Sitemap</li>
            <li className="font-semibold">User Flow</li>
            <li className="font-semibold">Wireframes</li>
            <li className="font-semibold">Content</li>
            <li className="font-semibold">Flowchart</li>
            <li className="font-semibold">User Flow Diagrams</li>
            <li className="font-semibold">Release Notes</li>
          </ul>
        </nav>

        <nav className="flex flex-col">
          <p className="text-gray-600 font-semibold mb-4">How it works</p>
          <ul className="space-y-2">
            <li className="font-semibold">Knowledge base</li>
            <li className="font-semibold">FAQ</li>
            <li className="font-semibold">Reviews</li>
          </ul>
        </nav>

        <nav className="flex flex-col">
          <p className="text-gray-600 font-semibold mb-4">Pricing</p>
          <ul className="space-y-2 mb-6">
            <li className="font-semibold">Plans & Pricing</li>
            <li className="font-semibold">Students</li>
            <li className="font-semibold">Education</li>
          </ul>
          <p className="text-gray-600 font-semibold mb-4">Company</p>
          <ul className="space-y-2">
            <li className="font-semibold">Blog</li>
            <li className="font-semibold">Contact us</li>
          </ul>
        </nav>

        <section className="max-w-xs border h-50 p-5 rounded-xl">
          <p className="font-semibold mb-2">Get in touch</p>
          <p className="text-sm mb-6">
            Have questions? Didn’t find what you’re looking for?
          </p>
          <button className="px-4 py-2 w-full mt-3 cursor-pointer text-gray-600 hover:bg-gray-100 rounded-md ring-gray-300 ring-3  transition">
            Contact us
          </button>
        </section>
      </div>

      <div className="flex w-120  md:w-full flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t text-sm text-gray-700">
        <div className="flex flex-wrap items-center gap-4">
          <p>© 2024 Exxam.io</p>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Security
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            info@exxam.com
          </a>
          <div className="flex">
            <p className="mr-2">Created by</p>
            <a
              href="https://omhankare.github.io/Om-Hankare-Portfolio/#home"
              className="hover:underline"
            >
              Om Hankare
            </a>
          </div>
        </div>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-600">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-600">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" className="hover:text-blue-600">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-blue-600">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
