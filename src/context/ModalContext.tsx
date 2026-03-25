/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";
import ConsultationModal from "../components/ConsultModal";

// 1. Define the exact shape of your Context for TypeScript
interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

// 2. Pass the interface to createContext
const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen && <ConsultationModal />}
    </ModalContext.Provider>
  );
}

// 3. Add a safety check in the hook so TypeScript guarantees the return type
export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
