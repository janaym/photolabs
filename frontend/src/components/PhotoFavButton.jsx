import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useFavourite } from 'hooks/useFavourite';

function PhotoFavButton(props) {

  const [fav, toggleFav] = useFavourite();

  const { setFavouritePhotos, favouritePhotos, id } = props;

  const clickHandler = function() {

    //search for id in favourite
    const i = favouritePhotos.indexOf(id);
    //console.log(i, id)
  
    if(i >= 0) {
      console.log('removing fav!')
      favouritePhotos.splice(i,1);
    } else { 
      console.log('adding fav!')
      favouritePhotos.push(id);
    }
    console.log(favouritePhotos)
    toggleFav();
    
  }

  return (
    <div className="photo-list__fav-icon">
      <div onClick={clickHandler} className="photo-list__fav-icon-svg">
        <FavIcon selected={fav}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;