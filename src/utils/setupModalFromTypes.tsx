export interface ModalTypeParams {
  modalType: string;
}

export const setupModalFromTypes = ({ modalType }: ModalTypeParams) => {
  switch (modalType) {
    case "Register":
      return {
        title: "Cadastre-se", description: "Crie uma conta para acessar todos os recursos do seu painel.", 
        fields: {
          email: {
            label: "Email",
            type: "email",
            placeholder: "Digite seu email",
            required: true,
          },
          password: {
            label: "Senha",
            type: "password",
            placeholder: "Digite sua senha",
            required: true,
          },
          confirmPassword: {
            label: "Confirme sua senha",
            type: "password",
            placeholder: "Confirme sua senha",
            required: true,
          },
        }
      }
    case "Login":
      return {
        title: "Login", description: "Acesse sua conta para visualizar seu painel.", 
        fields: {
          email: {
            label: "Email",
            type: "email",
            placeholder: "Digite seu email",
            required: true,
          },
          password: {
            label: "Senha",
            type: "password",
            placeholder: "Digite sua senha",
            required: true,
          },
        },
        footer: {
          text: "Não tem uma conta? Cadastre-se!",
          action: "Register",
          actionText: "Cadastre-se",
          actionFn: () => console.log("teste"),
        },
      }
    case "Logout":
      return <></>
    default:
      return <></>
  }
}