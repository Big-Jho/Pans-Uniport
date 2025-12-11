import { useEffect } from "react";
import NavCombo from "../layout/NavCombo";
import Footer from "../layout/Footer";
import Container from "../shared/Container";

import interviews from "../data/interviews";
import Card from "../shared/Card";
import ScrollReveal from "../ScrollReveal";

function Interviews() {
  const scrollTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => scrollTop(), []);

  return (
    <main>
      <NavCombo navColor="white" />
      <section>
        <Container className="pt-24 md:pt-28 lg:pt-40">
          <h2 className="big-header text-center">Interviews</h2>

          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {interviews.map((post) => (
              <ScrollReveal type="fromBottom" key={post.id}>
                <Card>
                  <a className="space-y-4" href={`/interviews/${post.slug}`}>
                    <h3 className="small-header text-ash/60">
                      {post.category}
                    </h3>
                    <img
                      src={post.coverImage}
                      alt={`cover-image`}
                      className="w-full"
                    />
                    <h2 className="text-xl font-light">{post.title}</h2>
                    <p className="text-ash/60">{post.date}</p>
                  </a>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}

export default Interviews;
