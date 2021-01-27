import React, { useState, createContext, useEffect } from "react";

const apikey = "e3b76ae33143f2a4d2fc386c929f813c";
export const LyricsContext = createContext();
export const HeadingContext = createContext();

export const LyricsProvider = (props) => {
  const [tracklist, setTrackList] = useState([]);
  const [heading, setHeading] = useState("Top 10 Tracks");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${apikey}`
      );
      const data = await response.json();
      console.log(data);
      setTrackList(data.message.body.track_list);
    };
    fetchData();
  }, []);

  return (
    <LyricsContext.Provider value={[tracklist, setTrackList]}>
      <HeadingContext.Provider value={[heading, setHeading]}>
        {props.children}
      </HeadingContext.Provider>
    </LyricsContext.Provider>
  );
};
