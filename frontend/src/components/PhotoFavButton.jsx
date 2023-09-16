import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useFavourite } from 'hooks/useFavourite';

function PhotoFavButton(props) {

  const [fav, toggleFav] = useFavourite();

  const { GlobalState, id } = props;

  const { favPhotos, setFavPhotos }= GlobalState;
  
  

  const clickHandler = function() {

    console.log('before: ', favPhotos);
    //check if id is in favPhotos
    const favPhotosClone = [...favPhotos]
    console.log("clone:", favPhotosClone);
    const i = favPhotosClone.indexOf(id);

    if(i<0){
      console.log('add fav!');
      favPhotosClone.push(id);
      console.log(favPhotosClone, favPhotos)
      setFavPhotos(favPhotosClone);
    } else {
      console.log('remove fav!')
      favPhotosClone.splice(i,1);
      console.log(favPhotosClone, favPhotos);
      setFavPhotos(favPhotosClone);
    }
    
    //setFavPhotos([test])
    

    // //id not in array
    // if(i < 0) {
    //   console.log('adding fav!')
    //   setFavPhotos(favPhotosClone.push(id));
    // } else {
    //   console.log('removing fav!')
    //   setFavPhotos(favPhotosClone.splice(i,1));
    // }
    // console.log('after: ', favPhotos);
  
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