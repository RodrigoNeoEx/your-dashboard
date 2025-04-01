import { useState } from "react";

export function useModal() {
  const [modalName, setModalName] = useState<string | null>(null);

  const openModal = (name: string) => setModalName(name);
  const closeModal = () => setModalName(null);

  return { modalName, openModal, closeModal };
}