import { AutoCompleteStyle, InputStyle } from "./styles";
import { useValueInput } from "../../provider/valueInput/valueInput";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { states } from "../../mock/states";
import { useState } from "react";
interface ItemProps {
  item: { nome?: string; value?: string }[];
  register: UseFormRegister<FieldValues>;
  name: string;
}

const Select = ({ name, item, register }: ItemProps) => {
  const { valueInput, setValueInput } = useValueInput();
  const [valueState, setValueState] = useState("");
  return (
    <AutoCompleteStyle
      options={item.map((option) => option.nome)}
      onInputChange={(_event, newInputValue) => {
        item === states
          ? setValueState(newInputValue)
          : setValueInput(newInputValue);
      }}
      renderInput={(params) => (
        <InputStyle
          {...register(name)}
          {...params}
          value={item === states ? valueState : valueInput}
          required
          onChange={(e) =>
            item === states
              ? setValueState(e.target.value)
              : setValueInput(e.target.value)
          }
          label=""
          margin="normal"
          variant="outlined"
        />
      )}
    />
  );
};
export default Select;
