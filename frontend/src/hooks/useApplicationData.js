import { useReducer, useEffect } from 'react';

const initialState = {
  favPhotos: [],
  isModalOpen: false,
  modalPhoto: undefined,
  photoData: [],
  topicData: []
};

export const ACTIONS = {
  SET_MODAL_OPEN: 'SET_MODAL_OPEN',
  SET_MODAL_CLOSE: 'SET_MODAL_CLOSE',
  TOGGLE_FAV_PHOTO: 'TOGGLE_FAV_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_MODAL_OPEN:
      return { ...state, isModalOpen: true, modalPhoto: action.payload };
    case ACTIONS.SET_MODAL_CLOSE:
      return { ...state, isModalOpen: false };
    case ACTIONS.TOGGLE_FAV_PHOTO:
      const { id } = action.payload;
      const favPhotosClone = [...state.favPhotos];
      const i = favPhotosClone.indexOf(id);

      if (i < 0) {
        favPhotosClone.push(id);
      } else {
        favPhotosClone.splice(i, 1);
      }

      return { ...state, favPhotos: favPhotosClone };

    case ACTIONS.SET_PHOTO_DATA:
      return {...state, photoData: action.payload}

    default:
      throw new Error('Tried to reduce with unsupported action type');
    
  }
};

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
    .then(res => res.json())
    .then(result => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: result}))
  }, [])

  const setPhotoSelected = (event, id) => {
    event.preventDefault();
    dispatch({ type: ACTIONS.SET_MODAL_OPEN, payload: id });
    console.log(state.modalPhoto);
  };

  const updateFavPhotoIds = (event, toggleFav, id) => {
    event.preventDefault();
    dispatch({ type: 'TOGGLE_FAV_PHOTO', payload: { id } });
    toggleFav();
    event.stopPropagation();
  };

  const onCloseModal = (event) => {
    event.preventDefault();
    console.log('closing modal!');
    dispatch({ type: 'SET_MODAL_CLOSE' });
  };

  return { state, setPhotoSelected, updateFavPhotoIds, onCloseModal };
};


