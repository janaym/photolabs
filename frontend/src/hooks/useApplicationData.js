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
  const setPhotoSelected = function(event, id) {
    event.preventDefault;
    setIsModalOpen(true);
    setModalPhoto(id);
  }

  //handle click on favourite photo button
  const updateFavPhotoIds = function(event, toggleFav, id) {

      event.preventDefault;

    //clone immutable hook data
    const favPhotosClone = [...favPhotos];
    
    //check if id in favPhotos index
    const i = favPhotosClone.indexOf(id);

    //add or remove accordingly
    if (i < 0){
      //console.log('add fav!');
      favPhotosClone.push(id);
      setFavPhotos(favPhotosClone);
    } else {
      //console.log('remove fav!')
      favPhotosClone.splice(i,1);
      setFavPhotos(favPhotosClone);
    }
    
    //change fav button colour
    toggleFav();

    //stop bubbling
    event.stopPropagation();
  }

  //handles click on modal close button
  const onCloseModal = function(event) {
      event.preventDefault;
      console.log('closing modal!')
      setIsModalOpen(false);
  }

  return { state, setPhotoSelected, updateFavPhotoIds, onCloseModal}
}

