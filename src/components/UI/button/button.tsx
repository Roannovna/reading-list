import type { ReactNode } from "react";
import styles from "./button.module.css";
import classNames from "classnames";

interface ButtonProps {
  isCheked?: boolean;
  children: ReactNode;
  onClick?: () => void;
  classes?: string;
}

export function Button({
  isCheked = false,
  children,
  onClick,
  classes,
}: ButtonProps) {
  const wrapperClasses = classNames(styles.button, {
    [styles.button_cheked]: isCheked,
    [classes || ""]: classes,
  });

  return (
    <button onClick={onClick} className={wrapperClasses}>
      {children}
    </button>
  );
}
