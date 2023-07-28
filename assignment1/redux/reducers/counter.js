import { addMusic, removeMusic, updateMusic } from "../actions";
import { ADD_MUSIC, REMOVE_MUSIC, UPDATE_ALBUM } from "../actionsTypes";

const initialState = {
    music: [
        { artist: 'Artist 1', title: 'music 1', album: 'album 1'},
        { artist: 'Artist 2', title: 'music 2', album: 'album 2'}
    ],
};

export default function = (state = initialState, action) => {
    switch (action.type) {
      case ADD_MUSIC:
        const { addMusic } = action.payload;
        return {
          ...state,
          music: state.music + addMusic
        };
      case REMOVE_MUSIC:
        const { removeMusic } = action.payload;
        return {
          ...state,
          music: state.music - removeMusic
        };
      case UPDATE_ALBUM:
        const { updateAlbum } = action.payload;
        return {
          ...state,
          music: state.music + updateAlbum
          };
          default:
            return state;
    }
  };

  
