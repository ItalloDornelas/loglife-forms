import styled, { css } from "styled-components";
import { TextField } from "@material-ui/core";

export const Container = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    span {
      color: var(--red);
    }
  }
`;

interface InputsProps {
  isErrored: boolean;
}
export const InputContainer = styled.div<InputsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}
  ::placeholder {
    color: var(--red);
  }
`;

export const StyleTextField = styled(TextField)`
  label.Mui-focused {
    color: var(--light-blue);
  }

  .MuiOutlinedInput-root {
    margin: 5px 0 5px 0;
    padding: 1px;

    &.Mui-focused fieldset {
      border-color: var(--dark-blue);
    }
  }
`;
