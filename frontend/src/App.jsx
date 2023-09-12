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

let photos = [];
let i = 0;
while (i < 3) {
  const photoItem = sampleDataForPhotoListItem;
  
  photoItem.key = i;
  photos.push(photoItem)
  i++;
  console.log(photos)
}
console.log(photos)

// Note: Rendering a single component to build components in isolation
const App = () => {

  const photos = new Array (3)
  return (
    <div className="App">
      <PhotoListItem {...sampleDataForPhotoListItem}/>
      

    </div>
  );
};

export default App;
