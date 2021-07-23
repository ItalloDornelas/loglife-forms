import { AutoCompleteStyle, InputStyle } from "./styles";
import { useValueInput } from "../../provider/valueInput/valueInput";
interface ItemProps {
  item: { nome?: string; value?: string }[];
}

const Select = ({ item }: ItemProps) => {
  const { valueInput, setValueInput } = useValueInput();
  return (
    <AutoCompleteStyle
      options={item.map((option) => option.nome)}
      onInputChange={(_event, newInputValue) => {
        setValueInput(newInputValue);
      }}
      renderInput={(params) => (
        <InputStyle
          {...params}
          value={valueInput}
          required
          onChange={(e) => setValueInput(e.target.value)}
          label=""
          margin="normal"
          variant="outlined"
        />
      )}
    />
  );
};
export default Select;
