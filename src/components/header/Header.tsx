import React from "react";
import { ThemeToggle } from "../customComponents/themeToggle/ThemeToggle";

interface HeaderProps {
  children?: React.ReactNode;
  classname?: string;
}



const Header: React.FC<HeaderProps> = ({children, classname}) => {
  return (
    <header className={`w-full absolute z-20 h-[4rem] bg-transparent shadow-[0px_0px_15px_-2px_#ffffff] ${classname}`}>
      <ThemeToggle />
      {children}
    </header>
  );
}

export default Header;