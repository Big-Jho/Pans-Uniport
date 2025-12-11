import { useRef } from "react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/autoplay";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// IMPORTING ALL SWIPER-SLIDES
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
// import Slide4 from "./Slide4";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SwiperNavigation() {
  const swiper = useSwiper();

  return (
    <div className>
      <div className="swiper-button-prev " onClick={() => swiper.slidePrev()}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="swiper-button-next " onClick={() => swiper.slideNext()}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
}

function HeroSwiper() {
  const swiperRef = useRef(null);

  const onSwiperInit = (swiper) => {
    swiperRef.current = swiper;

    // Set initial speed for autoplay transitions
    swiper.params.speed = 1000;

    // When user starts manual swipe, speed is faster for responsiveness
    swiper.on("touchStart", () => {
      swiper.params.speed = 300;
    });

    // When slide transition ends, reset speed to autoplay speed
    swiper.on("transitionEnd", () => {
      swiper.params.speed = 1000;
    });
  };

  return (
    <section className="h-[calc(100vh-2rem)] bg-red-200" id="hero">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false, speed: 1000 }}
        loop={true}
        pagination={{ clickable: true }}
        onSwiper={onSwiperInit}
        className="group"
        // onSlideChange={}
      >
        <SwiperSlide className="w-screen ">
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide className="w-screen">
          <Slide2 />
        </SwiperSlide>
        <SwiperSlide className="w-screen">
          <Slide3 />
        </SwiperSlide>
        {/* <SwiperSlide className="w-screen">
          <Slide4 />
        </SwiperSlide> */}
        <div className="hidden md:block">
          <SwiperNavigation />
        </div>
      </Swiper>
    </section>
  );
}

export default HeroSwiper;
