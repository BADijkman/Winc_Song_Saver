import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AllSongsList from "./AllSongsList";
import FilteredSongsList from "./FilteredSongList";
import SongInput from "./SongInput";
import "../CSS/Container.css";
import { v4 } from "uuid";

const Container = () => {
  const [songData, setSongData] = useState([]);

  const [filteredSongData, setFilteredSongData] = useState([]);

  const addSong = (title, artist, genre, rating) => {
    const randomId = v4();
    setSongData((prevState) => [
      ...prevState,
      {
        id: randomId,
        title: title,
        artist: artist,
        genre: genre,
        rating: rating,
      },
    ]);
  };

  useEffect(() => {
    setFilteredSongData(songData);
  }, [songData]);

  const deleteItem = (delSong) => {
    setSongData(
      [...songData].filter((song) => {
        return song.id !== delSong.id;
      })
    );

    setFilteredSongData(
      [...songData].filter((song) => {
        return song.id !== delSong.id;
      })
    );
  };

  const onSortArtistAZ = () => {
    const sortArtistSongData = [...filteredSongData].sort((a, b) => {
      return a.artist > b.artist ? 1 : -1;
    });
    setFilteredSongData(sortArtistSongData);
  };

  const onSortArtistZA = () => {
    const sortArtistSongData = [...filteredSongData].sort((a, b) => {
      return a.artist > b.artist ? -1 : 1;
    });
    setFilteredSongData(sortArtistSongData);
  };

  const onSortRatingUp = () => {
    const sortRatingSongData = [...filteredSongData].sort(
      (a, b) => a.rating - b.rating
    );
    setFilteredSongData(sortRatingSongData);
  };

  const onSortRatingDown = () => {
    const sortRatingSongData = [...filteredSongData].sort(
      (a, b) => b.rating - a.rating
    );
    setFilteredSongData(sortRatingSongData);
  };

  const filterByGenre = (genre) => {
    if (genre === "no filter") {
      setFilteredSongData(songData);
    } else {
      const filterRatingSongData = [...songData].filter(
        (song) => song.genre === genre
      );
      setFilteredSongData(filterRatingSongData);
    }
  };

  const filterByRating = (rating) => {
    if (rating === "no filter") {
      setFilteredSongData(songData);
    } else {
      const filterRatingSongData = [...songData].filter(
        (song) => song.rating === rating
      );
      setFilteredSongData(filterRatingSongData);
    }
  };

  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <SongInput
          onSongAdd={addSong}
          onSortArtistAZ={onSortArtistAZ}
          onSortArtistZA={onSortArtistZA}
          onSortRatingUp={onSortRatingUp}
          onSortRatingDown={onSortRatingDown}
          onFilterGenre={filterByGenre}
          onFilterRating={filterByRating}
        />
        <table style={{ width: "100%" }}>
          <tbody>
            <tr className="song-header">
              <th className="song-row__item">Title</th>
              <th className="song-row__item">Artist</th>
              <th className="song-row__item">Genre</th>
              <th className="song-row__item">Rating</th>
              <th className="song-row__item"></th>
            </tr>
          </tbody>
        </table>
        <AllSongsList
          songs={songData}
          onDeleteItem={deleteItem}
          display={false}
        />
        <FilteredSongsList
          songs={filteredSongData}
          onDeleteItem={deleteItem}
          display={true}
        />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Container;
