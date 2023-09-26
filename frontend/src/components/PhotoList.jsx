import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';
import { unpackPhotoDetails } from '../helpers/unpackPhotoDetails.js';




const PhotoList = ({ GlobalContext }) => {


  return (
    <ul className="photo-list">

      {/* Loop through data */}
      {GlobalContext.state.photoData.map((photoItem) => {
        //photoListItem to render
        return <PhotoListItem key={photoItem.id} GlobalContext={GlobalContext} photoItem={photoItem}/>;

      })}
    </ul>
  );
};

export default PhotoList;
