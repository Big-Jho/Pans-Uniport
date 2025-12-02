import { useContext } from "react";
import NavigationContext from "../../context/NavigationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Container from "../shared/Container";

function MobileMenu() {
  const { menuVisibility, toggleMenu } = useContext(NavigationContext);

  return (
    <div
      className={`absolute top-0 right-0 left-0 bg-white  bg-opacity-10 w-full min-h-[100vh] lg:hidden duration-500 transition-all delay-150 ${
        menuVisibility ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className={`bg-white h-full max-w-sm  shadow-xl`}>
        <Container className="relative">
          {/* Hamburger in MobileMenu */}
          <div className="absolute top-6 right-6 rounded-full  bg-ash text-center">
            <div className="w-8 h-8 flex justify-center items-center text-center hover:rotate-90 transition duration-sm text-white">
              <FontAwesomeIcon
                icon={faXmark}
                onClick={toggleMenu}
                className=" active:rotate-90 transition duration-sm text-white"
              />
            </div>
          </div>

          <div className="flex flex-col  items-center gap-5 -pl-4 my-12 min-h-screen">
            <Link
              onClick={() => toggleMenu(false)}
              to="/about"
              className="flex flex-row w-[80%]  p-3 px-6   uppercase   hover:-translate-y-0.5 shadow-md rounded-md duration-300 bg-gray/20 hover:bg-gray/70"
            >
              About Us
            </Link>
            <Link
              onClick={() => toggleMenu(false)}
              to="/blogs"
              className="flex flex-row w-[80%]  p-3 px-6   uppercase   hover:-translate-y-0.5 shadow-md rounded-md duration-300 bg-gray/20 hover:bg-gray/70"
            >
              Blogs
            </Link>
            <Link
              onClick={() => toggleMenu(false)}
              to="/pharm-writers"
              className="flex flex-row w-[80%]  p-3 px-6  uppercase   hover:-translate-y-0.5 shadow-md rounded-md duration-300 bg-gray/20 hover:bg-gray/70"
            >
              PharmWriters
            </Link>
            <Link
              onClick={() => toggleMenu(false)}
              to="/rx-diary"
              className="flex flex-row w-[80%]  p-3 px-6   uppercase   hover:-translate-y-0.5 shadow-md rounded-md duration-300 bg-gray/20 hover:bg-gray/70"
            >
              Rx Diary
            </Link>
            <Link
              onClick={() => toggleMenu(false)}
              to="/sport-update"
              className="flex flex-row w-[80%]  p-3 px-6   uppercase   hover:-translate-y-0.5 shadow-md rounded-md duration-300 bg-gray/20 hover:bg-gray/70"
            >
              Sport Update
            </Link>
            <Link
              onClick={() => toggleMenu(false)}
              to="/drug-spotlight"
              className="flex flex-row w-[80%]  p-3 px-6   uppercase   hover:-translate-y-0.5 shadow-md rounded-md duration-300 bg-gray/20 hover:bg-gray/70"
            >
              Drug Spotlight
            </Link>
            <Link
              onClick={() => toggleMenu(false)}
              to="/creativity"
              className="flex flex-row w-[80%]  p-3 px-6   uppercase   hover:-translate-y-0.5 shadow-md rounded-md duration-300 bg-gray/20 hover:bg-gray/70"
            >
              Creativity
            </Link>
            <Link
              onClick={() => toggleMenu(false)}
              to="/interviews"
              className="flex flex-row w-[80%]  p-3 px-6   uppercase   hover:-translate-y-0.5 shadow-md rounded-md duration-300 bg-gray/20 hover:bg-gray/70"
            >
              Interviews
            </Link>
            <Link
              onClick={() => toggleMenu(false)}
              to="/contact"
              className="flex flex-row w-[80%]  p-3 px-6   uppercase   hover:-translate-y-0.5 shadow-md rounded-md duration-300 bg-gray/20 hover:bg-gray/70"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default MobileMenu;
