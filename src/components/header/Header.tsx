import React from "react";
import { ThemeToggle } from "../customComponents/themeToggle/ThemeToggle";

interface HeaderProps {
  children?: React.ReactNode;
}



const Header: React.FC<HeaderProps> = ({children}) => {
  return (
    <header className="">
      <ThemeToggle />
      {children}
    </header>
  );
}

export default Header;