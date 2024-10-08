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
            <div
              className={
                where === "/"
                  ? "text-[#F76C6C] underline"
                  : "hover:text-[#F76C6C] hover:underline cursor-pointer"
              }
            >
              <i className="fa-solid fa-house me-2"></i>
              <Link to="/">Home</Link>
            </div>

            <div
              className={
                where === "/compare"
                  ? "text-[#F76C6C] underline"
                  : "hover:text-[#F76C6C] hover:underline cursor-pointer"
              }
            >
              <i className="fa-solid fa-globe me-2"></i>
              <Link to="/compare">Compare</Link>
            </div>
            <div
              className={
                where === "/news"
                  ? "text-[#F76C6C] underline"
                  : "hover:text-[#F76C6C] hover:underline cursor-pointer"
              }
            >
              <i className="fa-solid fa-newspaper me-2"></i>
              <Link to="/news">News</Link>
            </div>
          </ul>
        </div>
      </nav>
      <hr className="border-b-1 border-black" />
    </>
  );
}
