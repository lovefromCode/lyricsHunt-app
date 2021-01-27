import React, { useContext } from "react";
import { LyricsContext, HeadingContext } from "../LyricsContext";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Search from "../Tracks/Search";

const useStyles = makeStyles({
  card: {
    width: "480px",
    margin: "30px",
  },
  artist: {
    fontWeight: "bolder",
    fontSize: "20px",
  },
  track_name: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: "bold",
  },
  album_name: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: "bold",
  },
});

export default function Track() {
  const classes = useStyles();

  const [track_list, setTrackList] = useContext(LyricsContext);
  const [heading, setHeading] = useContext(HeadingContext);

  return (
    <>
      <Search />
      <h2 className="my-4 text-center">{heading}</h2>
      <div className="card-cont">
        {track_list.map((track) => {
          return (
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.artist}>
                  {track.track.artist_name}
                </Typography>
                <Typography className={classes.track_name}>
                  <i className="fas fa-play mr-3"></i>
                  <div> {track.track.track_name}</div>
                </Typography>
                <Typography className={classes.album_name}>
                  <i className="fas fa-compact-disc mr-3"></i>
                  <div> {track.track.album_name}</div>
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  to={`/lyrics/${track.track.track_id}`}
                  className="btn btn-block btn-sm"
                  style={{ background: "#414141", color: "#fff" }}
                >
                  See Lyrics
                </Link>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
}
