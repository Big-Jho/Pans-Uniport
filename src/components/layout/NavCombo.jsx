import React from "react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

function NavCombo({ navColor }) {
  return (
    <section className="fixed top-0 left-0 w-full z-50">
      <div className="relative">
        <Navbar navColor={navColor} />
        <MobileMenu />
      </div>
    </section>
  );
}

export default NavCombo;
