import { combineReducers } from "redux";
// REDUCER // 
// NOTE: it's overkill to put the SongsList in Redux because it's never going to change state -- it's a static list. But it's been added here to show how to 'reduxify' an app //
const songReducer = () => {
  return [
    { title: 'We Won', duration: '3:33' },
    { title: 'Mr. Stark', duration: '3:11' },
    { title: 'We', duration: '2:33' },
    { title: 'Won', duration: '2:33' },
    { title: 'We Did It', duration: '2:33' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => { //'Null' to indicate that when the app starts up, there won't be a selected song
  if (action.type === 'SONG_SELECTED') {  // Technically, you don't need the if statement, but including it is hygienic if/when the app grows to be more complex.
    return action.payload;
  }

  return selectedSong; // (if the first condition isn't true) This will return whatever the currently selected song is
};

// COMBINED FOR REDUX STORE -- imported into source index.js as "reducers"//
export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});