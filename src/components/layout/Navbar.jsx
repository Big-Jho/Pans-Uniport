import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import NavigationContext from "../../context/NavigationContext";
import Container from "../shared/Container";
import NavLinks from "../NavLinks";
import PansLogo from "../../assets/images/pans-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "./Hamburger";

// Importing Social Icons
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import substackPng from "../../assets/images/substack.png";

function Navbar({ navColor }) {
  const { scrolled } = useContext(NavigationContext);

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
              <FontAwesomeIcon icon={faTiktok} size="lg" />
            </a>
            <a
              href="https://substack.com/@pansuniporteditorialteam"
              rel="noreferrer"
              target="_blank"
              className="group inline-block"
            >
              <img src={substackPng} alt="subtrack logo" className="w-7" />
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

      {/* Main Menu */}
      <section
        className={`w-full ${
          scrolled || navColor === "white"
            ? "bg-white border-b border-gray shadow-lg"
            : "bg-transparent"
        }`}
      >
        <Container className="py-0 pt-2">
          <div className="grid grid-cols-12 justify-center  py-3 items-center">
            {/* Hamburger */}
            <Hamburger navColor={navColor} />

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
            <div className="col-span-10 lg:col-span-2">
              <Link to="/" className="mx-auto ">
                <div className="flex flex-row justify-center items-center gap-1">
                  <img src={PansLogo} alt="PANS-logo" className={`w-10`} />
                  <span
                    className={`text-2xl font-bold pt-2 ${
                      scrolled || navColor === "white"
                        ? "text-primary"
                        : "text-white"
                    }`}
                    style={{ fontFamily: ["Myriad Pro", "sans-serif"] }}
                  >
                    UNIPORT
                  </span>
                </div>
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
