import React from 'react';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';



import '../styles/HomeRoute.scss';

const HomeRoute = ({GlobalContext, photos, topics}) => {

  return (
    <div className='home-route'>
      {/* <TopNavigationBar topics={topics} GlobalState={GlobalState} /> */}
      <PhotoList photos={photos} GlobalContext={GlobalContext} />
    </div>
  );
};

export default HomeRoute;
