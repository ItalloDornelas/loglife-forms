import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ValueInputProviderData {
  valueInput: string;
  setValueInput: Dispatch<SetStateAction<string>>;
}

interface ValueInputProviderProps {
  children: ReactNode;
}

const ValueInputContext = createContext<ValueInputProviderData>(
  {} as ValueInputProviderData
);

export const ValueInputProvider = ({ children }: ValueInputProviderProps) => {
  const [valueInput, setValueInput] = useState(String);

  return (
    <ValueInputContext.Provider value={{ setValueInput, valueInput }}>
      {children}
    </ValueInputContext.Provider>
  );
};

export const useValueInput = () => useContext(ValueInputContext);
