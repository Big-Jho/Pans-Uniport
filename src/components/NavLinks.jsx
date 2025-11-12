import React from "react";

function NavLinks({ children }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h4 className="text-base font-normal text-white">{children}</h4>
      <div className="h-0.5 w-0 bg-white group-hover:w-full transition-width duration-md"></div>
    </div>
  );
}

export default NavLinks;
