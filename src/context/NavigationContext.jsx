import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [showSwiperNavigator, setSwiperNavigator] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    if (menuVisibility === false) {
      setMenuVisibility(true);
    } else if (menuVisibility === true) {
      setMenuVisibility(false);
    }
  };

  const toggleSwiper = () => {
    if (showSwiperNavigator === false) {
      setSwiperNavigator(true);
    } else if (showSwiperNavigator === true) {
      setSwiperNavigator(false);
    }
  };

  const handleScroll = () => {
    const isScrolled = window.scrollY > 70;
    setScrolled(isScrolled);
  };

  const scrollTop = () => {
    window.scroll(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        menuVisibility,
        toggleMenu,
        showSwiperNavigator,
        toggleSwiper,
        scrolled,
        handleScroll,
        scrollTop,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
