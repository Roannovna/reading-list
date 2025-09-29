import { useState } from "react";
import { Modal } from "../UI/modal";
import styles from "./add-book-modal.module.css";

export function AddBookModal({ onClose }: { onClose: () => void }) {
  const [cover, setCover] = useState<string>();

  return (
    <div>
      <Modal onClose={onClose}>
        <div className={styles.modal_body}>
          <p className={styles.modal_title}>Add new book</p>
          <div className={styles.form}>
            <div className={styles.cover_details}>
              <img
                // src="https://avatars.mds.yandex.net/get-mpic/6269810/2a000001918edb4798987b35aa08770e4a56/orig"
                src={cover}
                className={styles.cover}
              />
              <input
                type="url"
                placeholder="add cover URL"
                onChange={(e) => setCover(e.target.value)}
              />
            </div>
            <div className={styles.details}>
              <input type="text" placeholder="Title" className={styles.title} />
              <input
                type="text"
                placeholder="Author"
                className={styles.author}
              />
              <textarea
                placeholder="Description"
                className={styles.description}
              />
            </div>
          </div>
          <button className={styles.save_button}>save</button>
        </div>
      </Modal>
    </div>
  );
}

export default AddBookModal;
