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

  const { switchModal } = useModal();
  
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
              label: "Confirme a senha",
              classname: "text-center",
              type: "password",
              placeholder: "Confirme a senha",
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
              classname="underline border-0 !bg-transparent" 
              variant="link" 
              fn={() => switchModal('ForgotPassword')}
              text={"Esqueci minha senha"}
              />
              <DefaultBtn
                classname="underline border-0 !bg-transparent" 
                variant="link" 
                fn={() => switchModal('Register')}
                text={"Não tem uma conta? Cadastre-se!"}
                />
                <DefaultBtn type="submit" text="Login" fn={() => console.log('teste')}/>
              </React.Fragment>,
          },
        };
      case "ForgotPassword":
        return {
          title: "Recuperar Senha",
          description: "Digite seu e-mail para recuperar sua senha.",
          fields: [
            {
              label: "Email",
              type: "email",
              placeholder: "Digite seu email",
              required: true,
            },
          ],
          footer: {
            html: (
              <DefaultBtn
                type="submit"
                text="Recuperar Senha"
                fn={() => switchModal('ChangePassword')}
              />
            ),
          },
        };
      case "ChangePassword":
        return {
          title: "Alterar Senha",
          description: "Digite o codigo enviado e a nova senha.",
          fields: [
            {
              label: "Código",
              type: "password",
              placeholder: "Seu código",
              required: true,
            },
            {
              label: "Nova Senha",
              type: "password",
              placeholder: "Digite sua nova senha",
              required: true,
            },
            {
              label: "Confirme a senha",
              type: "password",
              placeholder: "Digite sua nova senha",
              required: true,
            },
          ],
          footer: {
            html: (
              <DefaultBtn
                type="submit"
                text="Alterar Senha"
                fn={() => console.log('teste')}
              />
            ),
          },
        };
      default:
        return null;
    }
  }, [modalType]);

  return modalContent;
}
