import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ GlobalContext }) => {
  const photoData = GlobalContext.state.photoData;

  return (
    <ul className="photo-list">
      {/* Loop through data */}
      {photoData.map((photoItem) => {
        //render individual photo item
        return <PhotoListItem key={photoItem.id} GlobalContext={GlobalContext} photoItem={photoItem}/>;
      })}
    </ul>
  );
};

export default PhotoList;
