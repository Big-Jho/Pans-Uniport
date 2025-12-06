import React from "react";
import Container from "../shared/Container";
import Tag from "../shared/Tag";

import ScrollReveal from "../ScrollReveal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import writersExecutives from "../data/writersExecutives.json";

function Showcase() {
  return (
    <section className="bg-white">
      <Container className={`space-y-4 lg:space-y-8`}>
        {/* Grid 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0 lg:gap-x-8 items-center">
          {/* Card 1 */}
          <ScrollReveal
            type="fromBottom"
            className={`bg-conference bg-cover bg-no-repeat  bg-overlay`}
          >
            <div className="w-full h-full py-20 px-8 bg-black/35 flex flex-col items-start">
              <Tag
                bg={`white`}
                className={`rounded-sm text-sm bg-opacity-80 text-black font-normal mb-4`}
              >
                PANS
              </Tag>
              <p className="font-extralight text-4xl lg:text-3xl xl:text-4xl text-white tracking-wider">
                PANS UNIPORT Executives
              </p>
              <a
                href="/pans-executives"
                className="group block mt-16 md:mt-24 lg:mt-12 xl:mt-24"
              >
                <div className="space-x-2  flex flex-row justify-start items-center ">
                  <p className="text-center text-white font-light tracking-wide">
                    Meet the Executives
                  </p>
                  <FontAwesomeIcon icon={faArrowRight} className="text-white" />
                </div>
              </a>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal
            type="fromBottom"
            className="bg-gist bg-cover bg-right bg-no-repeat h-fit"
          >
            <div className="w-full h-full py-20 px-8 bg-white/30 flex flex-col  items-end">
              <Tag
                bg={`black`}
                className={`rounded-sm text-sm bg-opacity-80 text-white font-normal mb-4`}
              >
                PANS
              </Tag>
              <p className="font-extralight text-4xl lg:text-3xl xl:text-4xl text-black tracking-wider">
                All the Gist
              </p>
              <a
                href="/rx-diary"
                className="group block mt-16 md:mt-24 lg:mt-14 xl:mt-24"
              >
                <div className="space-x-2  flex flex-row justify-start items-center ">
                  <p className="text-center text-black font-light tracking-wide">
                    Read Gists
                  </p>
                  <FontAwesomeIcon icon={faArrowRight} className="text-black" />
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Grid 2 */}
        <div className="grid grid-cols-1 gap-y-4 lg:gap-y-8 xl:gap-y-0 lg:gap-x-8 lg:grid-cols-2 xl:grid-cols-3 justify-items-center w-full items-start justify-center">
          {/* Item 1 */}
          <ScrollReveal
            type="fromBottom"
            className="bg-medicine bg-cover bg-no-repeat h-fit lg:col-span-2 xl:col-span-1 w-full"
          >
            <div className="w-full h-full py-20 px-8 bg-white/30 flex flex-col  items-center gap-y-8">
              <Tag
                bg={`black`}
                className={`rounded-sm text-sm bg-opacity-80 text-white font-normal `}
              >
                PANS
              </Tag>
              <p className="font-extralight text-center text-4xl lg:text-3xl xl:text-4xl text-black tracking-wider">
                Explore Medicine Intelligence
              </p>
              <a href="/rx-diary" className="group block ">
                <div className="space-x-2  flex flex-row justify-start items-center ">
                  <p className="text-center text-black font-light tracking-wide">
                    Read More
                  </p>
                  <FontAwesomeIcon icon={faArrowRight} className="text-black" />
                </div>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal
            type={`fromBottom`}
            className={`col-span-2 grid grid-cols-3 lg:grid-cols-3 gap-x-4 lg:gap-x-8`}
          >
            {writersExecutives.map((writer) => (
              <div className="space-y-2" key={writer.id}>
                <div className="relative">
                  <img
                    src={writer.imageUrl}
                    alt={`${writer.name} - ${writer.position}`}
                    className="w-full"
                  />
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
            ))}
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

export default Showcase;
