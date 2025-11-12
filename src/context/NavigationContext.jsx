import { createContext, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [showSwiperNavigator, setSwiperNavigator] = useState(false);

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

  return (
    <NavigationContext.Provider
      value={{
        menuVisibility,
        toggleMenu,
        showSwiperNavigator,
        toggleSwiper,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
