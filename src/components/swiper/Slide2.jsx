import { Link } from "react-router-dom";
import { useSwiperSlide } from "swiper/react";

function Slide2() {
  const swiperSlide = useSwiperSlide();

  swiperSlide.isActive && console.log("Slide 2 is acrive");

  return (
    <div className="relative w-[100vw] h-[calc(100vh-2rem)] bg-slide2 bg-cover bg-center bg-opacity-10 slide-overlay">
      {/* Positioning */}

      {swiperSlide.isActive && (
        <div className="position-right  animate-slideInFromRight opacity-0">
          <div className="flex flex-col space-y-2 items-start">
            <h1 className="text-5xl tracking-wide text-white font-bold">
              Divers group of Writers
            </h1>
            <h4 className="text-blue-500 uppercase">Rahim fatima</h4>
            <Link
              to="/blog"
              className="flex flex-col items-center justify-center animate-pulse duration-lg"
            >
              <h4 className="text-base font-normal text-white">Read Post</h4>
              <div className="nav-underline h-0.5 w-full bg-white transition-width duration-lg"></div>
            </Link>
          </div>
        </div>
      )}

      {/* <div className="flex flex-col space-y-2 items-start">
        <h1 className="text-5xl tracking-wide text-white font-bold">
          Divers group of Writers
        </h1>
        <h4 className="text-blue-500 uppercase">Rahim fatima</h4>
        <Link
          to="/blog"
          className="flex flex-col items-center justify-center animate-pulse duration-lg"
        >
          <h4 className="text-base font-normal text-white">Read Post</h4>
          <div className="nav-underline h-0.5 w-full bg-white transition-width duration-lg"></div>
        </Link>
      </div> */}
    </div>
  );
}

export default Slide2;
