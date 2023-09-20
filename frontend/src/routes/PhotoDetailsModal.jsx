import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import { unpackPhotoDetails } from '../helpers/unpackPhotoDetails.js';



const PhotoDetailsModal = ({ GlobalState, photos }) => {

  const { modalPhoto, setIsOpen } = GlobalState;

  //get photo clicked on 
  const currPhoto = photos.find((photo) => photo.id === modalPhoto);
  console.log(currPhoto.similar_photos)

  const handleCloseClick= function(event) {
    event.preventDefault;
    setIsOpen(false);
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={(event) => {handleCloseClick(event)}} >
        <img src={closeSymbol} alt="close symbol" />
       
        
      </button>


    <PhotoListItem GlobalState={GlobalState} photoItem={currPhoto} />
    

    </div>
  )
};

export default PhotoDetailsModal;
