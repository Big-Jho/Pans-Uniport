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
      className={`absolute top-0 right-0 left-0 bg-white  bg-opacity-10 w-full h-[100vh] lg:hidden duration-500 transition-all delay-150 ${
        menuVisibility ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className={` bg-white h-full max-w-sm  shadow-xl  `}>
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

          <div className="flex flex-col  items-start space-y-8 pl-12 my-12 min-h-screen">
            <Link
              to="/blog"
              className="flex flex-row items-center justify-center group uppercase space-x-2  hover:translate-x-2 duration-300"
            >
              <div className="w-1 h-8 bg-gray-300 block"></div>
              <span>Blog</span>
            </Link>
            <Link
              to="/pharm-writers"
              className="group flex flex-row items-center justify-center uppercase space-x-2  hover:translate-x-2 duration-300"
            >
              <div className="w-1 h-8 bg-gray-300 block"></div>
              <span>PharmWritters</span>
            </Link>
            <Link
              to="/pharmschlife"
              className="flex flex-row items-center justify-center group uppercase space-x-2  hover:translate-x-2 duration-300"
            >
              <div className="w-1 h-8 bg-gray-300 block"></div>
              <span>PharmSchool Life </span>
            </Link>
            <Link
              to="/news"
              className="flex flex-row items-center justify-center group uppercase space-x-2  hover:translate-x-2 duration-300"
            >
              <div className="w-1 h-8 bg-gray-300 block"></div>
              <span>News</span>
            </Link>
            <Link
              to="/story"
              className="flex flex-row items-center justify-center group uppercase space-x-2  hover:translate-x-2 duration-300"
            >
              <div className="w-1 h-8 bg-gray-300 block"></div>
              <span>Story</span>
            </Link>
            <Link
              to="/creativity"
              className="flex flex-row items-center justify-center group uppercase space-x-2  hover:translate-x-2 duration-300"
            >
              <div className="w-1 h-8 bg-gray-300 block"></div>
              <span>Creativity</span>
            </Link>
            <Link
              to="/opinions"
              className="flex flex-row items-center justify-center group uppercase space-x-2  hover:translate-x-2 duration-300"
            >
              <div className="w-1 h-8 bg-gray-300 block"></div>
              <span>Opinions</span>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default MobileMenu;
