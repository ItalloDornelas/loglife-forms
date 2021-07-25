import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import CardsProps from "../../model/CardsProps";

interface CardProviderData {
  card: CardsProps[];
  setCard: Dispatch<SetStateAction<CardsProps[]>>;
  deleteCard: (card: CardsProps) => void;
}

interface CardProviderProps {
  children: ReactNode;
}

export const CardContext = createContext<CardProviderData>(
  {} as CardProviderData
);

export const CardProvider = ({ children }: CardProviderProps) => {
  const [card, setCard] = useState<CardsProps[]>([] as CardsProps[]);

  useEffect(() => {
    const localClient = localStorage.getItem("card") || "[]";
    setCard(JSON.parse(localClient));
  }, []);

  useEffect(() => {
    if (card && card.length > 0) {
      localStorage.setItem("card", JSON.stringify(card));
    }
  }, [card]);
  const deleteCard = (cardToBeDeleted: CardsProps) => {
    const newList = card.filter(
      (card) => card.username !== cardToBeDeleted.username
    );
    setCard(newList);
  };

  return (
    <CardContext.Provider value={{ card, setCard, deleteCard }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCards = () => useContext(CardContext);
