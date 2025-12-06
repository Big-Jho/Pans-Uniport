import React from "react";

function Tag({ children, bg, className }) {
  return (
    <span
      className={`bg-${bg} ${className} px-3 py-1 uppercase  tracking-wider
      }`}
    >
      {children}
    </span>
  );
}

export default Tag;
