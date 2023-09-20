import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';
import { unpackPhotoDetails } from '../helpers/unpackPhotoDetails.js';




const PhotoList = (props) => {

  const { photos, GlobalState} = props;

  return (
    <ul className="photo-list">

      {/* Loop through data */}
      {photos.map((photoItem) => {
        //photoListItem to render
        return <PhotoListItem key={photoItem.id} GlobalState={GlobalState} photoItem={photoItem}/>;

      })}
    </ul>
  );
};

export default PhotoList;
