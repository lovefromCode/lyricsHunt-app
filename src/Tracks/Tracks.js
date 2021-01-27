import React, { useContext } from "react";
import { LyricsContext, HeadingContext } from "../LyricsContext";
import Track from "./Track";
import Spinner from "../Components/Spinner";

export default function Tracks() {
  const [tracklist, setTrackList] = useContext(LyricsContext);
  return <div>{tracklist.length ? <Track /> : <Spinner />}</div>;
}
