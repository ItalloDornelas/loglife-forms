import { Container, InputContainer, StyleTextField } from "./styles";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  error: string;
  label?: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  type?: string;
  placeholder?: string;
}

function Input({ label, register, error, name, ...rest }: InputProps) {
  return (
    <Container>
      <InputContainer isErrored={!!error}>
        <StyleTextField
          label={label}
          variant="outlined"
          {...register(name)}
          {...rest}
        />
      </InputContainer>
      <div>{!!error && <span> - {error}</span>}</div>
    </Container>
  );
}
export default Input;
