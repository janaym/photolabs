import { useReducer, useEffect } from 'react';

const initialState = {
  favPhotos: [],
  isModalOpen: false,
  modalPhoto: undefined,
  photoData: [],
  topicData: [],
  selectedTopic: undefined
};

export const ACTIONS = {
  SET_MODAL_OPEN: 'SET_MODAL_OPEN',
  SET_MODAL_CLOSE: 'SET_MODAL_CLOSE',
  TOGGLE_FAV_PHOTO: 'TOGGLE_FAV_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC'
};

//state controlling logic
const reducer = (state, action) => {
  switch (action.type) {
    //open photo modal
    case ACTIONS.SET_MODAL_OPEN:
      return { ...state, isModalOpen: true, modalPhoto: action.payload };
    
    //close photo modal
    case ACTIONS.SET_MODAL_CLOSE:
      return { ...state, isModalOpen: false };

    //add/remove photo to favourites
    case ACTIONS.TOGGLE_FAV_PHOTO:
      const { id } = action.payload;
      //clone immutable state favPhotos
      const favPhotosClone = [...state.favPhotos];
      //check if photo id is alread in favPhotos
      const i = favPhotosClone.indexOf(id);

      //if no, add to favPhots
      if (i < 0) {
        favPhotosClone.push(id);
      } 
      //if yes, remove from favPhotos
      else {
        favPhotosClone.splice(i, 1);
      }

      return { ...state, favPhotos: favPhotosClone };

    //set the photos to be displayed 
    case ACTIONS.SET_PHOTO_DATA:
      return {...state, photoData: action.payload};
    
    //set the topics to be displayed
    case ACTIONS.SET_TOPIC_DATA:
      return {...state, topicData: action.payload};

    //set which specific topic is selected
    case ACTIONS.SET_SELECTED_TOPIC:
      return({...state, selectedTopic: action.payload})

    default:
      throw new Error('Tried to reduce with unsupported action type');
    
  }
};

//custom hook 
//returns state info and state modifying functions
export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //load topics from api
  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
    .then(res => res.json())
    .then(result => dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: result}))
  }, [])

  //load photos from api. Will import from specific topic when clicked. 
  //dependencies: state.selectedTopic
  useEffect(() => {
    //case: no topic clicked
    if(!state.selectedTopic) {
      fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(result => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: result})); 
    } 
    //case: topic clicked
    else {
      const topic_id = state.selectedTopic;
      if(state.selectedTopic) {
        fetch(`http://localhost:8001/api/topics/photos/${topic_id}`)
        .then(res => res.json())
        .then(result => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: result}));
      }
    }
  },[state.selectedTopic]);

  //set which photo is selected to appear in modal
  const setPhotoSelected = (event, id) => {
    event.preventDefault();
    dispatch({ type: ACTIONS.SET_MODAL_OPEN, payload: id });
  };

  //add/remove photo from favs
  const updateFavPhotoIds = (event, toggleFav, id) => {
    event.preventDefault();
    dispatch({ type: 'TOGGLE_FAV_PHOTO', payload: { id } });
    toggleFav();
    event.stopPropagation();
  };

  //close photo modal
  const onCloseModal = (event) => {
    event.preventDefault();
    dispatch({ type: 'SET_MODAL_CLOSE' });
  };

  //set which topic photos to be displayed
  const setSelectedTopic = (event, topic_id) => {
    event.preventDefault();
    dispatch({type: ACTIONS.SET_SELECTED_TOPIC, payload: topic_id });
  }

  return { state, setPhotoSelected, updateFavPhotoIds, onCloseModal, setSelectedTopic };
};


