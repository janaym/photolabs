import { useState } from "react";

const useModal = function(id) {
  const [isOpen, setIsOpen] = useState(false);
  return [picId, isOpen, setIsOpen];
}

