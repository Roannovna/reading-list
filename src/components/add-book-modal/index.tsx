import { useState } from "react";
import { Modal } from "../UI/modal";
import styles from "./add-book-modal.module.css";
import type { Book } from "../../interfaces";
import { useAddBooks } from "../../hooks/useAddBooks";

export function AddBookModal({ onClose }: { onClose: () => void }) {
  const [cover, setCover] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const [description, setDescription] = useState<string>();

  const { addBook } = useAddBooks();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!cover || !title || !author || !description) return;
    const newBook: Book = {
      id: Date.now(),
      cover,
      description,
      title,
      author,
    };
    console.log("newBook", newBook);
    addBook(newBook);
    onClose();
  }

  return (
    <div>
      <Modal onClose={onClose}>
        <div className={styles.modal_body}>
          <p className={styles.modal_title}>Add new book</p>
          <form className={styles.form} onSubmit={onSubmit} id="new-book-form">
            <div className={styles.cover_details}>
              <img src={cover} className={styles.cover} />
              <input
                type="url"
                placeholder="add cover URL"
                onChange={(e) => setCover(e.target.value)}
              />
            </div>
            <div className={styles.details}>
              <input
                value={title}
                type="text"
                placeholder="Title"
                className={styles.title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                value={author}
                type="text"
                placeholder="Author"
                className={styles.author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <textarea
                value={description}
                placeholder="Description"
                className={styles.description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </form>
          <button
            className={styles.save_button}
            type="submit"
            form="new-book-form"
          >
            save
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default AddBookModal;
