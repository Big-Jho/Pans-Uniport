import useInView from "./useInView";

function ScrollReveal({ children, type, className }) {
  const [ref, inView] = useInView();

  const checkClass = () => {
    let typeClass;

    if (type === "fromBottom") {
      typeClass = ["opacity-0 translate-y-[50%]", "opacity-100 translate-y-0"];
    } else if (type === "fromLeft") {
      typeClass = ["opacity-0 -translate-x-[50%]", "opacity-100 translate-x-0"];
    } else if (type === "fromRight") {
      typeClass = ["opacity-0 translate-x-[25%]", "opacity-100 translate-x-0"];
    } else if (type === "slightScale") {
      typeClass = [
        "opacity-0 translate-y-10 scale-95",
        "opacity-100 translate-y-0 scale-100",
      ];
    }
    return typeClass;
  };

  return (
    <div
      ref={ref}
      className={`
        transition-xl duration-xl ease-out w-full delay-lg
        ${inView ? checkClass()[1] : checkClass()[0]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
