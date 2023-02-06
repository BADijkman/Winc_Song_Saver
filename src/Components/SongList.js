import React from "react";
import Song from "./Song";

const SongList = (props) => {
  const song = props.songs.map((song) => (
    <Song
      key={song.id}
      song={song}
      display={props.display}
      onDeleteItem={() => props.onDeleteItem(song)}
    />
  ));

  return <table style={{ width: "100%" }}>{song}</table>;
};

export default SongList;
