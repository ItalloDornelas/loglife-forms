import { Container } from "./styles";
interface ButtonProps {
  children?: string;
  redSchema?: boolean;
  onClick?: () => void;
  type?: string;
}

const Button = ({
  children,
  type,
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
