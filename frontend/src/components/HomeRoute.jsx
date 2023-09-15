import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';

const HomeRoute = function (props) {
  const { photos, topics } = props;
  return (
    <div className='home-route'>
      <TopNavigationBar topics={topics} />
      <PhotoList photos={photos} />
    </div>
  )
  }
  
  export default HomeRoute;