import DefaultBtn from "@/components/buttons/DefaultBtn";
import { useModal } from "@/context/modals/ModalsProvider";
import React, { useMemo } from "react";

interface Field {
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  classname?: string;
}

interface Footer {
  html: JSX.Element;
}

interface ModalContent {
  title: string;
  description: string;
  fields: Field[];
  footer?: Footer;
}

export function setupModalFromTypes(modalType: string): ModalContent | null {

  const { modalName, openModal } = useModal();
  
  const modalContent = useMemo(() => {
    switch (modalType) {

      case "Register":
        return {
          title: "Cadastre-se",
          description:
            "Crie uma conta para acessar todos os recursos do seu painel.",
          fields: [
             {
              label: "Email",
              type: "email",
              placeholder: "Digite seu email",
              required: true,
            },{
              label: "Senha",
              type: "password",
              placeholder: "Digite sua senha",
              required: true,
            },{
              label: "Confirme sua senha",
              classname: "text-center",
              type: "password",
              placeholder: "Confirme sua senha",
              required: true,
            },
          ],          
          footer: {
            html: 
            <DefaultBtn                    
              fn={() => console.log('teste')}
              type="submit"
              text={"Efetuar Cadastro"}
              />,
          },
        };
      case "Login":
        return {
          title: "Login",
          description: "Acesse sua conta para visualizar seu painel.",
          fields: [
            {
              label: "Conta",
              type: "text",
              placeholder: "E-mail ou Username",
              required: true,
            },{
              label: "Senha",
              type: "password",
              placeholder: "Digite sua senha",
              required: true,
            },
          ],          
          footer: {
            html:
            <React.Fragment> 
              <DefaultBtn
              classname="underline border-0 bg-transparent" 
              variant="link" 
              fn={() => console.log('teste')}
              text={"Esqueci minha senha"}
              />
              <DefaultBtn
                classname="underline border-0 bg-transparent" 
                variant="link" 
                fn={() => openModal('Register')}
                text={"Não tem uma conta? Cadastre-se!"}
                />
                <DefaultBtn type="submit" text="Login" fn={() => console.log('teste')}/>
              </React.Fragment>,
          },
        };
      default:
        return null;
    }
  }, [modalType]);

  return modalContent;
}
