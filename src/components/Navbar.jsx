import { Link } from "react-router-dom";

export default function Navbar({ where }) {
  let headings;
  if (where === "/") {
    headings = "COUNTRY RANGKINGS";
  } else if (where === "/compare") {
    headings = "COMPARE COUNTRY";
  } else {
    headings = "COUNTRY NEWS";
  }
  return (
    <>
      <nav className="text-xl py-8 px-20 text-white bg-[#2C3E50]">
        <div className="flex justify-between">
          <i className="fa-solid fa-paper-plane text-2xl"></i>
          <h1 className="nunito-sans-bold">{headings}</h1>
          <ul className="flex gap-8 nunito-sans-bold">
            <Link
              className={
                where === "/"
                  ? "text-[#F76C6C] underline"
                  : "hover:text-[#F76C6C] hover:underline cursor-pointer"
              }
              to="/"
            >
              Home
            </Link>
            <Link
              className={
                where === "/compare"
                  ? "text-[#F76C6C] underline"
                  : "hover:text-[#F76C6C] hover:underline cursor-pointer"
              }
              to="/compare"
            >
              Compare
            </Link>
            <Link
              className={
                where === "/news"
                  ? "text-[#F76C6C] underline"
                  : "hover:text-[#F76C6C] hover:underline cursor-pointer"
              }
              to="/news"
            >
              News
            </Link>
          </ul>
        </div>
      </nav>
      <hr className="border-b-1 border-black" />
    </>
  );
}
