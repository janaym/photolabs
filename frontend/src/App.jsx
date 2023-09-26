import React, { useState } from 'react';

import './App.scss';

//import mock data
import photos from './mocks/photos';
import topics from './mocks/topics';


//import routes
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';



// Note: Rendering a single component to build components in isolation
const App = () => {

  const GlobalContext = useApplicationData();
  //console.log(GlobalContext);

  return (
    <div className="App">
      <HomeRoute GlobalContext={GlobalContext} topics={topics}/>
      {GlobalContext.state.isModalOpen && <PhotoDetailsModal GlobalContext={GlobalContext}/>}
    </div>
  );
};

export default App;
