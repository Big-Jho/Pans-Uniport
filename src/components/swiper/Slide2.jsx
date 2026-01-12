import { Link } from "react-router-dom";
import { useSwiperSlide } from "swiper/react";
import Container from "../shared/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Slide2() {
  const swiperSlide = useSwiperSlide();

  return (
    <div className="w-[100vw] h-[calc(100vh-2rem)] bg-fatimaBg bg-cover bg-center bg-opacity-10 slide-overlay">
      {/* Positioning */}
      {swiperSlide.isActive && (
        <Container className="relative h-full">
          <div className="position-right hero-swiper-content animate-slideInFromRight opacity-0 h-full">
            <div className="flex flex-col space-y-4 items-start md:items-end opacity-70">
              <h1 className="text-3xl md:text-4xl md:text-right lg:text-5xl lg:tracking-wide text-white font-bold">
                Diverse group of Writers
              </h1>
              <h4 className="small-header text-gray">Rahim fatima</h4>
              <Link
                to="/pharm-writers"
                className="flex flex-col items-center justify-center "
              >
                <div className="space-x-2  flex flex-row justify-start items-center ">
                  <p className="text-center text-white font-light tracking-wide">
                    Read Posts
                  </p>
                  <FontAwesomeIcon icon={faArrowRight} className="text-white" />
                </div>
              </Link>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}

export default Slide2;
