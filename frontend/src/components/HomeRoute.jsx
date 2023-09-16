import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import { useState } from 'react';

const HomeRoute = function (props) {

  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const { photos, topics } = props;
  return (
    <div className='home-route'>
      <TopNavigationBar topics={topics} />
      <PhotoList photos={photos} setFavouritePhotos={setFavouritePhotos} favouritePhotos={favouritePhotos} />
    </div>
  )
  }
  
  export default HomeRoute;