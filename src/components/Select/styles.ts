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
  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: var(--dark-blue);
    }
  }
`;
