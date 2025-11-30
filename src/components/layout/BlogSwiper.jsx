import { useRef } from "react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import ScrollReveal from "../ScrollReveal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import Container from "../shared/Container";
// import Card from "../shared/Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SwiperNavigation() {
  const swiper = useSwiper();

  return (
    <div className="swiper-btn-wraper">
      <div
        className="btn-prev swiper-btn swiper-button-prev"
        onClick={() => swiper.slidePrev()}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div
        className="btn-next swiper-btn swiper-button-next"
        onClick={() => swiper.slideNext()}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
}

function BlogSwiper() {
  const swiperRef = useRef(null);

  // const swiper = useSwiper();

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
    <section className="my-20">
      <ScrollReveal type="fromBottom">
        <Container>
          <h2 className="text-2xl md:text-3xl mb-8 text-center">
            Latest Blog Posts
          </h2>
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3,
              },
              1536: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            pagination={{ clickable: true }}
            onSwiper={onSwiperInit}
            className="group "
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="space-y-2 pb-6">
                <h4 className="small-header">opinion</h4>
                <p className="text-xl text-black">
                  Think Health, Think Pharmacist: Pharmacist as a primary health
                  care provider
                </p>
                <p className="small-header-lowercase">October 7, 2025</p>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="space-y-2 pb-6">
                <h4 className="small-header">opinion</h4>
                <p className="text-xl text-black">
                  Think Health, Think Pharmacist: Pharmacist as a primary health
                  care provider
                </p>
                <p className="small-header-lowercase">October 7, 2025</p>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="space-y-2 pb-6">
                <h4 className="small-header">opinion</h4>
                <p className="text-xl text-black">
                  Think Health, Think Pharmacist: Pharmacist as a primary health
                  care provider
                </p>
                <p className="small-header-lowercase">October 7, 2025</p>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="space-y-2 pb-6">
                <h4 className="small-header">opinion</h4>
                <p className="text-xl text-black">
                  Think Health, Think Pharmacist: Pharmacist as a primary health
                  care provider
                </p>
                <p className="small-header-lowercase">October 7, 2025</p>
              </div>
            </SwiperSlide>

            {/* Slide 5 */}
            <SwiperSlide>
              <div className="space-y-2 pb-6">
                <h4 className="small-header">opinion</h4>
                <p className="text-xl text-black">
                  Think Health, Think Pharmacist: Pharmacist as a primary health
                  care provider
                </p>
                <p className="small-header-lowercase">October 7, 2025</p>
              </div>
            </SwiperSlide>

            {/* Slide 6 */}
            <SwiperSlide>
              <div className="space-y-2 pb-6">
                <h4 className="small-header">opinion</h4>
                <p className="text-xl text-black">
                  Think Health, Think Pharmacist: Pharmacist as a primary health
                  care provider
                </p>
                <p className="small-header-lowercase">October 7, 2025</p>
              </div>
            </SwiperSlide>
            <div className="hidden md:block">
              <SwiperNavigation />
            </div>
          </Swiper>
        </Container>
      </ScrollReveal>
    </section>
  );
}

export default BlogSwiper;
