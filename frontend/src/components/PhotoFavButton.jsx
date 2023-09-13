import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useFavourite } from 'hooks/useFavourite';

function PhotoFavButton() {

  const [fav, toggleFav] = useFavourite();

  return (
    <div className="photo-list__fav-icon">
      <div onClick={toggleFav} className="photo-list__fav-icon-svg">
        <FavIcon selected={fav}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;