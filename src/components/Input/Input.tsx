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

function Input({ type, label, register, error, name, ...rest }: InputProps) {
  return (
    <Container>
      <InputContainer isErrored={!!error}>
        <StyleTextField
          label={
            type === "time" || type === "date"
              ? (label = "")
              : error
              ? error
              : label
          }
          variant="outlined"
          {...register(name)}
          {...rest}
          error={!!error}
          type={type}
          helperText={type === "time" || type === "date" ? error : ""}
        />
      </InputContainer>
    </Container>
  );
}
export default Input;
