import { useEffect } from "react";
import NavCombo from "../layout/NavCombo";
import Footer from "../layout/Footer";

function Contact() {
  const scrollTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => scrollTop(), []);

  return (
    <main>
      <NavCombo />
      <h1 className="text-9xl font-bold text-center mt-44">CONTACT US</h1>
      <Footer />
    </main>
  );
}

export default Contact;
