import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import { useState } from 'react';

const HomeRoute = function (props) {

  

  const { GlobalState, photos, topics } = props;
  return (
    <div className='home-route'>
      <TopNavigationBar topics={topics} GlobalState={GlobalState} />
      <PhotoList photos={photos} GlobalState={GlobalState} />
    </div>
  )
  }
  
  export default HomeRoute;