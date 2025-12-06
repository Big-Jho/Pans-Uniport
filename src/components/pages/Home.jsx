import { useEffect } from "react";
import Hero from "../layout/Hero";
import NavCombo from "../layout/NavCombo";
import Footer from "../layout/Footer";
import Showcase from "../layout/Showcase";
import HomeSwiper from "../layout/HomeSwiper";

import { SwiperSlide } from "swiper/react";

import blogPosts from "../data/blogPosts";
import rxDiaryPosts from "../data/rxDiaryPosts";

function Home() {
  const scrollTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => scrollTop(), []);

  return (
    <main>
      <NavCombo />
      <Hero />
      <HomeSwiper title={`Latest Blog Posts`}>
        {blogPosts.map((post) => (
          <SwiperSlide>
            <a href={`/blogs/${post.slug}`}>
              <div className="space-y-2 pb-6">
                <h4 className="small-header text-ash/60">{post.category}</h4>
                <img
                  src={post.coverImage}
                  alt={`cover-image`}
                  className="w-full"
                />
                <p className="text-xl text-black">{post.title}</p>
                <p className="small-header-lowercase">{post.date}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </HomeSwiper>

      <Showcase />

      <HomeSwiper title={`Explore Stories from Rx Diary`}>
        {rxDiaryPosts.map((post) => (
          <SwiperSlide>
            <a href={`/rx-diary/${post.slug}`}>
              <div className="space-y-2 pb-6">
                <h4 className="small-header text-ash/60">{post.category}</h4>
                <img
                  src={post.coverImage}
                  alt={`cover-image`}
                  className="w-full"
                />
                <p className="text-xl text-black">{post.title}</p>
                <p className="small-header-lowercase">{post.date}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </HomeSwiper>

      <Footer />
    </main>
  );
}

export default Home;
