import React from "react";

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`bg-black hover:bg-primaryred transition-all duration-500 px-7 py-4 rounded-full text-black ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
