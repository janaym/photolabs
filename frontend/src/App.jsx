import React from 'react';
import './App.scss';

//import routes
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import { useApplicationData } from 'hooks/useApplicationData';

const App = () => {
  //import state and state modifying functions
  const GlobalContext = useApplicationData();
  const isModalOpen = GlobalContext.state.isModalOpen;

  return (
    <div className="App">
      <HomeRoute GlobalContext={GlobalContext} />
      {isModalOpen && <PhotoDetailsModal GlobalContext={GlobalContext}/>}
    </div>
  );
};

export default App;
