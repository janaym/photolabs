import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ GlobalContext, photoItem }) => {
  
  //extract relevant photo info
  const { id, location, urls, user } = photoItem;
  const imageSource = urls.full;
  const { username, profile } = user; 

  //extract needed functions
  const { setPhotoSelected } = GlobalContext;

  return (
    <article className="photo-list__item" onClick={(event) => setPhotoSelected(event, id)}>
      
      <div className="photo-list__image-container">
        <PhotoFavButton GlobalContext={GlobalContext} id={id}/>
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
