import { IconType } from "react-icons/lib";
import { Container } from "./styles";
interface ButtonProps {
  children?: string | IconType;
  redSchema?: boolean;
  onClick?: () => void;
  type?: string;
  form?: string;
}

const Button = ({
  children,
  type,
  form,
  redSchema = false,
  ...rest
}: ButtonProps) => {
  return (
    <Container redSchema={redSchema} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
