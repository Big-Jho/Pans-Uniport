import { useEffect } from "react";
import NavCombo from "../layout/NavCombo";
import Footer from "../layout/Footer";
import Container from "../shared/Container";

import blogPosts from "../data/blogPosts";

function Blog() {
  const scrollTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => scrollTop(), []);

  return (
    <main>
      <NavCombo navColor="white" />
      <section>
        <Container className="pt-24 md:pt-28 lg:pt-40">
          <h2 className="big-header text-center">Latest Blogs</h2>
          <div className="w-full xl:max-w-2xl mx-auto">
            {blogPosts.map((blog) => (
              <div className=""></div>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}

export default Blog;
