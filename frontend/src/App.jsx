import React, { useState } from 'react';
import HomeRoute from 'components/HomeRoute';

import './App.scss';

//import mock data
import photos from './mocks/photos';
import topics from './mocks/topics';



// Note: Rendering a single component to build components in isolation
const App = () => {
  //hooks
  const [favPhotos, setFavPhotos] = useState([]);

  //global state
  const GlobalState = {
    favPhotos, setFavPhotos
  }
  return (
    <div className="App">
      <HomeRoute GlobalState={GlobalState} photos={photos} topics={topics}/>
    </div>
  );
};

export default App;
