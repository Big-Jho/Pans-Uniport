import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import NavigationContext from "../../context/NavigationContext";
import Container from "../shared/Container";
import NavLinks from "../NavLinks";
import PansLogo from "../../assets/images/pans-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Navbar({ navColor }) {
  const { menuVisibility, toggleMenu, scrolled } =
    useContext(NavigationContext);

  return (
    <>
      <section
        className={`hidden w-full bg-ash text-white ${
          scrolled ? "hidden" : "lg:block"
        }`}
      >
        <Container>
          <div className="flex flex-row justify-start items-center space-x-6 font-thin">
            <a
              href="https://www.instagram.com/pans.uniport?"
              rel="noreferrer"
              target="_blank"
              className="group inline-block"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://www.tiktok.com/@pansuniport?"
              rel="noreferrer"
              target="_blank"
              className="group inline-block"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <Link to="/about" className="group inline-block">
              About
            </Link>
            <Link to="/contact" className="group inline-block">
              Contact
            </Link>
            <Link to="/subscribe" className="group inline-block">
              Subscribe
            </Link>
          </div>
        </Container>
      </section>

      <section
        className={`w-full ${
          scrolled || navColor === "white"
            ? "bg-white border-b border-gray shadow-lg"
            : "bg-transparent"
        }`}
      >
        <Container className="py-0 pt-2">
          <div className="grid grid-cols-11 justify-center  items-center">
            {/* Hamburger */}
            <div className="lg:hidden col-span-1">
              <FontAwesomeIcon
                icon={menuVisibility ? faXmark : faBars}
                size="xl"
                onClick={toggleMenu}
                className={`active:rotate-90 transition duration-sm ${
                  scrolled || navColor === "white" ? "text-black" : "text-white"
                }`}
              />
            </div>

            {/* First Menu Links */}
            <div className="hidden lg:flex flex-row gap-x-8 justify-start items-center col-span-5">
              <Link to="/blogs" className="group inline-block">
                <NavLinks
                  shade={scrolled || navColor === "white" ? "black" : "white"}
                >
                  Blogs
                </NavLinks>
              </Link>
              <Link to="/pharm-writers" className="group inline-block">
                <NavLinks
                  shade={scrolled || navColor === "white" ? "black" : "white"}
                >
                  PharmWriters
                </NavLinks>
              </Link>
              <Link to="/rx-diary" className="group inline-block">
                <NavLinks
                  shade={scrolled || navColor === "white" ? "black" : "white"}
                >
                  Rx Diary
                </NavLinks>
              </Link>
              <Link to="/creativity" className="group inline-block">
                <NavLinks
                  shade={scrolled || navColor === "white" ? "black" : "white"}
                >
                  Creativity
                </NavLinks>
              </Link>
            </div>

            {/* Home  - Logo */}
            <div className="col-span-9 lg:col-span-1">
              <Link to="/" className="mx-auto ">
                <img
                  src={PansLogo}
                  alt="PANS-logo"
                  className={`mx-auto w-[50px] md:w-[50px] ${
                    scrolled && "w-[30px]"
                  }`}
                />
              </Link>
            </div>

            {/* Second set of Links */}
            <div className="hidden lg:flex flex-row space-x-8 items-center justify-end col-span-5">
              <Link to="/sport-update" className="group inline-block">
                <NavLinks
                  shade={scrolled || navColor === "white" ? "black" : "white"}
                >
                  Sport Update
                </NavLinks>
              </Link>
              <Link to="/drug-spotlight" className="group inline-block">
                <NavLinks
                  shade={scrolled || navColor === "white" ? "black" : "white"}
                >
                  Drug Spotlight
                </NavLinks>
              </Link>

              <Link to="/interviews" className="group inline-block">
                <NavLinks
                  shade={scrolled || navColor === "white" ? "black" : "white"}
                >
                  Interviews
                </NavLinks>
              </Link>
            </div>

            {/* Placeholder */}
            <div className="lg:hidden col-span-1"></div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Navbar;
