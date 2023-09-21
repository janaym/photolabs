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
  /*----HOOKS----*/
  //favourite tracker
  // const [favPhotos, setFavPhotos] = useState([]);

  // //modal opener
  // const [isOpen, setIsOpen] = useState(false);

  // const [modalPhoto, setModalPhoto] = useState(undefined);


  // //global state
  // const GlobalState = {
  //   favPhotos, setFavPhotos,
  //   isOpen, setIsOpen,
  //   modalPhoto, setModalPhoto
  // }

  const GlobalContext = useApplicationData();
  console.log(GlobalContext);

  return (
    <div className="App">
      <HomeRoute GlobalContext={GlobalContext} photos={photos} topics={topics}/>
      {GlobalContext.state.isModalOpen && <PhotoDetailsModal GlobalContext={GlobalContext} photos={photos}/>}
    </div>
  );
};

export default App;
