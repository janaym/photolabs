import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';



const PhotoDetailsModal = ({ GlobalState, photos }) => {
  const { modalPhoto, setIsOpen } = GlobalState;


  const currPhoto = photos.find((photo) => photo.id === modalPhoto);
  console.log(currPhoto)
  const photoDetails= {
    id: currPhoto.id,
    location: currPhoto.location,
    imageSource: currPhoto.urls.full,
    username: currPhoto.user.username,
    profile: currPhoto.user.profile,
  };

  
  // console.log(photoDetails)

  const handleCloseClick= function(event) {
    event.preventDefault;
    setIsOpen(false);
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={(event) => {handleCloseClick(event)}} >
        <img src={closeSymbol} alt="close symbol" />
       
        
      </button>


     <PhotoListItem GlobalState={GlobalState} {...photoDetails} />

     currPhoto.user.similarPhotos.map()
    </div>
  )
};

export default PhotoDetailsModal;
