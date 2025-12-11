import { Link } from "react-router-dom";
import { useSwiperSlide } from "swiper/react";
import Container from "../shared/Container";

function Slide2() {
  const swiperSlide = useSwiperSlide();

  return (
    <div className="w-[100vw] h-[calc(100vh-2rem)] bg-fatimaBg bg-cover bg-center bg-opacity-10 slide-overlay">
      {/* Positioning */}
      {swiperSlide.isActive && (
        <Container className="relative h-full">
          <div className="position-right hero-swiper-content animate-slideInFromRight opacity-0 h-full">
            <div className="flex flex-col space-y-2 items-start">
              <h1 className="text-3xl md:text-4xl lg:text-5xl lg:tracking-wide text-white">
                Divers group of Writers
              </h1>
              <h4 className="small-header text-gray">Rahim fatima</h4>
              <Link
                to="/blog"
                className="flex flex-col items-center justify-center animate-pulse duration-lg"
              >
                <h4 className="text-base font-normal text-white">Read Post</h4>
                <div className="nav-underline h-0.5 w-full bg-white transition-width duration-lg"></div>
              </Link>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}

export default Slide2;
