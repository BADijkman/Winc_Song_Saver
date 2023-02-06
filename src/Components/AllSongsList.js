import React from "react";
import SongList from "./SongList";

const AllSongsList = (props) => {
  return (
    <div>
      <SongList
        songs={props.songs}
        display={props.display}
        onDeleteItem={props.onDeleteItem}
      />
    </div>
  );
};

export default AllSongsList;
