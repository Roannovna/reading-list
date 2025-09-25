import { StatusButton } from "../status-button/status-button";
import styles from "./book-card.module.css";
import { BookDetailsButton } from "../book-details-button/book-details-button";
import type { Book } from "../../interfaces";

interface BookCardProps {
  book: Book;
}
export function BookCard({ book }: BookCardProps) {
  return (
    <div className={styles.container}>
      <img src={book.cover} className={styles.card} />
      <div className={styles.card_button}>
        <StatusButton />
        <BookDetailsButton id={book.id.toString()} />
      </div>
    </div>
  );
}
