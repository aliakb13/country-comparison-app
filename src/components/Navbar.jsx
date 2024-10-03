import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-evenly text-xl p-5 text-[#2C3E50]">
        <i className="fa-solid fa-a mt-2"></i>
        <ul className="flex gap-8 playfair-display-bold">
          <Link
            className="hover:text-[#F76C6C] hover:underline cursor-pointer"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-[#F76C6C] hover:underline cursor-pointer"
            to="/compare"
          >
            Compare
          </Link>
          <Link
            className="hover:text-[#F76C6C] hover:underline cursor-pointer"
            to="/news"
          >
            News
          </Link>
        </ul>
      </nav>
      <hr className="border-b-1 border-black" />
    </>
  );
}
