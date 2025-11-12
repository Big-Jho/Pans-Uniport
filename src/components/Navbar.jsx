import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";
import Container from "./Container";
import NavLinks from "./NavLinks";
import PansLogo from "../assets/images/pans-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const { menuVisibility, toggleMenu } = useContext(NavigationContext);

  return (
    <>
      <section className="hidden lg:block w-full bg-ash text-white">
        <Container>
          <div className="flex flex-row justify-start items-center space-x-6">
            <Link to="/about" className="group inline-block">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
            <Link to="/about" className="group inline-block">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </Link>
            <Link to="/about" className="group inline-block">
              About
            </Link>
            <Link to="/contact" className="group inline-block">
              Contact
            </Link>
            <Link to="/donate" className="group inline-block">
              Donate
            </Link>
            <Link to="/subscribe" className="group inline-block">
              Subscribe
            </Link>
            <Link to="/alumni" className="group inline-block">
              Alumni
            </Link>
          </div>
        </Container>
      </section>

      <section className="w-full bg-transparent border-b border-gray-200">
        <Container>
          <div className="flex flex-row justify-between items-center">
            {/* Hamburger */}
            <div className="lg:hidden">
              <FontAwesomeIcon
                icon={menuVisibility ? faXmark : faBars}
                size="xl"
                onClick={toggleMenu}
                className="active:rotate-90 transition duration-sm text-white"
              />
            </div>

            {/* First Menu Links */}
            <div className="hidden lg:flex flex-row space-x-8 justify-between items-center ">
              <Link to="/blog" className="group inline-block">
                <NavLinks>Blog</NavLinks>
              </Link>
              <Link to="/pharm-writers" className="group inline-block">
                <NavLinks>PharmWritters</NavLinks>
              </Link>
              <Link to="/pharmschlife" className="group inline-block">
                <NavLinks>PharmSchool Life</NavLinks>
              </Link>
            </div>

            {/* Home  - Logo */}
            <Link to="/">
              <img src={PansLogo} alt="PANS-logo" width="70px" />
            </Link>

            {/* Second set of Links */}
            <div className="hidden lg:flex flex-row space-x-8 justify-between items-center">
              <Link to="/news" className="group inline-block">
                <NavLinks>News</NavLinks>
              </Link>
              <Link to="/story" className="group inline-block">
                <NavLinks>Story</NavLinks>
              </Link>

              <Link to="/creativity" className="group inline-block">
                <NavLinks>Creativity</NavLinks>
              </Link>

              <Link to="/opinions" className="group inline-block">
                <NavLinks>Opinions</NavLinks>
              </Link>
            </div>

            {/* Placeholder */}
            <div className="lg:hidden"></div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Navbar;
