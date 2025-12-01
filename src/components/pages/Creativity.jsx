import { useEffect } from "react";
import NavCombo from "../layout/NavCombo";
import Footer from "../layout/Footer";
import Container from "../shared/Container";

import creativityPosts from "../data/creativityPosts";

function Creativity() {
  const scrollTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => scrollTop(), []);

  return (
    <main>
      <NavCombo navColor="white" />
      <section>
        <Container className="pt-24 md:pt-28 lg:pt-40">
          <h2 className="big-header text-center">Creativity</h2>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {creativityPosts.map((post) => (
              <a className="space-y-4" href={`/creativity/${post.slug}`}>
                <h3 className="small-header text-ash/60">{post.category}</h3>
                <h2 className="big-header font-light">{post.title}</h2>
                <p className="text-ash/60">{post.date}</p>
              </a>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}

export default Creativity;
