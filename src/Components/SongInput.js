import React, { useState, useEffect } from "react";
import "../CSS/SongInput.css";

function SongInput({
  onSongAdd,
  onSortArtistAZ,
  onSortArtistZA,
  onSortRatingUp,
  onSortRatingDown,
  onFilterGenre,
  onFilterRating,
}) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [btnDisplayArtist, setBtnDisplayArtist] = useState(true);
  const [btnDisplayRating, setBtnDisplayRating] = useState(true);
  const [filteredGenre, setFilteredGenre] = useState("no filter");
  const [filteredRating, setFilteredRating] = useState("no filter");

  const onSubmit = () => {
    if (
      title.length > 0 &&
      artist.length > 0 &&
      selectedGenre.length > 0 &&
      selectedRating.length > 0
    ) {
      onSongAdd(title, artist, selectedGenre, selectedRating);
      setTitle("");
      setArtist("");
      setSelectedGenre("");
      setSelectedRating("");
      setFilteredRating("no filter");
      setFilteredGenre("no filter");
    }
  };
  const onRefresh = () => {
    window.location.reload(false);
  };

  const clickHandlerSortArtist = () => {
    btnDisplayArtist ? onSortArtistAZ() : onSortArtistZA();
    setBtnDisplayArtist(!btnDisplayArtist);
  };

  const clickHandlerSortRating = () => {
    btnDisplayRating ? onSortRatingUp() : onSortRatingDown();
    setBtnDisplayRating(!btnDisplayRating);
  };

  const ratingFilter = (e) => {
    setFilteredRating(e.target.value);
    setFilteredGenre(" genre no filter");
    onFilterRating(e.target.value);
  };

  const genreFilter = (e) => {
    setFilteredGenre(e.target.value);
    setFilteredRating(" rating no filter");
    onFilterGenre(e.target.value);
  };

  return (
    <div className="songinput">
      <div className="input">
        <input
          className="input-width"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          placeholder="title"
          maxLength="20"
        />
      </div>
      <div className="input">
        <input
          className="input-width"
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          id="artist"
          name="artist"
          placeholder="artist"
          maxLength="20"
        />
      </div>
      <div className="input">
        <select
          className="input-width"
          id="genre"
          name="genre"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option disabled value="">
            genre
          </option>
          <option value="rock">rock</option>
          <option value="pop">pop</option>
          <option value="jazz">jazz</option>
        </select>
      </div>

      <div className="input">
        <select
          className="input-width"
          id="rating"
          name="rating"
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
        >
          <option value="" disabled>
            rating
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button className="button" onClick={onSubmit}>
        Add
      </button>

      {/* **********FILTERS******** */}

      <div className="filter-options">
        <button className="sortBtn" onClick={clickHandlerSortArtist}>
          Artist {btnDisplayArtist ? "A-Z" : "Z-A"}
        </button>

        <button className="sortBtn" onClick={clickHandlerSortRating}>
          Rating {btnDisplayRating ? "1-5" : "5-1"}
        </button>

        <select
          className="filterBtn"
          value={filteredGenre}
          onChange={genreFilter}
          name="filterGenre"
          id="filterGenre"
        >
          <option value="no filter"> Filter by genre</option>
          <option value="rock">rock</option>
          <option value="pop">pop</option>
          <option value="jazz">jazz</option>
        </select>

        <select
          className="filterBtn"
          value={filteredRating}
          onChange={ratingFilter}
          name="filterRating"
          id="filterRating"
        >
          <option value="no filter">Filter by rating</option>
          <option value="1">rating 1</option>
          <option value="2">rating 2</option>
          <option value="3">rating 3</option>
          <option value="4">rating 4</option>
          <option value="5">rating 5</option>
        </select>
      </div>

      <button
        className="refreshBtn button"
        onClick={onRefresh}
        placeholder="Refresh page"
      >
        Refresh
      </button>
    </div>
  );
}

export default SongInput;
