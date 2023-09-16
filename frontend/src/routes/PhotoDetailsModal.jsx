import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ GlobalState }) => {
  const { isOpen, setIsOpen } = GlobalState;

  const handleClick = function(event) {
    event.preventDefault;
    setIsOpen(false);
  }
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={(event) => {handleClick(event)}} >
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
