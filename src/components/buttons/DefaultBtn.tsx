import { Button } from "../ui/button"
import React from "react"

interface DefaultBtnProps {
  type?: "button" | "submit" | "reset";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  fn?: () => void;
  text: string;
  classname?: string;
}

const DefaultBtn: React.FC<DefaultBtnProps> = ({type = "button", fn, text, classname = '', variant = "default"}) => {
  return (
    <Button variant={variant} type={type} onClick={fn} className={`min-w-[8rem] bg-[#bad8f1] text-[#184e7e] border-[#184e7e] border-2 dark:text-white dark:bg-[#184e7e] ${classname}`}>
      <span>{text}</span>      
    </Button>
  )
}

export default DefaultBtn;