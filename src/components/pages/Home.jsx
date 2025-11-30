import { useEffect } from "react";
import Hero from "../layout/Hero";
import NavCombo from "../layout/NavCombo";
import Footer from "../layout/Footer";
import Showcase from "../layout/Showcase";

function Home() {
  const scrollTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => scrollTop(), []);

  return (
    <main>
      <NavCombo />
      <Hero />
      <Showcase />
      <Footer />
    </main>
  );
}

export default Home;
