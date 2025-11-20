import React from "react";

function Container({ children, className }) {
  return (
    <div className={`container mx-auto p-4  lg:px-16 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
