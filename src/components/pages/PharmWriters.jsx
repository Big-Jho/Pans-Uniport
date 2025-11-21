import { useEffect } from "react";
import NavCombo from "../layout/NavCombo";
import Footer from "../layout/Footer";
import Container from "../shared/Container";
import Tag from "../shared/Tag";
import ScrollReveal from "../ScrollReveal";
import RecruitmentForm from "../layout/RecruitmentForm";

function PharmWriters() {
  const scrollTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => scrollTop(), []);

  return (
    <main>
      <NavCombo />
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
            {/* @todo Photo gallery */}
            <div className="grid p-2 bg-white h-[70vh] w-full"></div>
          </ScrollReveal>
        </Container>
      </section>
      <RecruitmentForm />
      <Footer />
    </main>
  );
}

export default PharmWriters;
