import { useState } from "react";

//tracks whether individual item is favourited
export const useFavourite = function() {
  const [faved, setFaved] = useState(false);

  const toggleFav = function() {
    setFaved(!faved);
  };

  return [faved, toggleFav];
}