import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


class SongList extends Component {
  renderList() {
   return this.props.songs.map((song) => {
    return (
      <div className="item" key={song.title}>
          <div className=" right floated content">
            <button className="ui button primary" onClick={() => {this.props.selectSong(song)}}>
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
          </div>
      </div>
    );
   });
  }

  render() {
    return (
     <div className="ui divided list">
       {this.renderList()}
     </div>
    );
  }


}

const mapStateToProp = state => { // defined mapState... by convention. This contains all the elements inside our Redux store.
   // This will return the songs, which will eventually be used as props in the render method above. this.props will be equal to the object below.
  return { songs: state.songs };
};
//calling action to this component
export default connect(mapStateToProp, {selectSong})(SongList);