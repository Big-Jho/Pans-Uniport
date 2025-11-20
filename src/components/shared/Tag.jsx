import React from "react";

function Tag({ children, bg, rounded }) {
  return (
    <span className={`bg-${bg} px-3 py-1 uppercase ${rounded && "rounded-md"}`}>
      {children}
    </span>
  );
}

export default Tag;
