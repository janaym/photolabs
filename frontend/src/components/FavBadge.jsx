import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ GlobalState }) => {
  const isFavPhotoExist = GlobalState.favPhotos.length === 0 ? false : true;
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true}/>
    </div>
  ) 
  
};

export default FavBadge;