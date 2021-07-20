import { Container } from "./styles";
interface ButtonProps {
  children: string;
  whiteSchema?: boolean;
  onClick?: () => void;
  type?: string;
}

const Button = ({
  children,
  type,
  whiteSchema = false,
  ...rest
}: ButtonProps) => {
  return (
    <Container whiteSchema={whiteSchema} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
