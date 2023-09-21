import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = ({ GlobalState, photos }) => {

  const { id, modalPhoto, setIsOpen } = GlobalState;

  //get info from photo clicked on 
  const { location, urls, user, similar_photos} = photos.find((photo) => photo.id === modalPhoto);


  const handleCloseClick= function(event) {
    event.preventDefault;
    setIsOpen(false);
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={(event) => {handleCloseClick(event)}} >
        <img src={closeSymbol} alt="close symbol" />
       
        
      </button>

      <div className='photo-details-modal__images'>
        {/* full size image */}
        <PhotoFavButton GlobalState={GlobalState} id={id}/>
        <img src={urls.full} className='photo-details-modal__image'/>

        {/* photographer details */}
        <div className='photo-details-modal__header'>
          <img src={user.profile} className='photo-list__user-profile' />
          <div className='photo-list__user-info'>
            <div>{user.username}</div>
            <div className='photo-list__user-location'>{location.city}, {location.country}</div>
          </div>
        </div>

        {/* similar photos */}
        <div className='photo-details-modal__top-bar'>
          {Object.values(similar_photos).map((photoItem) => {
          return <PhotoListItem key={photoItem.id} GlobalState={GlobalState}  photoItem={photoItem} />;
          })}
        </div>


      </div>
      
    

    </div>
  )
};

export default PhotoDetailsModal;
