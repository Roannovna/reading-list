import type { ReactNode } from "react";
import styles from "./button.module.css";

interface ButtonProps {
  isCheked: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export function Button({ isCheked = false, children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={isCheked ? styles.button_cheked : styles.button}
    >
      {children}
    </button>
  );
}
