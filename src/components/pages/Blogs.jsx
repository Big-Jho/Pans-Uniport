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

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((blog) => (
              <a className="space-y-4" href={`/blogs/${blog.slug}`}>
                <h3 className="small-header text-ash/60">{blog.category}</h3>
                <h2 className="big-header font-light">{blog.title}</h2>
                <p className="text-ash/60">{blog.date}</p>
              </a>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}

export default Blog;
