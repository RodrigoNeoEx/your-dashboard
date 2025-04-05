import { Button } from "@/components/ui/button"
import { setSVG } from "@/utils/setSVG"
import { useModal } from "@/utils/useModals"
import React from "react"
import DefaultModal from "../modals/DefaultModal"


interface LoginButtonsProps {
  btn1: string
  btn2: string
  btn1Class?: string
  btn2Class?: string
  containerClass?: string
}

const LoginButtons: React.FC<LoginButtonsProps> = ({ 
  btn1, btn2, 
  btn1Class = "",
  btn2Class = "",
  containerClass= "",
}) => {

  const { modalName, openModal, closeModal } = useModal();

  return (
    <section className={`flex w-full pt-2 justify-evenly ${containerClass}`}>
        <Button
          onClick={() => openModal(btn1)}
          className={`${btn1Class}`}
        >
          <span className="ml-2">{btn1}</span>
          {setSVG(btn1)}
        </Button>
      { btn1 !== "Go to Your Dashboard"  &&
        <Button onClick={() => openModal(btn2)} className={`${btn2Class}`}>
          <span className="ml-2">{btn2}</span>
          {setSVG(btn2)}
        </Button>
      }
       <DefaultModal modalType={modalName} onClose={closeModal} />
    </section>
  )
}

export default LoginButtons;