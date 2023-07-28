import { ADD_MUSIC, REMOVE_MUSIC, UPDATE_ALBUM } from 'redux';

export const addMusic = (title) => {
    return {
      type: ADD_MUSIC,
      payload: title,
    };
  };
  
  export const removeMusic = (title) => {
    return {
      type: REMOVE_MUSIC,
      payload: title,
    };
  };
  
  export const updateAlbum = (title) => {
    return {
      type: UPDATE_ALBUM,
      payload: title,
    };
  };