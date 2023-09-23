import { useReducer } from 'react';

const initialState = {
  favPhotos: [],
  isModalOpen: false,
  modalPhoto: undefined,
};

export const ACTIONS = {
  SET_MODAL_OPEN: 'SET_MODAL_OPEN',
  SET_MODAL_CLOSE: 'SET_MODAL_CLOSE',
  TOGGLE_FAV_PHOTO: 'TOGGLE_FAV_PHOTO',

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
    default:
      throw new Error('Tried to reduce with unsupported action type');
  }
};

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPhotoSelected = (event, id) => {
    event.preventDefault();
    dispatch({ type: 'SET_MODAL_OPEN', payload: id });
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
    dispatch({ type: 'SET_MODAL_CLOSED' });
  };

  return { state, setPhotoSelected, updateFavPhotoIds, onCloseModal };
};


