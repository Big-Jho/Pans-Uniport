import React from "react";

function NavLinks({ children, shade, className }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-0.5">
      <h4 className={`text-base font-normal text-${shade} ${className}`}>
        {children}
      </h4>
      <div
        className={`h-0.5 w-0 bg-${shade}  group-hover:w-full transition-width duration-md`}
      ></div>
    </div>
  );
}

export default NavLinks;
