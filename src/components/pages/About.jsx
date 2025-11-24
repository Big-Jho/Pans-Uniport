import { useEffect } from "react";
import NavCombo from "../layout/NavCombo";
import Footer from "../layout/Footer";
import Container from "../shared/Container";
import ScrollReveal from "../ScrollReveal";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import substackPng from "../../assets/images/substack.png";

import TeamPicture from "../../assets/images/group.jpeg";
import writersExecutives from "../data/writersExecutives.json";

function About() {
  const scrollTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => scrollTop(), []);

  // writersExecutives.forEach((writer) => console.log(writer));

  return (
    <main>
      <NavCombo />
      <section className="bg-ash bg-cover bg-no-repeat">
        <Container>
          <ScrollReveal type="fromBottom">
            <div className="max-w-[25rem] flex justify-center items-center text-center  h-[70vh] mx-auto">
              <div className="mt-20">
                <h2 className="text-4xl md:text-5xl text-white mt-4 md:mt-6 -px-2">
                  About Us
                </h2>
                <p className="text-gray mt-3 md:mt-6 small-header">
                  PANS EDITORIAL TEAM
                </p>
                <p className="text-gray mt-3 md:mt-6">
                  The Literary Roundtable
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-white  py-8">
        <Container>
          <ScrollReveal type="fromBottom">
            <div className="w-full xl:max-w-2xl mx-auto">
              <h2 className="text-black big-header">Who We Are</h2>
              <p className="text-ash mb-6 opacity-85">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur vitae ad omnis voluptatem molestiae error commodi
                minus officiis tempora quasi, beatae corrupti facilis
                perferendis nisi odit voluptas necessitatibus eaque tempore
                ratione quam expedita voluptate illum esse explicabo. Libero,
                porro veniam!
              </p>
              <p className="text-ash mb-6 opacity-85">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                maxime dolor alias ab distinctio officia laboriosam porro
                accusamus dignissimos quod, dicta facilis magni vero doloremque
                impedit perspiciatis illum at recusandae voluptas rerum maiores
                sed! Quidem nostrum quam reiciendis placeat laudantium.
              </p>
              <p className="text-ash mb-6 opacity-85">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                at, est unde, eos totam pariatur recusandae ab excepturi aperiam
                tempora, dolorum quasi cupiditate qui quis esse! Quibusdam odio
                enim excepturi, illum tenetur ipsam omnis error, esse ullam est
                dolore perferendis?
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-white py-8">
        <Container>
          <ScrollReveal type="fromBottom">
            <img
              src={TeamPicture}
              alt="Editorial Team Pics"
              className="w-full"
            />
            {/* </div> */}
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-white  py-8">
        <Container>
          <ScrollReveal type="fromBottom">
            <div className="w-full xl:max-w-2xl mx-auto">
              <h2 className="big-header">The Team</h2>
              <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-4 justify-center">
                {writersExecutives.map((writer) => (
                  <ScrollReveal type="fromBottom" key={writer.id}>
                    <div className="space-y-3 group">
                      <div className="relative">
                        <img
                          src={writer.imageUrl}
                          alt={`${writer.name} - ${writer.position}`}
                          className="w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-md flex flex-row justify-center items-center space-x-2">
                          {writer.socials.linkedin && (
                            <a href={writer.socials.linkedin} _blank="true">
                              <FontAwesomeIcon
                                icon={faLinkedin}
                                size="xl"
                                className="text-white"
                              />
                            </a>
                          )}

                          {writer.socials.twitter && (
                            <a href={writer.socials.twitter} _blank="true">
                              <FontAwesomeIcon
                                icon={faTwitter}
                                size="xl"
                                className="text-white"
                              />
                            </a>
                          )}

                          {writer.socials.instagram && (
                            <a href={writer.socials.instagram} _blank="true">
                              <FontAwesomeIcon
                                icon={faInstagram}
                                size="xl"
                                className="text-white"
                              />
                            </a>
                          )}

                          {writer.socials.facebook && (
                            <a href={writer.socials.facebook} _blank="true">
                              <FontAwesomeIcon
                                icon={faFacebook}
                                size="xl"
                                className="text-white"
                              />
                            </a>
                          )}

                          {writer.socials.tiktok && (
                            <a href={writer.socials.tiktok} _blank="true">
                              <FontAwesomeIcon
                                icon={faTiktok}
                                size="xl"
                                className="text-white"
                              />
                            </a>
                          )}

                          {writer.socials.substack && (
                            <a href={writer.socials.substack} _blank="true">
                              <img
                                src={substackPng}
                                alt="subtrack logo"
                                className="w-8"
                              />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="">
                        <h4 className="text-black text-center tracking-wide">
                          {writer.name}
                        </h4>
                        <p className="text-ash text-center tracking-wide opacity-60">
                          {writer.position}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <Link to="/pharm-writers">
                <button className="border-black border-2 bg-white w-32 p-3 my-6 group mx-auto block">
                  <div className=" -space-x-4 group-hover:space-x-2   flex flex-row justify-center items-center mx-auto">
                    <p className="text-center text-ash opacity-60">View All</p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-black/60  opacity-0 group-hover:opacity-100  transition-translate duration-md"
                    />
                  </div>
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

export default About;
