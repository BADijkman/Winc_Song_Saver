import React from "react";
import Song from "./Song";

const SongList = (props) => {
  return (
    <table style={{ width: "100%" }}>
      {props.songs.map((song) => (
        <Song key={song.id} song={song} />
      ))}
    </table>
  );
};

export default SongList;
