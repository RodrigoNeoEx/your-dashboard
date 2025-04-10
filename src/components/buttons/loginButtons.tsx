import { Button } from "@/components/ui/button"
import { setSVG } from "@/utils/setSVG"
import React from "react"
import DefaultModal from "../modals/DefaultModal"
import { useModalContext } from "@/context/modals/ModalsProvider"


interface LoginButtonsProps {
  btn1: string
  btn2: string
  btnClass?: string
  containerClass?: string
}

const LoginButtons: React.FC<LoginButtonsProps> = ({ 
  btn1, btn2, 
  btnClass = "",
  containerClass= "",
}) => {

  const { modalName, openModal, closeModal } = useModalContext();

  return (
    <section className={`flex w-full pt-2 justify-evenly ${containerClass}`}>
        <Button
          onClick={() => openModal(btn1)}
          className={`${btnClass}`}
        >
          <span className="ml-2">{btn1}</span>
          {setSVG(btn1)}
        </Button>
      { btn1 !== "Go to Your Dashboard"  &&
        <Button onClick={() => openModal(btn2)} className={`${btnClass}`}>
          <span className="ml-2">{btn2}</span>
          {setSVG(btn2)}
        </Button>
      }
       <DefaultModal modalType={modalName} onClose={closeModal} />
    </section>
  )
}

export default LoginButtons;