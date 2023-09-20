import React from 'react'

export const unpackPhotoDetails = function(photoItem) {
  return {
    id: photoItem.id,
    location: photoItem.location,
    imageSource: photoItem.urls.regular,
    username: photoItem.user.username,
    profile: photoItem.user.profile
  };
   
}

