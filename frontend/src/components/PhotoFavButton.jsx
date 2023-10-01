import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useFavourite } from 'hooks/useFavourite';

function PhotoFavButton({GlobalContext, id}) {
  const [fav, toggleFav] = useFavourite();

  //extract needed functions
  const { updateFavPhotoIds } = GlobalContext;
  const isFavourited = GlobalContext.state.favPhotos.includes(id);
  
  return (
    <div className="photo-list__fav-icon">
      <div onClick={(event) => {updateFavPhotoIds(event, toggleFav, id)}} className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourited}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;