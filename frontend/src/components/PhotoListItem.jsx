import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {
  const { setFavouritePhotos,favouritePhotos, id, location, imageSource, username, profile } = props;

  return (
    <article className="photo-list__item">
      <div className="photo-list__image-container">
        <PhotoFavButton setFavouritePhotos={setFavouritePhotos} favouritePhotos={favouritePhotos} id={id}/>
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
