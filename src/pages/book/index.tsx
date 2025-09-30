import styles from "./book-page.module.css";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { BookCard } from "../../components/book-card/index";
import { useGetBookDetails } from "../../hooks/useGetBookDetails";

function BookPage() {
  const { id } = useParams();

  const { book, getBookById, loading } = useGetBookDetails();

  useMemo(() => getBookById(Number(id)), [id]);

  return (
    <div className={styles.body}>
      <div>
        {book && <BookCard book={book} classes={styles.cover} />}
        {!book && <p>Книга не найдена🕯️</p>}
        {loading && <p>Loading...</p>}
      </div>
      <div className={styles.details}>
        <p className={styles.title}>{book?.title}</p>
        <p className={styles.author}>{book?.author}</p>
        <p className={styles.description}>{book?.description}</p>
      </div>
      <div>{/* инпут для заметок */}</div>
    </div>
  );
}

export default BookPage;
