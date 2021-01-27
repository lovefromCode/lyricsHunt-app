import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import KeepTrack from "./Components/KeepTrack";
import { LyricsProvider } from "./LyricsContext";
import Lyrics from "./Tracks/Lyrics";

function App() {
  return (
    <LyricsProvider>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact="true" path="/" component={KeepTrack} />
              <Route exact="true" path="/lyrics/:id" component={Lyrics} />
            </Switch>
          </div>
        </div>
      </Router>
    </LyricsProvider>
  );
}

export default App;
