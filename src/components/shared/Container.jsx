import React from "react";

function Container({ children, className, size }) {
  return (
    <div
      className={`container mx-auto p-4  lg:px-16 ${className} ${
        size === "small" && "px-6"
      }`}
    >
      {children}
    </div>
  );
}

export default Container;
