import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useFavourite } from 'hooks/useFavourite';

function PhotoFavButton(props) {

  const [fav, toggleFav] = useFavourite();

  const { GlobalState, id } = props;

  const { favPhotos, setFavPhotos }= GlobalState;
  
  

  const clickHandler = function(event) {
    event.preventDefault;
    
    //clone immutable hook data
    const favPhotosClone = [...favPhotos];
    
    //check if id in favPhotos index
    const i = favPhotosClone.indexOf(id);

    //add or remove accordingly
    if (i < 0){
      //console.log('add fav!');
      favPhotosClone.push(id);
      setFavPhotos(favPhotosClone);
    } else {
      //console.log('remove fav!')
      favPhotosClone.splice(i,1);
      setFavPhotos(favPhotosClone);
    }
    
    //change fav button colour
    toggleFav();

    //stop bubbling
    event.stopPropagation();
   
  }

  return (
    <div className="photo-list__fav-icon">
        <div onClick={(event) => {clickHandler(event)}} className="photo-list__fav-icon-svg">
        <FavIcon selected={fav}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;