import "./App.css";
import UserForm from "./UserForm";
import { Link, Routes, Route } from "react-router-dom";
import Aboutus from "./Aboutus";
import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import piano from "./img/piano.mp3";
import piano2 from "./img/piano2.ogg";

function App() {
  const [showlink2, setshowlink2] = useState(false);
  const onClick = () => setshowlink2(true);
  const LinkHome = () => (
    <div>
      <nav>
        <Link
          to="/aboutus"
          className="position-absolute posaboutus"
          onClick={onClick}
        >
          <h5 className="aboutuslink">About us</h5>
        </Link>
      </nav>
    </div>
  );
  useEffect(() => {
    document.body.addEventListener("click", onClick);
    document.body.addEventListener("click", play);
    function play() {
      document.getElementById("sound").play();
    }
    return function cleanup() {
      document.body.removeEventListener("click", onClick);
    };
  }, []);
  return (
    <div className="App">
      {showlink2 ? null : <LinkHome />}
      <Routes>
        <Route exact path="/" element={<UserForm />}></Route>
        <Route exact path="/aboutus" element={<Aboutus />}></Route>
      </Routes>
      <ReactAudioPlayer src={piano2} loop id="sound" />
    </div>
  );
}

export default App;
