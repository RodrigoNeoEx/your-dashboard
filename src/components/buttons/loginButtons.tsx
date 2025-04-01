import { Button } from "@/components/ui/button"
import { setSVG } from "@/utils/setSVG"
import { useModal } from "@/utils/useModals"
import React from "react"
import DefaultModal from "../modals/DefaultModal"


interface LoginButtonsProps {
  fn1: () => void
  fn2: () => void
  btn1: string
  btn2: string
  btn1Class?: string
  btn2Class?: string
  containerClass?: string
}

const LoginButtons: React.FC<LoginButtonsProps> = ({ 
  fn1, fn2, btn1, btn2, 
  btn1Class = "",
  btn2Class = "",
  containerClass= "",
}) => {

  const { modalName, openModal, closeModal } = useModal();

  return (
    <section className={`flex w-full pt-2 justify-evenly ${containerClass}`}>
        <Button
          onClick={() => openModal("login")}
          className="min-w-[8rem] bg-[#184e7e] dark:text-white"
        >
          <span className="ml-2">Login</span>
          {setSVG(btn1)}
        </Button>
      { btn1 !== "Go to Your Dashboard" &&
        <Button onClick={fn2} className={`${btn2Class}`}>
          <span className="ml-2">{btn2}</span>
          {setSVG(btn2)}
        </Button>
      }
       <DefaultModal modalType={modalName} onClose={closeModal} />
    </section>
  )
}

export default LoginButtons;