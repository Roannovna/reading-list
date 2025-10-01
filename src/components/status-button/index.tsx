import type { Book } from "../../interfaces";
import { Button } from "../UI/button/index";

interface StatusButtonProps {
  id: Book["id"];
  isReaded: boolean;
  onUpdateStatus: (id: number, status: boolean) => void;
}

export function StatusButton({
  id,
  isReaded,
  onUpdateStatus,
}: StatusButtonProps) {
  return (
    <Button onClick={() => onUpdateStatus(id, !isReaded)} isCheked={isReaded}>
      {isReaded ? (
        <img
          src="/src/assets/icons/readed-book.svg"
          width={30}
          height={30}
          alt="Книга прочитана"
        />
      ) : (
        <img
          src="/src/assets/icons/unreaded-book.svg"
          width={30}
          height={30}
          alt="Книга не прочитана"
        />
      )}
    </Button>
  );
}
