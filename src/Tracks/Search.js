import React, { useContext, useState } from "react";
import { LyricsContext, HeadingContext } from "../LyricsContext";

const apikey = "e3b76ae33143f2a4d2fc386c929f813c";

export default function Search() {
  const [track_list, setTrackList] = useContext(LyricsContext);
  const [heading, setHeading] = useContext(HeadingContext);
  const [trackTitle, setTrackTitle] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const fetchDetails = async () => {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${apikey}`
      );
      const data = await response.json();
      // console.log(data.message.body.track_list); 
      setTrackList(data.message.body.track_list);
      setHeading("Search Results");
    };
    fetchDetails();
  };

  return (
    <>
      <div className="card" style={{ margin: "30px 35px 0 35px" }}>
        <div className="card-body">
          <p className="card-title text-center" style={{ fontSize: "50px" }}>
            Search For A Song
          </p>
          <p className="card-text text-center">
            Get the lyrics, genre etc. for any song
          </p>
          <form>
            <input
              type="text"
              className="form-control mb-2"
              name="trackTitle"
              value={trackTitle}
              placeholder="Search artist..."
              onChange={(e) => setTrackTitle(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-block"
              style={{ background: "#414141", color: "#fff" }}
              onClick={handleClick}
            >
              Hunt the lyrics...
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
