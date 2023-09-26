import React from 'react';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';



import '../styles/HomeRoute.scss';

const HomeRoute = ({GlobalContext, topics}) => {

  return (
    <div className='home-route'>
      <TopNavigationBar topics={topics} GlobalContext={GlobalContext} /> 
      <PhotoList GlobalContext={GlobalContext} />
    </div>
  );
};

export default HomeRoute;
