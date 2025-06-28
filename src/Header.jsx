export default function Header() {
  return (
    <nav className="pl-2 pr-2  h-15 md:h-20 w-132 md:w-full text-center flex items-center md:px-20">
      <ul className="flex items-center md:gap-10 text-sm md:text-xl font-semibold">
        <li className="flex items-center">
          <i className="fa-solid fa-book-open mr-1 text-white p-1 bg-blue-600 rounded-md md:border-2 text-sm border-blue-600"></i>
          exxam.io
        </li>
      </ul>

      <ul className="flex items-center text-sm   md:font-medium justify-end gap-3 md:gap-10 md:text-xl ml-auto">
        <li>
          Features <i className="text-base fa-solid ml-2 fa-caret-down"></i>
        </li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <button className="md:text-base text-sm ml-3 md:ml-8 font-medium shadow-md cursor-pointer rounded-md p-2 md:p-3 ring-2 ring-gray-300 ">
        Login
      </button>

      <button className="cursor-pointer ml-3 text-sm md:font-medium p-2 md:p-3 ring-2 ring-blue-800 rounded-md text-white bg-blue-800 ">
        Sign up for free
      </button>
    </nav>
  );
}
