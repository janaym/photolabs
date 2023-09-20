import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {
  

  const { GlobalState, id, location, imageSource, username, profile } = props;

  const { setIsOpen, setModalPhoto } = GlobalState;

  const handlePhotoClick = function(event, id) {
    event.preventDefault;
    console.log('what was clicked:', event.target, id);
    setIsOpen(true);
    //let the app know which photo was clicked on
    const currPhoto = 
    setModalPhoto(id);
  }
  
  return (
    <article className="photo-list__item" onClick={(event) => handlePhotoClick(event, id)}>
      <div className="photo-list__image-container">
        <PhotoFavButton GlobalState={GlobalState} id={id}/>
        <img className='photo-list__image' src={imageSource}/>
      </div>
      <footer className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <div className="photo-list__user-info">
          <div>{username}</div>
          <div className="photo-list__user-location">{location.city}, {location.country}</div>
          
        </div>
      </footer>
    </article>
  )
};

export default PhotoListItem;
