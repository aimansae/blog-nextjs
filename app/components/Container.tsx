import React, { ReactNode } from "react";
type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className=" flex flex-col max-w-[1100px] mx-auto bg-white min-h-screen border-l border-r">
      {children}
    </div>
  );
};

export default Container;
