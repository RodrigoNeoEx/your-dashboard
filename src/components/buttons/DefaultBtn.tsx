import { Button } from "../ui/button"
import React from "react"

interface DefaultBtnProps {
  type?: "button" | "submit" | "reset";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  fn?: () => void;
  text?: string;
  classname?: string;
  children?: React.ReactNode;
}

const DefaultBtn: React.FC<DefaultBtnProps> = ({type = "button", fn, text, classname = '', variant = "default", children }) => {
  return (
    <Button variant={variant} type={type} onClick={fn} className={`min-w-[8rem] sm:w-[30rem] h-auto bg-[#bad8f1] dark:bg-[#184e7e] dark:text-white text-[#184e7e] border-[#184e7e] border-2 focus-visible:ring-0 focus-visible:border-[#184e7e] focus-visible:outline-none sm:text-2xl  ${classname}`}>
      <span>{text}</span>
      {children}      
    </Button>
  )
}

export default DefaultBtn;