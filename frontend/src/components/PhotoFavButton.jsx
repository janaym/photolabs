import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useFavourite } from 'hooks/useFavourite';

function PhotoFavButton({GlobalContext, id}) {
  const [fav, toggleFav] = useFavourite();

  //extract needed functions
  const { updateFavPhotoIds } = GlobalContext;
  
  return (
    <div className="photo-list__fav-icon">
      <div onClick={(event) => {updateFavPhotoIds(event, toggleFav, id)}} className="photo-list__fav-icon-svg">
        <FavIcon selected={fav}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;