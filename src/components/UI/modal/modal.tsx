import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import { CloseButton } from "../close-button/close-button";
import { useEffect } from "react";

interface ModalProps {
  onClose: () => void;
  children?: React.ReactNode;
}
export function Modal({ children, onClose }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return createPortal(
    <div className={styles.add_book_modal}>
      <CloseButton onClick={onClose} aria-label="Close modal" />

      {children}
    </div>,

    document.body
  );
}
