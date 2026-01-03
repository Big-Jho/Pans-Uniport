import { useContext } from "react";
import NavigationContext from "../../context/NavigationContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUserGroup } from "@fortawesome/free-solid-svg-icons";

function MobileMenu({ navColor }) {
  const { menuVisibility, toggleMenu, scrolled } =
    useContext(NavigationContext);

  return (
    <div
      className={` px-4 container mx-auto mt-4 relative  lg:hidden duration-100 transition-all rounded-lg  ${
        menuVisibility ? "block" : "hidden"
      } ${scrolled || navColor === "white" ? "text-white" : "text-primary"}`}
    >
      <div
        className={`shadow-xl p-6 container flex flex-col  items-center justify-center gap-4 rounded-lg ${
          scrolled || navColor === "white" ? "bg-primary" : "bg-white"
        }`}
      >
        {/* blogs */}
        <Link
          onClick={() => toggleMenu(false)}
          to="/blogs"
          className="hover:-translate-y-0.5 duration-300 text-center font-semibold"
        >
          Blogs
        </Link>

        {/* rx-diary */}
        <Link
          onClick={() => toggleMenu(false)}
          to="/rx-diary"
          className="hover:-translate-y-0.5 duration-300 text-center font-semibold"
        >
          Rx Diary
        </Link>

        {/* Creativity */}
        <Link
          onClick={() => toggleMenu(false)}
          to="/creativity"
          className="hover:-translate-y-0.5 duration-300 text-center font-semibold"
        >
          Creativity
        </Link>

        {/* Intervies */}
        <Link
          onClick={() => toggleMenu(false)}
          to="/interviews"
          className="hover:-translate-y-0.5 duration-300 text-center font-semibold"
        >
          Interviews
        </Link>

        {/* Sport Update */}
        <Link
          onClick={() => toggleMenu(false)}
          to="/sport-update"
          className="hover:-translate-y-0.5 duration-300 text-center font-semibold"
        >
          Sport Update
        </Link>

        {/* Pharmwriters */}
        <Link
          onClick={() => toggleMenu(false)}
          to="/pharm-writers"
          className="hover:-translate-y-0.5 duration-300 text-center font-semibold"
        >
          PharmWriters
        </Link>

        {/* Drug spotlight */}
        <Link
          onClick={() => toggleMenu(false)}
          to="/drug-spotlight"
          className="hover:-translate-y-0.5 duration-300 text-center font-semibold"
        >
          Drug Spotlight
        </Link>

        {/* Horizontal rule */}
        <div
          class={`w-full h-0.5 ${
            scrolled || navColor === "white" ? "bg-white" : "bg-primary"
          }`}
        ></div>

        {/* Buttons below */}
        <Link
          onClick={() => toggleMenu(false)}
          to="/about"
          className={`${
            scrolled || navColor === "white"
              ? "bg-white text-primary"
              : "bg-primary text-white"
          } w-full rounded-full px-6 py-3  flex items-center justify-center gap-x-4  duration-300 text-center hover:bg-opacity-60`}
        >
          <FontAwesomeIcon icon={faUserGroup} />
          <span>About Us</span>
        </Link>

        <Link
          onClick={() => toggleMenu(false)}
          to="/contact"
          className={`${
            scrolled || navColor === "white"
              ? "bg-white text-primary"
              : "bg-primary text-white"
          } w-full rounded-full  px-6 py-3 flex items-center justify-center gap-x-4  duration-300 text-center hover:bg-opacity-60`}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Contact Us</span>
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;
