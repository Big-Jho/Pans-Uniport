import React from "react";
import Container from "../shared/Container";
import NavLinks from "../NavLinks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import substackPng from "../../assets/images/substack.png";
import ScrollReveal from "../ScrollReveal";

function Footer() {
  return (
    <>
      <section className="pt-16 border-y  border-gray">
        <section className="pb-8">
          {/* Footer Link Section  */}
          <ScrollReveal type="fromBottom">
            <Container className="flex flex-col items-center  md:space-y-0 md:flex-row md:justify-between md:items-start">
              <div className="w-full md:w-1/2 hidden md:block">
                <div className="">
                  <div className="bg-white w-80 mx-auto">
                    <h4 className="small-header text-black pb-4 text-center w-80 pl-6">
                      Pans Uniport
                    </h4>
                    <div className="grid grid-cols-2 mx-auto gap-x-6 gap-y-2">
                      <div className="flex flex-row justify-end">
                        <Link to="/" className="group">
                          <NavLinks
                            color="black"
                            shade="ash"
                            className="font-light"
                          >
                            Home
                          </NavLinks>
                        </Link>
                      </div>

                      <div className="flex flex-row justify-start">
                        <Link to="/about" className="group">
                          <NavLinks
                            color="black"
                            shade="ash"
                            className="font-light"
                          >
                            About Us
                          </NavLinks>
                        </Link>
                      </div>

                      <div className="flex flex-row justify-end">
                        <Link to="/contact" className="group">
                          <NavLinks
                            color="black"
                            shade="ash"
                            className="font-light"
                          >
                            Contact
                          </NavLinks>
                        </Link>
                      </div>

                      <div className="flex flex-row justify-start">
                        <Link to="/pharm-writers" className="group">
                          <NavLinks
                            color="black"
                            shade="ash"
                            className="font-light"
                          >
                            PharmWriters
                          </NavLinks>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------- */}
              <div className="flex flex-col items-center w-1/2">
                <div className="flex flex-row justify-end">
                  <div>
                    <h4 className="small-header text-ash pb-4 text-center">
                      Follow us
                    </h4>
                    <div className="bg-white flex flex-row justify-center items-center gap-x-6">
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
                        <img
                          src={substackPng}
                          alt="subtrack logo"
                          className="w-7 invert"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </ScrollReveal>
        </section>
        <section className="pb-16">
          <ScrollReveal type="fromBottom">
            <Container>
              <div className="flex flex-col justify-center items-center space-y-8 max-w-md mx-auto">
                <h2 className="text-4xl">Sign up now</h2>
                <p className="text-ash font-thin">
                  Be the first to know about our new posts and exclusive gist.
                </p>

                <form className="flex flex-col space-x-0 space-y-3 md:flex-row md:space-x-1 md:space-y-0  justify-center w-full">
                  <input
                    type="text"
                    className="border border-ash p-3 px-6 text-ash w-full  rounded-md rounded-b-none md:rounded-md md:rounded-r-none focus:outline-none md:text-left text-center font-thin"
                    placeholder="Your Email Address"
                  />
                  <button className="p-3 px-6 bg-black text-white min-w-fit rounded-md rounded-t-none md:rounded-md md:rounded-l-none hover:bg-opacity-80">
                    Sign up
                  </button>
                </form>
              </div>
            </Container>
          </ScrollReveal>
        </section>
      </section>

      {/* Main footer */}
      <section className="relative p-6">
        <p className="text-center text-sm text-ash opacity-60">
          &copy;2025-2026 PANS Editorial Team
        </p>
        <div className="absolute right-4 top-0 flex flex-col justify-center items-center h-full">
          <div
            className="group hover:border-black h-10 w-10 rounded-full border-gray border-[2px] flex flex-col justify-center items-center transition-all duration-md"
            onClick={() => window.scroll(0, 0)}
          >
            <FontAwesomeIcon icon={faArrowUp} size="md" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
