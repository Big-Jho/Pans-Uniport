import { useEffect } from "react";
import NavCombo from "../layout/NavCombo";
import Footer from "../layout/Footer";

import Container from "../shared/Container";
function NotFound() {
  const scrollTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => scrollTop(), []);

  return (
    <main>
      <NavCombo navColor="white" />
      <section className="mt-32">
        <Container>
          <h1 className="text-4xl md:text-7xl font-bold text-center py-6 md:py-10">
            Page not found
          </h1>
        </Container>
      </section>
      <Footer />
    </main>
  );
}

export default NotFound;
