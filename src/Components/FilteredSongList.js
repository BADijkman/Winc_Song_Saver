import React from "react";
import SongList from "./SongList";

const FilteredSongsList = (props) => {
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

export default FilteredSongsList;
