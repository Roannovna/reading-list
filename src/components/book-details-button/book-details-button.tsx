import { Button } from "../UI/button/button";

interface BookDetailsButtonProps {
  onClick: () => void;
}

export function BookDetailsButton({ onClick }: BookDetailsButtonProps) {
  return (
    <Button onClick={onClick}>
      {
        <img
          src="/src/assets/icons/book-details-button.svg"
          width={30}
          height={30}
          alt="Подробнее"
        />
      }
    </Button>
  );
}
