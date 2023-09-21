import { useState } from 'react';

export const useApplicationData = function() {
  //set up required hooks
  const [favPhotos, setFavPhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(undefined);

  //create globalstate
  const state = { favPhotos, isModalOpen, modalPhoto };

  //create state update functions

  //handle click on photo that opens modal
  const setPhotoSelected = function(event) {
    event.preventDefault;
  }

  //handle click on favourite photo button
  const updateFavPhotoIds = function() {
      event.preventDefault;
  }

  //handles click on modal close button
  const onCloseModal = function(event) {
      event.preventDefault;
      console.log('closing modal!')
      setIsModalOpen(false);
  }

  return { state, setPhotoSelected, updateFavPhotoIds, onCloseModal}
}

