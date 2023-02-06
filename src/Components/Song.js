import React from "react";
import "../CSS/Song.css";

const Song = (props) => {
  const displayStyle = {
    display: "none",
  };
  return (
    <tbody>
      <tr className="playlist" style={props.display ? null : displayStyle}>
        <th className="playlist-item">{props.song.title}</th>
        <th>{props.song.artist}</th>
        <th>{props.song.genre}</th>
        <th>{props.song.rating}</th>
        <th style={props.song.artist ? null : displayStyle}>
          <button className="delBtn" onClick={props.onDeleteItem}>delete</button>
        </th>
      </tr>
    </tbody>
  );
};

export default Song;
