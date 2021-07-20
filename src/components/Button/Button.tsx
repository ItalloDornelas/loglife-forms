import { Container } from "./styles";
interface ButtonProps {
  children: string;
  whiteSchema?: boolean;
  onClick: () => void;
}

const Button = ({ children, whiteSchema = false, ...rest }: ButtonProps) => {
  return (
    <Container whiteSchema={whiteSchema} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
