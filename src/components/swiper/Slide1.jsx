import { Link } from "react-router-dom";
import { SwiperSlide, useSwiperSlide } from "swiper/react";

function Slide1() {
  const swiperSlide = useSwiperSlide();

  return (
    <div className="relative w-[100vw] h-[calc(100vh-2rem)] bg-slide1 bg-cover bg-center bg-opacity-10 slide-overlay">
      {/* Positioning */}
      {swiperSlide.isActive && (
        <div className="position-left animate-slideInFromUnder opacity-0">
          <div className="flex flex-col space-y-2 items-start">
            <h1 className="text-5xl tracking-wide text-white font-bold">
              PANS Editorial Team
            </h1>
            <h4 className="text-blue-500">OUR NEW EXECUTIVES</h4>
            <Link
              to="/blog"
              className="flex flex-col items-center justify-center animate-bounce duration-lg"
            >
              <h4 className="text-base font-normal text-white">Read Post</h4>
              <div className="nav-underline h-0.5 w-full bg-white"></div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Slide1;
