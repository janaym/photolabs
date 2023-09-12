import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};


//make arr of three photo items each with unique key
let photos_array = [];
for (const i of [0,1,2]) {
  const photo_item = sampleDataForPhotoListItem;
  photo_item.key = i;
  photos_array.push(<PhotoListItem {...photo_item}/>)
}


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {photos_array}


    </div>
  );
};

export default App;
