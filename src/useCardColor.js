import { useState } from "react";

export let initialCardColor = "#bfdbfe";
export const setInitialCardColor = (color) => {
  initialCardColor = color;
};
export const useCardColor = () => {
  const [cardColor, setCardColor] = useState(initialCardColor);

  const changeCardColor = (color) => {
    setInitialCardColor(color);
    setCardColor(color);
   
  };

  return [cardColor, changeCardColor];
};
