import React from "react";
import Container from "../shared/Container";
// import BlackBg from "../../assets/images/black-background.jpg"
import Tag from "../shared/Tag";
import ScrollReveal from "../ScrollReveal";

function PharmWriters() {
  return (
    <>
      <section
        className="bg-blackBg bg-top bg-no-repeat bg-contain"
        style={{ backgroundSize: "100% 70%" }}
      >
        <Container>
          <ScrollReveal type="fromBottom">
            <div className="flex flex-col justify-center my-20 items-center md:items-end mt-56">
              <div className="max-w-sm">
                <Tag bg="white" rounded>
                  Recruitment
                </Tag>
                <h2 className="text-4xl md:text-5xl text-white mt-4 md:mt-6">
                  Are you PANSite?
                </h2>
                <p className="text-gray mt-3 md:mt-6 font-thin">
                  Then, you can be one of us. Only say the word, and we will get
                  back to you.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
        <Container>
          <ScrollReveal type="fromBottom">
            <div className="grid p-2 bg-white h-[70vh] w-full"></div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}

export default PharmWriters;
