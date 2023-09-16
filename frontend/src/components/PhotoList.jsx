import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];



const PhotoList = (props) => {

  const { photos, GlobalState} = props;

  return (
    <ul className="photo-list">

      {/* Loop through data */}
      {photos.map((photoItem) => {

        //props to pass
        const photoDetails = {
          id: photoItem.id,
          location: photoItem.location,
          imageSource: photoItem.urls.regular,
          username: photoItem.user.username,
          profile: photoItem.user.profile
        };
        
        //photoListItem to render
        return <PhotoListItem key={photoItem.id} GlobalState={GlobalState} {...photoDetails}/>;

      })}
    </ul>
  );
};

export default PhotoList;
