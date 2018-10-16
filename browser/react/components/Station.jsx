import React from 'react';
import Songs from './Songs';

export default function (props) {
    console.log(props)
  return (
    <div>
      <h3>{props.genreName} Station</h3>
      <Songs 
        songs={props.songs} 
        currentSong={props.currentSong} 
        start={props.start}
      />
    </div>
  );
}