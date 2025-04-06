import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextData {
  modalName: string;
  openModal: (name: string) => void;
  closeModal: () => void;
  switchModal: (name: string) => void;
  setModalName: (name: string) => void;
}

const ModalContext = createContext<ModalContextData | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalName, setModalName] = useState("");

  const openModal = (name: string) => {
    setModalName(name);
  };

  const closeModal = () => {
    setModalName("");
  };

  const switchModal = (name: string) => {
 
    closeModal();  
    setTimeout(() => {
      openModal(name);
    }, 150);  
  };

  return (
    <ModalContext.Provider value={{ modalName, openModal, closeModal, switchModal, setModalName }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
