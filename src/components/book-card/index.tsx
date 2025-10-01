import { StatusButton } from "../status-button/index";
import styles from "./book-card.module.css";
import type { Book } from "../../interfaces";
import classNames from "classnames";
import { BookDetailsButton } from "../book-details-button";

interface BookCardProps {
  book: Book;
  classes?: string;
  onUpdateStatus: (id: number, status: boolean) => void;
}

export function BookCard({ book, classes, onUpdateStatus }: BookCardProps) {
  const wrapperClasses = classNames(styles.container, classes);

  return (
    <div className={wrapperClasses}>
      <img src={book.cover} className={styles.card} />
      <div className={styles.card_button}>
        <StatusButton
          id={book.id}
          isReaded={Boolean(book.isReaded)}
          onUpdateStatus={onUpdateStatus}
        />
        <BookDetailsButton id={book.id} />
      </div>
    </div>
  );
}
