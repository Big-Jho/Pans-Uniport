import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";

import { Link } from "react-router-dom";
import Container from "./Container";

function MobileMenu() {
  const { menuVisibility } = useContext(NavigationContext);

  return (
    <div
      className={`absolute top-[102px] right-0 left-0 bg-white max-w-sm h-[calc(100vh-102px)] shadow-xl duration-500 transition-all delay-150 lg:hidden ${
        menuVisibility ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Container>
        <div className="flex flex-col justify-center items-start space-y-8 pl-12 mt-10">
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
  );
}

export default MobileMenu;
