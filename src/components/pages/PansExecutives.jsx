import { useEffect } from "react";
import NavCombo from "../layout/NavCombo";
import Footer from "../layout/Footer";
import Container from "../shared/Container";
// import Tag from "../shared/Tag";
import ScrollReveal from "../ScrollReveal";
import RecruitmentForm from "../layout/RecruitmentForm";

import executives from "../data/executives.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import substackPng from "../../assets/images/substack.png";

function PharmWriters() {
  const scrollTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => scrollTop(), []);

  return (
    <main id="pharmwriters">
      <NavCombo />
      <section
        className="bg-blackBgSm md:bg-blackBgMd xl:bg-blackBg bg-top bg-no-repeat bg-contain"
        id="hero"
        style={{ backgroundSize: "100% 85vh" }}
      >
        {/* <Container>
          <ScrollReveal type="fromBottom">
            <div className="flex flex-col justify-center my-20 items-center md:items-end mt-56">
              <div className="max-w-[25rem]">
                <Tag bg="white" rounded>
                  Recruitment
                </Tag>
                <h2 className="text-4xl md:text-5xl text-white mt-4 md:mt-6 -px-2">
                  Are you a PANSite?
                </h2>
                <p className="text-gray mt-3 md:mt-6 font-thin">
                  Then, you can be one of us. Only say the word, and we will get
                  back to you.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container> */}

        {/* Photo gallery */}
        <Container className={`pt-44`}>
          <div className="flex flex-col justify-center items-center  p-8 lg:p-24 bg-white w-full">
            <div className="w-full xl:max-w-3lg mx-auto">
              <ScrollReveal type={`fromBottom`}>
                <h4 className="small-header my-2 text-blue-500">outstanding</h4>
                <h2 className="text-3xl lg:text-4xl mb-8">
                  Meet The Executives
                </h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3  justify-items-center">
                {executives.map((writer) => (
                  <ScrollReveal type="fromBottom" key={writer.id}>
                    <div className="space-y-2 group">
                      <div className="relative">
                        <img
                          src={writer.imageUrl}
                          alt={`${writer.name} - ${writer.position}`}
                          className="w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-md flex flex-row justify-center items-center space-x-2">
                          {writer.socials.linkedin && (
                            <a
                              href={writer.socials.linkedin}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FontAwesomeIcon
                                icon={faLinkedin}
                                size="xl"
                                className="text-white"
                              />
                            </a>
                          )}

                          {writer.socials.twitter && (
                            <a
                              href={writer.socials.twitter}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FontAwesomeIcon
                                icon={faTwitter}
                                size="xl"
                                className="text-white"
                              />
                            </a>
                          )}

                          {writer.socials.instagram && (
                            <a
                              href={writer.socials.instagram}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FontAwesomeIcon
                                icon={faInstagram}
                                size="xl"
                                className="text-white"
                              />
                            </a>
                          )}

                          {writer.socials.facebook && (
                            <a
                              href={writer.socials.facebook}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FontAwesomeIcon
                                icon={faFacebook}
                                size="xl"
                                className="text-white"
                              />
                            </a>
                          )}

                          {writer.socials.tiktok && (
                            <a
                              href={writer.socials.tiktok}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FontAwesomeIcon
                                icon={faTiktok}
                                size="xl"
                                className="text-white"
                              />
                            </a>
                          )}

                          {writer.socials.substack && (
                            <a
                              href={writer.socials.substack}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src={substackPng}
                                alt="subtrack logo"
                                className="w-8"
                              />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="-space-y-1">
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
            </div>
          </div>
        </Container>
      </section>
      <RecruitmentForm />
      <Footer />
    </main>
  );
}

export default PharmWriters;
