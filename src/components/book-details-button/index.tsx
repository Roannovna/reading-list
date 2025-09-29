import { useNavigate } from "react-router-dom";
import { Button } from "../UI/button/index";

interface BookDetailsButtonProps {
  id: string;
}
export function BookDetailsButton({ id }: BookDetailsButtonProps) {
  const navigation = useNavigate();

  return (
    <Button onClick={() => navigation(`/book/${id}`)}>
      <img
        src="/src/assets/icons/book-details.svg"
        width={30}
        height={30}
        alt="Подробнее о книге"
      />
    </Button>
  );
}
