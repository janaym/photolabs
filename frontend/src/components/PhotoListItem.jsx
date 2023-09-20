import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = ({ GlobalState, photoItem }) => {
  
  //extract relevant photo info
  const { id, location, urls, user } = photoItem;
  const imageSource = urls.regular;
  const { username, profile } = user; 

  const { setIsOpen, setModalPhoto } = GlobalState;

  const handlePhotoClick = function(event, id) {
    event.preventDefault;
    setIsOpen(true);
    //let the app know which photo was clicked on
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
