import { Button } from "@/components/ui/button"
import { setSVG } from "@/utils/setSVG"
import React from "react"
import DefaultModal from "../modals/DefaultModal"
import { useModalContext } from "@/context/modals/ModalsProvider"
import { useRouter } from "next/navigation"


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
  const router = useRouter();

  const handleFn = (btn1: string) => {
    void (btn1 === "Go to your Dashboard" ? router.push('/home') : openModal("register"));
  };
  
  
  return (
    <section className={`flex w-full pt-2 justify-evenly ${containerClass}`}>
        <Button
          onClick={() => handleFn(btn1)}
          className={`${btnClass}`}
        >
          <span className="ml-2">{btn1}</span>
          {setSVG(btn1)}
        </Button>
      { btn1 !== "Go to your Dashboard"  &&
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