import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SongList from "./SongList";
import "../CSS/Container.css";

const Container = () => {
  const [songData, setSongData] = useState([
    {
      id: 1,
      title: "StarWalkin",
      artist: "Lil Nas X",
      genre: "pop",
      rating: "4",
    },
  ]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr className="song-header">
              <th
                className="song-row__item"
                onClick={() => console.log("klik Title")}
              >
                Title
              </th>
              <th
                className="song-row__item"
                onClick={() => console.log("klik Artist")}
              >
                Artist
              </th>
              <th
                className="song-row__item"
                onClick={() => console.log("klik Genre")}
              >
                Genre
              </th>
              <th
                className="song-row__item"
                onClick={() => console.log("klik Rating")}
              >
                Rating
              </th>
            </tr>
          </tbody>
        </table>

        <SongList songs={songData} setSongData={setSongData} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Container;
