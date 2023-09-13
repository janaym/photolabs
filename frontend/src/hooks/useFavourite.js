import { useState } from "react";

export const useFavourite = function() {
  const [faved, setFaved] = useState(false);

  const toggleFav = function() {
    setFaved(!faved);
  };

  return [faved, toggleFav];
}