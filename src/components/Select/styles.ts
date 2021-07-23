import styled from "styled-components";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
export const AutoCompleteStyle = styled(Autocomplete)`
  .MuiAutocomplete-inputRoot {
    width: 220px;
    &.Mui-focused fieldset {
      border-color: var(--dark-blue);
      color: var(--light-blue);
    }
  }
`;
export const InputStyle = styled(TextField)`
  .MuiTextField-root {
    margin-top: 0;
    &.Mui-focused fieldset {
      border-color: var(--dark-blue);
    }
  }
`;
