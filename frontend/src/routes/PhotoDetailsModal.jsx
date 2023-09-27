import React from 'react';

import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss'
import '../styles/PhotoListItem.scss';

const PhotoDetailsModal = ({ GlobalContext }) => {
  const { state, onCloseModal } = GlobalContext;

  //get info from photo that was clicked on 
  const { location, urls, user, similar_photos} = state.photoData.find((photo) => photo.id === state.modalPhoto);

  return (
    <div className="photo-details-modal">

      {/* close modal button */}
      <button className="photo-details-modal__close-button" onClick={(event) => {onCloseModal(event)}} >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__images'>
        {/* full size image */}
        <PhotoFavButton GlobalContext={GlobalContext} id={state.modalPhoto}/>
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
          return <PhotoListItem key={photoItem.id} GlobalContext={GlobalContext}  photoItem={photoItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
