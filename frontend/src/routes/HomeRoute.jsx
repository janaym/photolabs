import React from 'react';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';



import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { GlobalState, photos, topics } = props;
  return (
    <div className='home-route'>
      <TopNavigationBar topics={topics} GlobalState={GlobalState} />
      <PhotoList photos={photos} GlobalState={GlobalState} />
    </div>
  );
};

export default HomeRoute;
