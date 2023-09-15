import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';

const HomeRoute = function () {
  return (
    <div className='home-route'>
      <TopNavigationBar />
      <PhotoList />
    </div>
  )
  }
  
  export default HomeRoute;