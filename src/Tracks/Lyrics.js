import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, Divider, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

import Spinner from "../Components/Spinner";

const apikey = `e3b76ae33143f2a4d2fc386c929f813c`;

const useStyle = makeStyles({
  root: {
    height: "50%",
    width: "100%",
    border: "1px solid lightgrey",
  },
});
export default function Lyrics(props) {
  const classes = useStyle();
  const [lyricsBody, setLyricsBody] = useState({});
  const [artistInfo, setArtistInfo] = useState({});

  useEffect(() => {
    const fetchData1 = async () => {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=${apikey}`
      );
      const data = await response.json();
      console.log(data.message.body.lyrics);
      setLyricsBody({
        lyrics_body: data.message.body.lyrics
          ? data.message.body.lyrics.lyrics_body
          : "Sorry... No permission to access lyrics. It's a free service",
      });
    };
    fetchData1();
  }, []);

  useEffect(() => {
    const fetchData2 = async () => {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&apikey=${apikey}`
      );
      const data = await response.json();
      console.log(data.message.body.track);
      setArtistInfo({
        album_id: data.message.body.track.album_id,
        album_name: data.message.body.track.album_name,
        artist_name: data.message.body.track.artist_name,
        updated_time: data.message.body.track.updated_time.slice(0, 10),
        genre: data.message.body.track.primary_genres.music_genre_list.length
          ? data.message.body.track.primary_genres.music_genre_list[0]
              .music_genre.music_genre_name
          : "Sorry... No permission to access genre. It's a free service",
      });
    };
    fetchData2();
  }, []);

  return (
    <div style={{ marginTop: "40px" }}>
      {Object.keys(lyricsBody).length === 0 &&
      Object.keys(artistInfo).length === 0 ? (
        <Spinner />
      ) : (
        <>
          <Link className="btn btn-dark btn-sm mb-4" to="/">
            <ArrowBackIcon /> Go back
          </Link>
          <List className={classes.root}>
            <ListItem>
              <Typography variant="h7">
                <strong>Album:</strong> {artistInfo.album_name}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem>
              <Typography variant="h7">
                <strong>Artist:</strong> {artistInfo.artist_name}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem>
              <Typography variant="h7">
                <strong>Lyrics:</strong> {lyricsBody.lyrics_body}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem>
              <Typography variant="h7">
                <strong>Genre:</strong> {artistInfo.genre}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem>
              <Typography variant="h7">
                <strong>Album Id:</strong> {artistInfo.album_id}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem>
              <Typography variant="h7">
                <strong>Released date:</strong> {artistInfo.updated_time}
              </Typography>
            </ListItem>
          </List>
        </>
      )}
    </div>
  );
}
