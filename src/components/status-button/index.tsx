import { useState } from "react";
import { Button } from "../UI/button/index";

export function StatusButton() {
  const [isReaded, setIsReaded] = useState(false);

  return (
    <Button onClick={() => setIsReaded(!isReaded)} isCheked={isReaded}>
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
