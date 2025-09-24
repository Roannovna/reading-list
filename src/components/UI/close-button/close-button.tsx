import styles from "./close-button.module.css";

interface CloseButtonProps {
  onClick: () => void;
}

export function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button className={styles.close_button} onClick={onClick}>
      {<img src="/src/assets/icons/close-button.svg" />}
    </button>
  );
}
