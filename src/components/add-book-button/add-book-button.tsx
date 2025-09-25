import { Button } from "../UI/button/button";
import styles from "./add-book-button.module.css";

interface AddBookButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
}

export function AddBookButton({ onClick, children }: AddBookButtonProps) {
  return (
    <Button classes={styles.add_book_button} onClick={onClick}>
      <img
        src="/src/assets/icons/add-new-book.svg"
        width={30}
        height={30}
        alt="Добавить книгу"
      />
      {children}
    </Button>
  );
}
