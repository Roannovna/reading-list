import { StatusButton } from "../status-button/status-button";
import styles from "./book-card.module.css";
import { BookDetailsButton } from "../book-details-button/book-details-button";
import type { Book } from "../../interfaces";
import classNames from "classnames";

interface BookCardProps {
  book: Book;
  classes?: string;
}
export function BookCard({ book, classes }: BookCardProps) {
  const wrapperClasses = classNames(styles.container, classes);

  return (
    <div className={wrapperClasses}>
      <img src={book.cover} className={styles.card} />
      <div className={styles.card_button}>
        <StatusButton />
        <BookDetailsButton id={book.id.toString()} />
      </div>
    </div>
  );
}
