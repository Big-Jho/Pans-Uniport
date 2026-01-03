import React from "react";
import { useState, useContext } from "react";
import NavigationContext from "../../context/NavigationContext";

function Hamburger({ navColor }) {
  const [open, setOpen] = useState(false);

  const { toggleMenu, scrolled } = useContext(NavigationContext);

  const handleMenuToggle = () => {
    if (open) {
      setOpen(false);
      toggleMenu();
    } else {
      setOpen(true);
      toggleMenu();
    }
  };

  return (
    <div
      class={`p-2 block lg:hidden hamburger transition-slow col-span-1 ${
        open ? "open" : ""
      }`}
      id="hamburger"
      onClick={handleMenuToggle}
    >
      <span
        class={`hamburger-top ${
          scrolled || navColor === "white" ? "bg-primary" : "bg-white"
        }  transition-slow`}
      ></span>
      <span
        class={`hamburger-middle ${
          scrolled || navColor === "white" ? "bg-primary" : "bg-white"
        }  transition-slow`}
      ></span>
      <span
        class={`hamburger-bottom ${
          scrolled || navColor === "white" ? "bg-primary" : "bg-white"
        }  transition-slow`}
      ></span>
    </div>
  );
}

export default Hamburger;
